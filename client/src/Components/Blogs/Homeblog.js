import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/bloghome.css'
import Navigation from '../navigation'
import Blog from './Blog'


const Homeblog = ()=> {   
const[blogs,setblogs] = useState([{
    title:'',
    description:'',
    username:''
}])



useEffect(()=>{
    fetch("http://localhost:5000/api/blogs")
    .then(res=>{
        if(res.ok){
            return res.json()
        }
    }).then(data=>{
            setblogs(data)
            console.log(data);
    }).catch(err=>{
        console.log(err);
    });
},[])

    const navigate = useNavigate();
    const handleEdit = (e) =>{
        navigate(`/view-blog/${blogs._id}`)
    }
    return (
    <div>
        <Navigation/>
     
    <div class="home-container">
        
        <div class="home-blogs-container">
            <div class="blog-container-heading">
                <h1>Better-Wellness Blogs</h1>
                <p>Read and Write Blogs!</p>
            </div>
            <div class="home-blog-start-heading">
                <h1>Blogs!</h1>
            </div>
            
             
            <div class="blogs-wrapper">
            {(blogs || []).map(blog=>(

                
                <div class="blog-box-style">
                    <a class="blog-box-link" href={`/view-blog/${blog._id}`}>
                    <input type="hidden"  value={blog._id} key={blog._id} id={blog._id} />
                    
                    <div class="blog-box-heading">
                        <h2>{blog.title}</h2>
                    </div>
                    <div class="blog-box-desc">
                        <p>
                           {blog.description} 
                        </p>
                    </div>
                    </a>
        
                    <div class="box-buttons">
                        
                    <a href="/update-blog?id=<%= blog[i]._id%>" class="box-btn-link">
                        <span class="box-btn"><i class="fas fa-edit fa-lg"></i></span>
                    </a>

                    <a class="box-btn-link delete" data-id="">
                        <span class="box-btn"><i class="fas fa-trash-alt fa-lg"></i></span>
                    </a>      
                    </div>

                    

                </div> 
                ))}         
            </div>
            
        </div>
    </div>
    </div>
  )
}
export default Homeblog;