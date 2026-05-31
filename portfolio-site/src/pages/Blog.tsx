import { motion } from 'framer-motion'
import { ExternalLink, Eye, Calendar, Tag, TrendingUp } from 'lucide-react'
import { DEVTO_USERNAME, DEVTO_STATS_JSON_URL } from '../config/constants'
import { useState, useEffect } from 'react'

interface BlogPost {
  title: string;
  description: string;
  url: string;
  public_reactions_count: number;
  published_at: string;
  tag_list: string[];
  reading_time_minutes: number;
  cover_image: string | null;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [backendTotalViews, setBackendTotalViews] = useState<number | null>(null);
  const [articleViews, setArticleViews] = useState<Record<string, number>>({});
  const [followers, setFollowers] = useState<string | number | null>(null);
  const [avgRating, setAvgRating] = useState<string | number | null>(null);

  useEffect(() => {
    // Fetch external stats JSON only (must be provided via DEVTO_STATS_JSON_URL)
    const fetchStatsJson = async () => {
      if (!DEVTO_STATS_JSON_URL) return
      try {
        const res = await fetch(DEVTO_STATS_JSON_URL, { cache: 'no-store' })
        if (!res.ok) {
          console.error('Error fetching stats JSON:', res)
          return}
        const j = await res.json()
        if (typeof j.totalViews === 'number') setBackendTotalViews(j.totalViews)
        if (j.viewsPerArticle && typeof j.viewsPerArticle === 'object') setArticleViews(j.viewsPerArticle)
        if (typeof j.followers !== 'undefined') setFollowers(j.followers)
        if (typeof j.avgRating !== 'undefined') setAvgRating(j.avgRating)
      } catch (e) {
    console.error('error fetching json:' , e)
        // fail silently; views will be empty
      }
    }

    fetchStatsJson()
  }, []);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(`https://dev.to/api/articles?username=${DEVTO_USERNAME}`);
        if (!response.ok) {
          throw new Error(`Error fetching articles: ${response.statusText}`);
        }
        const data: BlogPost[] = await response.json();
        setBlogPosts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Sort posts by views (from JSON). If equal views, sort by date (newest first).
  const getViews = (post: BlogPost) => {
    const v = articleViews[post.url]
    return typeof v === 'number' ? v : 0
  }

  const sortedPosts = [...blogPosts].sort((a, b) => {
    const viewDiff = getViews(b) - getViews(a)
    if (viewDiff !== 0) return viewDiff
    const dateA = new Date(a.published_at).getTime()
    const dateB = new Date(b.published_at).getTime()
    return dateB - dateA
  })

  const featuredPosts = sortedPosts.slice(0, 3);
  const regularPosts = sortedPosts.slice(3);

  const totalViewsComputed = backendTotalViews ?? 0

  const stats = {
    totalPosts: blogPosts.length,
    totalViews: totalViewsComputed?.toLocaleString() ?? '-',
    followers: followers ?? '-',
    avgRating: avgRating ?? '-'
  }
// mafna 
  if (loading) {
    return <div className="container section text-center">Loading blog posts...</div>;
  }

  if (error) {
    return <div className="container section text-center text-error">Error: {error}</div>;
  }

  return (
    <div className="container">
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <h1>Blog & Writing</h1>
          <p className="section-subtitle">
          Breaking down complex technical topics into practical insights for developers and learners worldwide.
          </p>
        </div>

        {/* Blog Stats */}
        <motion.div 
          className="blog-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="stats-grid">
            <div className="stat-item">
              <TrendingUp size={24} />
              <div className="stat-content">
                <span className="stat-number">{stats.totalPosts}+</span>
                <span className="stat-label">Articles Published</span>
              </div>
            </div>
            <div className="stat-item">
              <Eye size={24} />
              <div className="stat-content">
                <span className="stat-number">{stats.totalViews}+</span>
                <span className="stat-label">Total Readers</span>
              </div>
            </div>
            <div className="stat-item">
              <ExternalLink size={24} />
              <div className="stat-content">
                <span className="stat-number">{stats.followers}</span>
                <span className="stat-label">Dev.to Followers</span>
              </div>
            </div>
            <div className="stat-item">
              <Tag size={24} />
              <div className="stat-content">
                <span className="stat-number">{stats.avgRating}</span>
                <span className="stat-label">Average Rating</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-center mb-6">Featured Articles</h2>
          <div className="featured-posts">
            {featuredPosts.map((post) => {
              const viewsNum = articleViews[post.url] ?? post.public_reactions_count ?? 0;
              return (
                <motion.div
                  key={post.url}
                  className="featured-post-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="post-header">
                    <h3>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="post-title-link"
                        aria-label={`Open ${post.title} on Dev.to`}
                      >
                        {post.title}
                      </a>
                    </h3>
                    <div className="post-meta">
                      <div className="post-views">
                        <Eye size={16} />
                        <span>{viewsNum.toLocaleString()}</span>
                      </div>
                      <div className="post-reactions">
                        <TrendingUp size={16} />
                        <span> {post.public_reactions_count ?? 0}</span>
                      </div>
                      <div className="post-date">
                        <Calendar size={16} />
                        <span>{new Date(post.published_at).toLocaleDateString()}</span>
                      </div>
                      <div className="post-read-time">{post.reading_time_minutes} min read</div>
                    </div>
                  </div>
                  
                  <p className="post-excerpt">{post.description}</p>
                  
                  {post.cover_image && (
                      <div className="post-cover-image mb-4">
                    <img src={post.cover_image} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                  </div>
                  )}

                  <div className="post-tags">
                    {post.tag_list.map((tag) => (
                      <span key={tag} className="post-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <a 
                    href={post.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="post-link"
                  >
                    Read on Dev.to <ExternalLink size={16} />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Regular Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-center mb-6">More Articles</h2>
          <div className="regular-posts">
            {regularPosts.map((post) => {
              const viewsNum = articleViews[post.url] ?? post.public_reactions_count ?? 0;
              return (
                <motion.div
                  key={post.url}
                  className="regular-post-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="post-content">
                    <h4>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="post-title-link-small"
                        aria-label={`Open ${post.title} on Dev.to`}
                      >
                        {post.title}
                      </a>
                    </h4>
                    <p className="post-excerpt-small">{post.description}</p>
                    
                    <div className="post-meta-small">
                      <span className="post-views-small">
                        <Eye size={14} />
                        {viewsNum.toLocaleString()}
                      </span>
                      <span className="post-reactions-small">
                        <TrendingUp size={14} /> {post.public_reactions_count ?? 0}
                      </span>
                      <span className="post-date-small">
                        <Calendar size={14} />
                        {new Date(post.published_at).toLocaleDateString()}
                      </span>
                      <span className="post-read-time-small">{post.reading_time_minutes} min read</span>
                    </div>
                    
                    <div className="post-tags-small">
                      {post.tag_list.slice(0, 3).map((tag) => (
                        <span key={tag} className="post-tag-small">{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* title is now clickable; removed icon-only link */}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="blog-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="card text-center">
            <h3>Follow My Writing Journey</h3>
            <p>Get notified when I publish new articles about technology, development, and career growth.</p>
            <a 
              href={`https://dev.to/${DEVTO_USERNAME}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink size={20} />
              Follow on Dev.to
            </a>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Blog
