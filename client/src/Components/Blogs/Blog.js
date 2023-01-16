import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../css/viewblog.css'
import axios from "axios"
const Blog = () =>{
    const[blog,setBlogs] = useState([])
    const id = useParams().id;
    console.log(id);

    const fetchDetails = async () =>{
        const res = await axios.get(`http://localhost:5000/view-blog/${id}`).catch(err=>console.log(err))
        const data = await res.data;
        return data;
    }

    useEffect(()=>{
        fetchDetails().then(data=>setBlogs(data.blog));
    },[id])
    console.log(blog);
    return(
        <div>
            
<div className="view-blog-container">
    
    <div className="view-blog-wrapper">
        <div class="view-blog-heading">
            <h1>{blog.title}</h1>
        </div>

        {/* <div className="view-blog-image">
            <img src="" alt="no image" srcset=""/>
        </div> */}

        <div className="view-blog-content">
            <p>{blog.description}</p>
        </div>

        <p><em>{blog.username}</em></p>
    </div>
   
</div>
      
        </div>
    )
}

export default Blog;