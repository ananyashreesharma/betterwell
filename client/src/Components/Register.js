import React,{useState} from 'react'
import '../css/register.css'
import Navigation from './navigation';
const Register =()=> {
    const[name, setname] = useState('');
    const[email, setemail] = useState('');
    const[phone, setphone] = useState();
    const[password, setpassword] = useState('');
    
    async function userRegister(event){
        event.preventDefault();
      const response =  await fetch('http://localhost:5000/api/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name,
                email,
                phone,
                password
            })
        })

        const data = await response.json();

        console.log(data);
    }

  return (
    <div className='register'>
      <Navigation/>

      <div className="reg-form">

    <h1>Register</h1>
      <form onSubmit={userRegister}>
        <input
        value={name}
        onChange={(e)=> setname(e.target.value)}
        type="text" name="name" id="" 
        placeholder='name'/>
        <br/>
        <input
        value={email}
        onChange={(e)=> setemail(e.target.value)}
        type="email" name="email" id="" 
        placeholder='email'/>
        <br />
        
        <input
        value={phone}
        onChange={(e)=> setphone(e.target.value)}
        type="tel" name="phone" id="" 
        placeholder='phone'/>
        <br />

        <input
        value={password}
        onChange={(e)=> setpassword(e.target.value)}
        type="password" name="password" id="" 
        placeholder='password'/>
        <br />
        <input type="submit" value="Register" className='red-btn'/>
      </form>    
    </div>    
    </div>
  )
}

export default Register;
