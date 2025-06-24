import './App.css';
import Home from './Components/Home/Home'
import Thirdsec from './Components/Home/Thirdsec';
import Navigation from './Components/navigation';
import Secpage from './Components/Home/secpage';
import Fourthsec from './Components/Home/Fourthsec';
import Login from './Components/login';
import Footer from './Components/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Mainhome from './Components/Home/Homemain';
import Blog from './Components/Blogs/Blog';
import Newblog from './Components/Blogs/Newblog';
import Homeblog from './Components/Blogs/Homeblog';
import Register from './Components/Register';
import Findsupport from './Components/Findsupport/Findsup';



function App() {
  return (
    <div>
    <BrowserRouter>
{/*     
    <Navigation/>    */}
    <Routes>
      <Route exact path='/' element={<Mainhome/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/write-blogs' element={<Newblog/>}/>
      <Route path='/find-support' element={<Findsupport/>}/>
      <Route path='/view-blogs' element={<Homeblog/>}/>
      <Route path='/view-blog/:id' element={<Blog/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    <Footer/>
   
    </BrowserRouter>
    </div>

  );
}

export default App;
