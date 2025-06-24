import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../navigation';
import '../../css/bloghome.css';

const Homeblog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Use environment-based API URL
    const API_BASE_URL = process.env.NODE_ENV === 'production' 
        ? process.env.REACT_APP_API_URL || 'https://your-vercel-app.vercel.app/api' 
        : 'http://localhost:5000/api';

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                
                // Check if we're in production (no backend)
                if (process.env.NODE_ENV === 'production') {
                    // Show demo blogs
                    const demoBlogs = [
                        {
                            _id: '1',
                            title: 'Welcome to Better-Wellness',
                            description: 'This is a demo blog post. In a full deployment, you would see real blogs here. The backend API would need to be deployed separately to enable full blog functionality.',
                            username: 'Demo User'
                        },
                        {
                            _id: '2',
                            title: 'Mental Health Matters',
                            description: 'Taking care of your mental health is just as important as physical health. Remember to practice self-care, reach out for support when needed, and be kind to yourself.',
                            username: 'Wellness Advocate'
                        },
                        {
                            _id: '3',
                            title: 'Finding Your Inner Peace',
                            description: 'Meditation, mindfulness, and finding activities that bring you joy can help create a sense of inner peace. Start with just 5 minutes a day.',
                            username: 'Mindfulness Coach'
                        }
                    ];
                    setBlogs(demoBlogs);
                    return;
                }
                
                // Try to fetch from backend if available
                const response = await fetch(`${API_BASE_URL}/blogs`);
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                const data = await response.json();
                setBlogs(data);
            } catch (err) {
                console.error('Error fetching blogs:', err);
                setError('Failed to load blogs');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [API_BASE_URL]);

    const navigate = useNavigate();
    const handleEdit = (e) =>{
        navigate(`/view-blog/${blogs._id}`)
    }
    
    if (loading) {
        return (
            <div>
                <Navigation/>
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <h3>Loading blogs...</h3>
                </div>
            </div>
        );
    }
    
    if (error) {
        return (
            <div>
                <Navigation/>
                <div className="error-container">
                    <h3>Oops! Something went wrong</h3>
                    <p>{error}</p>
                    <a href="/" className="btn-primary">Go Home</a>
                </div>
            </div>
        );
    }
    
    if(blogs.length === 0) {
        return (
            <div>
                <Navigation/>
                <div className="empty-blogs">
                    <h3>No blogs yet</h3>
                    <p>Be the first to share your thoughts and experiences!</p>
                    <a href="/write-blogs" className="btn-primary">Write Your First Blog</a>
                </div>
            </div>
        );
    }
    
    return (
        <div>
            <Navigation/>
            <div className="blog-home-container">
                <div className="blog-container-heading">
                    <h1>Better-Wellness Blogs</h1>
                    <p>Read and Write Blogs!</p>
                    {process.env.NODE_ENV === 'production' && (
                        <div style={{ 
                            background: '#fff3cd', 
                            border: '1px solid #ffeaa7', 
                            borderRadius: '8px', 
                            padding: '15px', 
                            margin: '20px 0',
                            textAlign: 'center'
                        }}>
                            <strong>Demo Mode:</strong> These are sample blogs. For full functionality, the backend API needs to be deployed.
                        </div>
                    )}
                </div>
                <div className="blog-list">
                    {(blogs || []).map(blog => (
                        <div className="blog-card" key={blog._id}>
                            <div className="blog-meta">
                                <span className="blog-author">By {blog.username || 'Anonymous'}</span>
                            </div>
                            <div className="blog-title">{blog.title}</div>
                            <div className="blog-content">
                                {blog.description.length > 180 ? blog.description.slice(0, 180) + '...' : blog.description}
                            </div>
                            <a href={`/view-blog/${blog._id}`} className="read-more-btn">Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Homeblog;