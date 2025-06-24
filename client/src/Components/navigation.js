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

    const closeMenu = () => {
        setShowLinks(false);
    }

    return (
        <nav className='navbar'>
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={closeMenu}>Better-Wellness</Link>
                <button
                    className={`nav-toggle${showLinks ? ' open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={showLinks}
                    aria-controls="nav-menu"
                >
                    <span role="img" aria-label="menu">❤️</span>
                </button>
                <ul id="nav-menu" className={`nav-menu${showLinks ? ' active' : ''}`}>
                    <li><Link to="/" className={`nav-link${location.pathname === '/' ? ' active' : ''}`} onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/write-blogs" className={`nav-link${location.pathname === '/write-blogs' ? ' active' : ''}`} onClick={closeMenu}>Write Blogs</Link></li>
                    <li><Link to="/view-blogs" className={`nav-link${location.pathname === '/view-blogs' ? ' active' : ''}`} onClick={closeMenu}>View Blogs</Link></li>
                    <li><Link to="/find-support" className={`nav-link${location.pathname === '/find-support' ? ' active' : ''}`} onClick={closeMenu}>Find Support</Link></li>
                    {localStorage.getItem("name") ? (
                        <li><span className="nav-link" style={{cursor: 'pointer'}} onClick={() => { removeLocalStorage(); closeMenu(); }}>Logout</span></li>
                    ) : (
                        <>
                            <li><Link to="/login" className={`nav-link${location.pathname === '/login' ? ' active' : ''}`} onClick={closeMenu}>Login</Link></li>
                            <li><Link to="/register" className={`nav-link${location.pathname === '/register' ? ' active' : ''}`} onClick={closeMenu}>Register</Link></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;