import React,{useState} from 'react'
import '../css/login.css'
import Navigation from './navigation';

const Login =()=> {
    const[email, setemail] = useState('');
    const[password, setpassword] = useState('');
    const[error, setError] = useState('');
    const[loading, setLoading] = useState(false);
    
    async function userLogin(event){
        event.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const response = await fetch('http://localhost:5003/api/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email,
                    password
                })
            });

            const data = await response.json();

            if(data.user){ 
                localStorage.setItem('name',data.user.name);
                localStorage.setItem('token', data.token);
                window.location.href = '/';
            } else {
                setError('Please check username and password');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    }

  return (
    <div className='login-bg'>
      <Navigation />
      <div className="login-main-container">
        <div className="login-card">
          <h1>Login</h1>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={userLogin} autoComplete="off">
            <input
              value={email}
              onChange={(e)=> setemail(e.target.value)}
              type="email" name="email"
              placeholder='Email' required
            />
            <input
              value={password}
              onChange={(e)=> setpassword(e.target.value)}
              type="password" name="password"
              placeholder='Password' required
            />
            <input 
              type="submit" 
              value={loading ? "Logging in..." : "Login"} 
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
