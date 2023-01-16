import React,{useState} from 'react'
import '../css/register.css'
import Navigation from './navigation';
// import '../css/login.css'

const Login =()=> {
    const[email, setemail] = useState('');
    const[password, setpassword] = useState('');
    
    async function userLogin(event){
        event.preventDefault();
      const response =  await fetch('http://localhost:5000/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json();

        if(data.user){ 
            console.log(data.user);
            localStorage.setItem('name',data.user.name);
            // localStorage.setItem('email',data.user.email);
            // localStorage.setItem('phone',data.user.phone);
            // localStorage.setItem('password',data.user.password);
            // localStorage.setItem('_id',data.user._id);
            window.location.href = '/';
        }



        else{alert('please check username and password')}

        console.log(data);
        
    }

  return (
    <div className='register'>
        <Navigation />
    
        <form className='reg-form' onSubmit={userLogin}>
        <h1>Login</h1>
        <input
        value={email}
        onChange={(e)=> setemail(e.target.value)}
        type="email" name="email" id="" 
        placeholder='email'/>
        <br />
        
        
        <input
        value={password}
        onChange={(e)=> setpassword(e.target.value)}
        type="password" name="password" id="" 
        placeholder='password'/>
        <br />
        <input type="submit" value="Register" className='button' />
        </form>    
    </div>    
    
    // </div>
  )
}

export default Login;
