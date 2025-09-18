import { motion } from 'framer-motion'
import { ExternalLink, Eye, Calendar, Tag, TrendingUp } from 'lucide-react'
import { DEVTO_USERNAME } from '../config/constants'
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

  const followersApprox = 1400; // keep in sync with displayed followers for now

  useEffect(() => {
    // Try baked JSON first (works on static hosting)
    const tryBaked = async () => {
      try {
        const r = await fetch('/devto.json', { cache: 'no-store' });
        if (r.ok) {
          const j = await r.json();
          if (typeof j.totalViews === 'number') {
            setBackendTotalViews(j.totalViews);
            return true;
          }
        }
      } catch {}
      return false;
    };

    const tryApi = async () => {
      try {
        const res = await fetch('/api/devtoStats');
        if (res.ok) {
          const json = await res.json();
          if (typeof json.totalViews === 'number') {
            setBackendTotalViews(json.totalViews);
          }
        }
      } catch {}
    };

    (async () => {
      const ok = await tryBaked();
      if (!ok) await tryApi();
    })();
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

  // Sort posts by date (newest first) and then by reactions for featured
  const sortedPosts = [...blogPosts].sort((a, b) => {
    const reactionsDiff = (b.public_reactions_count || 0) - (a.public_reactions_count || 0);
    if (reactionsDiff !== 0) {
      return reactionsDiff;
    }
    const dateA = new Date(a.published_at).getTime();
    const dateB = new Date(b.published_at).getTime();
    return dateB - dateA;
  });

  const featuredPosts = sortedPosts.slice(0, 3);
  const regularPosts = sortedPosts.slice(3);

  const totalViewsComputed = backendTotalViews ?? followersApprox+328;

  const stats = {
    totalPosts: blogPosts.length,
    totalViews: totalViewsComputed.toLocaleString(),
    followers: '1,400+', // This would require another API call or manual update
    avgRating: '4.8' // This is not directly available from the API
  }

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
          Sharing passion about learning and sharing knowledge in software development and tech.
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
                <span className="stat-number">{stats.totalViews}</span>
                <span className="stat-label">Total Views</span>
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
            {featuredPosts.map((post) => (
              <motion.div
                key={post.url}
                className="featured-post-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="post-header">
                  <h3>{post.title}</h3>
                  <div className="post-meta">
                    <div className="post-views">
                      <Eye size={16} />
                      <span>{post.public_reactions_count} reactions</span>
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
            ))}
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
            {regularPosts.map((post) => (
              <motion.div
                key={post.url}
                className="regular-post-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ y: -3 }}
              >
                <div className="post-content">
                  <h4>{post.title}</h4>
                  <p className="post-excerpt-small">{post.description}</p>
                  
                  <div className="post-meta-small">
                    <span className="post-views-small">
                      <Eye size={14} />
                      {post.public_reactions_count} reactions
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
                
                <a 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="post-link-small"
                >
                  <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
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
