import React from 'react'
import Formblog from './Formblog';
import Navigation from '../navigation';

const Newblog =()=> {
  return (
    <div>
        <Navigation/>
<div class="new_blog_container">
    <div class="form-container">
       
            <Formblog/>
      
    </div>
</div>

    </div>
  )
}

export default Newblog;