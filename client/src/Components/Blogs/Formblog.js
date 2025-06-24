import React, { useState } from 'react'
import '../../css/form.css'

const Formblog =()=> {
   
    const[title,setTitle] = useState();
    const[image,setImage] = useState();
    const[description,setDescription] = useState();
    const[username,setUsername] = useState();
   
    // Use environment-based API URL
    const API_BASE_URL = process.env.NODE_ENV === 'production' 
        ? 'https://your-app-name.vercel.app/api' 
        : 'http://localhost:5000/api';
   
    async function blogDetails(event){
        event.preventDefault();
        const response = await fetch(`${API_BASE_URL}/blogs`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title,
                description,
                username
            })
        }) 
        const data = await response.json();
        console.log(data);
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
                                placeholder="Enter your blog title here!" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="content" className="">Blog Content</label>
                            <textarea name="description" 
                                value={description}
                                onChange={(e)=>setDescription(e.target.value)}
                                id="" cols="33" rows="15" 
                                placeholder="Tell us about your Blog!">
                            </textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" 
                                value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                                name="username" id="" 
                                placeholder='enter your usernmae' />
                        </div>

                        <div className="buttons">
                            <button type="submit" className="form-button upload-btn">
                                <span className="btn-icon">📝</span>
                                Upload Your Blog!
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