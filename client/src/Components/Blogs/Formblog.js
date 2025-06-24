import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/form.css'

const Formblog =()=> {
   
    const[title,setTitle] = useState('');
    const[image,setImage] = useState();
    const[description,setDescription] = useState('');
    const[username,setUsername] = useState('');
    const[isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
   
    async function blogDetails(event){
        event.preventDefault();
        setIsSubmitting(true);
        
        // Demo mode - simulate successful upload
        setTimeout(() => {
            alert('Blog uploaded successfully! (Demo mode - backend will be added soon)');
            navigate('/view-blogs');
        }, 1000);
    }  

    return (
        <div className="formblog-container">
            <div className="formblog-wrapper">
                <h2 className="formblog-title">Write a New Blog</h2>
                <form onSubmit={blogDetails} encType="multipart/form-data" id="add-blog">  
                    <div className="new_blog">
                        <div className="form-group">
                            <label htmlFor="name" className="">Blog Title</label>
                            <input type="hidden" name="id" value="" />
                            <input type="text"
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)} 
                                name="title" id="" 
                                placeholder="Enter your blog title here!" 
                                required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="content" className="">Blog Content</label>
                            <textarea name="description" 
                                value={description}
                                onChange={(e)=>setDescription(e.target.value)}
                                id="" cols="33" rows="15" 
                                placeholder="Tell us about your Blog!"
                                required>
                            </textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" 
                                value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                                name="username" id="" 
                                placeholder='enter your username' 
                                required />
                        </div>

                        <div className="buttons">
                            <button 
                                type="submit" 
                                className="form-button upload-btn"
                                disabled={isSubmitting}
                            >
                                <span className="btn-icon">📝</span>
                                {isSubmitting ? 'Uploading...' : 'Upload Your Blog!'}
                            </button>
                            <a href="/view-blogs" className="form-cancel-button cancel-btn">
                                <span className="btn-icon">❌</span>
                                Cancel
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formblog