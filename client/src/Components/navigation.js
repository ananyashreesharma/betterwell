import react, { useState } from 'react';
import '../css/navigation.css';
import { Link } from 'react-router-dom';
const Navigation = () =>{

    const[showLinks, setshowLinks] = useState(false);

    console.log(localStorage.getItem("name"))
    const removeLocalStorage = () =>{
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("phone");
        localStorage.removeItem("password");
        localStorage.removeItem("_id");
        window.location.href = '/';
    }
    return(
        
        <div className='navigation-bar'>
            <div className="navigation-wrapper">
            <div className="left-navigation">
                    <h1 className='brand-name'>Better-Wellness</h1>
                </div>
                
                <div className="right-navigation" id={showLinks ? "hidden":""}>
                       <ul>
                           <li> <Link to="/">Home</Link> </li>
                           {/* <li> <Link to="/blog">Read Blogs</Link> </li> */}
                           <li> <Link to="/write-blogs">Write Blogs</Link> </li>
                           <li> <Link to="/view-blogs">View Blogs</Link> </li>
                           {/* <li> <Link to="/videos">Videos</Link> </li> */}
                           <li> <Link to="/find-support">Find Support</Link> </li>
                           
                           
                           
                           {localStorage.getItem("name") ?
                           <li onClick={removeLocalStorage}> Logout</li>
                           : 
                           <li> <Link to="/login">Login</Link> <Link to="/register">Register</Link>  </li>}

                            {/* <li></li> */}

                           {/* <li> <Link to="/login">Login</Link> </li>
                           <li> <Link to="/register">Signup</Link> </li> */}
                      
                       </ul>
           
                </div>

               
                        

            </div>
            <div className="nav-button" onClick={()=> setshowLinks(!showLinks)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Navigation;