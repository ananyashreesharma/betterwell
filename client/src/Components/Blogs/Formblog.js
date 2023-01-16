import React, { useState } from 'react'
import '../../css/form.css'

const Formblog =()=> {
  
    const[title,setTitle] = useState();
    const[image,setImage] = useState();
    const[description,setDescription] = useState();
    const[username,setUsername] = useState();
  
   async function blogDetails(event){
        event.preventDefault();
       const response = await fetch('http://localhost:5000/api/blogs',{
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
    <div>
        <form onSubmit={blogDetails} enctype="multipart/form-data"  id="add-blog">  
        <div class="new_blog">
            <div class="form-group">
                <label for="name" class="">Blog Title</label>
                <input type="hidden" name="id" value="" />
                <input type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)} 
                name="title" id="" 
                placeholder="Enter your blog title here!" />
            </div>

           

            <div class="form-group">
                <label for="content" class="">Blog Content</label>
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

            <div class="buttons">
                
                    <button type="submit" class="form-button">Upload Your Blog!</button>
                
               
                    <a href="/" class="form-cancel-button">Cancel</a>
               
            </div>
        </div>
 

        </form>
    </div>
  )
}

export default Formblog