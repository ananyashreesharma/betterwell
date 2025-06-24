import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../css/viewblog.css';

const Blog = () => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                
                // Demo blogs for production
                const demoBlogs = {
                    '1': {
                        id: '1',
                        title: 'Welcome to Better-Wellness',
                        description: 'This is a demo blog post. In a full deployment, you would see real blogs here. The backend API would need to be deployed separately to enable full blog functionality. This platform is designed to support mental health and wellness through community sharing and support.',
                        username: 'Demo User'
                    },
                    '2': {
                        id: '2',
                        title: 'Mental Health Matters',
                        description: 'Taking care of your mental health is just as important as physical health. Remember to practice self-care, reach out for support when needed, and be kind to yourself. Everyone deserves to feel supported and understood.',
                        username: 'Wellness Advocate'
                    },
                    '3': {
                        id: '3',
                        title: 'Finding Your Inner Peace',
                        description: 'Meditation, mindfulness, and finding activities that bring you joy can help create a sense of inner peace. Start with just 5 minutes a day. Small steps lead to big changes in your mental well-being.',
                        username: 'Mindfulness Coach'
                    }
                };
                
                const demoBlog = demoBlogs[id];
                if (demoBlog) {
                    setBlog(demoBlog);
                } else {
                    setError('Blog not found');
                }
            } catch (err) {
                setError('Failed to load blog');
                console.error('Error fetching blog:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

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