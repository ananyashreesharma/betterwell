import React,{useState} from 'react'
import '../css/register.css'
import Navigation from './navigation';

const Register =()=> {
    const[name, setname] = useState('');
    const[email, setemail] = useState('');
    const[phone, setphone] = useState('');
    const[password, setpassword] = useState('');
    const[error, setError] = useState('');
    const[success, setSuccess] = useState('');
    const[loading, setLoading] = useState(false);
    
    async function userRegister(event){
        event.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');
        
        // Client-side validation
        if(!name.trim() || !email.trim() || !phone.trim() || !password.trim()) {
            setError('All fields are required');
            setLoading(false);
            return;
        }
        
        if(password.length < 6) {
            setError('Password must be at least 6 characters long');
            setLoading(false);
            return;
        }
        
        try {
            const response = await fetch('http://localhost:5003/api/register',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    phone: phone.trim(),
                    password
                })
            });

            const data = await response.json();

            if(response.ok) {
                setSuccess('Registration successful! You can now login.');
                setname('');
                setemail('');
                setphone('');
                setpassword('');
            } else {
                setError(data.message || 'Registration failed. Please try again.');
            }
        } catch (err) {
            if(err.name === 'TypeError' && err.message.includes('fetch')) {
                setError('Cannot connect to server. Please check if the server is running.');
            } else {
                setError('Network error. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    }

  return (
    <div className='register-bg'>
      <Navigation/>
      <div className="register-main-container">
        <div className="register-card">
          <h1>Register</h1>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          <form onSubmit={userRegister} autoComplete="off">
            <input
              value={name}
              onChange={(e)=> setname(e.target.value)}
              type="text" name="name"
              placeholder='Full Name' required
            />
            <input
              value={email}
              onChange={(e)=> setemail(e.target.value)}
              type="email" name="email"
              placeholder='Email Address' required
            />
            <input
              value={phone}
              onChange={(e)=> setphone(e.target.value)}
              type="tel" name="phone"
              placeholder='Phone Number' required
            />
            <input
              value={password}
              onChange={(e)=> setpassword(e.target.value)}
              type="password" name="password"
              placeholder='Password (min 6 characters)' required
            />
            <input 
              type="submit" 
              value={loading ? "Registering..." : "Register"} 
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
