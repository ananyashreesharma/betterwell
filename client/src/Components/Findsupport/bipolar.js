import React, { useEffect, useState } from 'react'
import '../../css/Anxdoc.css'

 
const Bidoc =()=>
{
    const [anxdoc,setanxdoc]=useState([{
        name:'',
        specialisation:'',
        email:'',
        phone:''
    }])

    useEffect(()=>{
        fetch("http://localhost:5000/api/bidoc")
            .then(res=>{
                if(res.ok){
                    return res.json()
                }
            }).then(data=>{
                setanxdoc(data);
                console.log(data);
            }).catch(err=>{
                console.log(err);
            })
    },[])


    return(
        <div>
            <div className="name-heading">
                <h1>Bipolars Doctors</h1>
            </div>
            <div className="dis-flex">
            
        {(anxdoc || []).map(anxdoc=>(

        <div className='card-container'>
            
            <div className="image-container">
                <img src="" alt=''/>
            </div>
            <h1>{anxdoc.name}</h1>
            <div className="card-content">
            <div className="card-title">
               <h3>{anxdoc.specialisation}</h3>
               </div>
               <div className="card-body">
               <p>{anxdoc.email}</p>
               </div>

            </div>
            
           {/* <div className="card-title">
               <h3>{title}</h3>
               </div>
               <div className="card-body">
               <p>{body}</p>
               </div> */}
               <div className="btn">
              <button>
                  <a>
                     {anxdoc.phone} 
                  </a>
              </button>
           </div>
        </div>
        ))}
        </div>
        </div>    
    )
}

export default Bidoc