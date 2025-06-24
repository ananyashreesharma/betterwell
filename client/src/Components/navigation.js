import React, { useState } from 'react';
import '../css/navigation.css';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const [showLinks, setShowLinks] = useState(false);
    const location = useLocation();

    console.log(localStorage.getItem("name"))
    
    const removeLocalStorage = () => {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("phone");
        localStorage.removeItem("password");
        localStorage.removeItem("_id");
        localStorage.removeItem("token");
        window.location.href = '/';
    }

    const toggleMenu = () => {
        setShowLinks(!showLinks);
    }

    return (
        <nav className='navbar'>
            <div className="nav-container">
                <Link to="/" className="nav-logo">Better-Wellness</Link>
                <ul className={`nav-menu${showLinks ? ' active' : ''}`}>
                    <li><Link to="/" className={`nav-link${location.pathname === '/' ? ' active' : ''}`} onClick={() => setShowLinks(false)}>Home</Link></li>
                    <li><Link to="/write-blogs" className={`nav-link${location.pathname === '/write-blogs' ? ' active' : ''}`} onClick={() => setShowLinks(false)}>Write Blogs</Link></li>
                    <li><Link to="/view-blogs" className={`nav-link${location.pathname === '/view-blogs' ? ' active' : ''}`} onClick={() => setShowLinks(false)}>View Blogs</Link></li>
                    <li><Link to="/find-support" className={`nav-link${location.pathname === '/find-support' ? ' active' : ''}`} onClick={() => setShowLinks(false)}>Find Support</Link></li>
                    {localStorage.getItem("name") ? (
                        <li><span className="nav-link" style={{cursor: 'pointer'}} onClick={removeLocalStorage}>Logout</span></li>
                    ) : (
                        <>
                            <li><Link to="/login" className={`nav-link${location.pathname === '/login' ? ' active' : ''}`} onClick={() => setShowLinks(false)}>Login</Link></li>
                            <li><Link to="/register" className={`nav-link${location.pathname === '/register' ? ' active' : ''}`} onClick={() => setShowLinks(false)}>Register</Link></li>
                        </>
                    )}
                </ul>
                <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            </div>
        </nav>
    )
}

export default Navigation;