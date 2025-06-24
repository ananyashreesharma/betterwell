import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../css/viewblog.css';

const Blog = () => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    // Use environment-based API URL
    const API_BASE_URL = process.env.NODE_ENV === 'production' 
        ? 'https://your-app-name.vercel.app' 
        : 'http://localhost:5000';

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`${API_BASE_URL}/view-blog/${id}`);
                setBlog(res.data.blog);
            } catch (err) {
                setError('Failed to load blog');
                console.error('Error fetching blog:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id, API_BASE_URL]);

    if (loading) {
        return (
            <div className="view-blog-container">
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <h3>Loading blog...</h3>
                </div>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="view-blog-container">
                <div className="error-container">
                    <h3>Blog not found</h3>
                    <p>The blog you're looking for doesn't exist or has been removed.</p>
                    <a href="/view-blogs" className="btn-primary">Back to Blogs</a>
                </div>
            </div>
        );
    }

    return(
        <div className="view-blog-container">
            <div className="view-blog-wrapper">
                <div className="view-blog-heading">
                    <h1>{blog.title}</h1>
                </div>

                <div className="blog-meta">
                    <span className="blog-author">By {blog.username || 'Anonymous'}</span>
                </div>

                <div className="view-blog-content">
                    <p>{blog.description}</p>
                </div>

                <div className="blog-actions">
                    <a href="/view-blogs" className="blog-action-btn">Back to Blogs</a>
                    <a href="/write-blogs" className="blog-action-btn">Write New Blog</a>
                </div>
            </div>
        </div>
    )
}

export default Blog;