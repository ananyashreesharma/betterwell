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