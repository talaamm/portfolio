import { motion } from 'framer-motion'
import { ExternalLink, Eye, Calendar, Tag, TrendingUp } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Scalable APIs with Go: A Complete Guide',
      excerpt: 'Learn how to build high-performance APIs using Go, covering best practices, testing, and deployment strategies.',
      url: 'https://dev.to/yourusername/building-scalable-apis-with-go',
      views: '15.2k',
      date: '2024-01-15',
      tags: ['Go', 'API', 'Backend', 'Performance'],
      readTime: '12 min read',
      featured: true
    },
    {
      title: 'React Performance Optimization: 10 Essential Tips',
      excerpt: 'Discover proven techniques to optimize React applications for better performance and user experience.',
      url: 'https://dev.to/yourusername/react-performance-optimization-tips',
      views: '12.8k',
      date: '2024-02-03',
      tags: ['React', 'Performance', 'Frontend', 'JavaScript'],
      readTime: '8 min read',
      featured: true
    },
    {
      title: 'Database Design Best Practices for Modern Applications',
      excerpt: 'Essential database design principles and patterns for building scalable and maintainable applications.',
      url: 'https://dev.to/yourusername/database-design-best-practices',
      views: '9.5k',
      date: '2024-02-20',
      tags: ['Database', 'SQL', 'Design', 'Architecture'],
      readTime: '15 min read',
      featured: true
    },
    {
      title: 'Getting Started with Kubernetes: A Developer\'s Guide',
      excerpt: 'Everything you need to know to start deploying applications with Kubernetes in production.',
      url: 'https://dev.to/yourusername/getting-started-with-kubernetes',
      views: '7.3k',
      date: '2023-12-10',
      tags: ['Kubernetes', 'DevOps', 'Docker', 'Cloud'],
      readTime: '20 min read',
      featured: false
    },
    {
      title: 'Building Real-time Applications with WebSockets',
      excerpt: 'Learn how to implement real-time features in your web applications using WebSockets and Socket.io.',
      url: 'https://dev.to/yourusername/building-realtime-apps-websockets',
      views: '6.1k',
      date: '2023-11-25',
      tags: ['WebSockets', 'Real-time', 'Node.js', 'JavaScript'],
      readTime: '10 min read',
      featured: false
    },
    {
      title: 'The Complete Guide to TypeScript for JavaScript Developers',
      excerpt: 'Master TypeScript from basics to advanced concepts, with practical examples and best practices.',
      url: 'https://dev.to/yourusername/complete-typescript-guide',
      views: '8.9k',
      date: '2023-10-18',
      tags: ['TypeScript', 'JavaScript', 'Web Development', 'Tutorial'],
      readTime: '18 min read',
      featured: false
    }
  ]

  const stats = {
    totalPosts: '25+',
    totalViews: '150k+',
    followers: '1,400+',
    avgRating: '4.8'
  }

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

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
            Sharing knowledge and insights about technology, development, and career growth.
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
                <span className="stat-number">{stats.totalPosts}</span>
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
            {featuredPosts.map((post, index) => (
              <motion.div
                key={index}
                className="featured-post-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="post-header">
                  <h3>{post.title}</h3>
                  <div className="post-meta">
                    <div className="post-views">
                      <Eye size={16} />
                      <span>{post.views}</span>
                    </div>
                    <div className="post-date">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="post-read-time">{post.readTime}</div>
                  </div>
                </div>
                
                <p className="post-excerpt">{post.excerpt}</p>
                
                <div className="post-tags">
                  {post.tags.map((tag) => (
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
            {regularPosts.map((post, index) => (
              <motion.div
                key={index}
                className="regular-post-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -3 }}
              >
                <div className="post-content">
                  <h4>{post.title}</h4>
                  <p className="post-excerpt-small">{post.excerpt}</p>
                  
                  <div className="post-meta-small">
                    <span className="post-views-small">
                      <Eye size={14} />
                      {post.views}
                    </span>
                    <span className="post-date-small">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="post-read-time-small">{post.readTime}</span>
                  </div>
                  
                  <div className="post-tags-small">
                    {post.tags.slice(0, 3).map((tag) => (
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
              href="https://dev.to/yourusername" 
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
