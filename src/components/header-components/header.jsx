import React from 'react';
import {Link } from 'react-router-dom';
import './header.scss';


const Header=()=>(
    <div  className='header-container' >
    
      <div className='logo-container'> 
       <img className='logo-img' src={require('./mylogo.png')}   alt="mi " />
      </div>   
        <div className='butn-container'>
         <Link  to='/' > 
          <button className='buttn-ico' ><img src="https://img.icons8.com/color/40/000000/usa.png" alt="en"/></button>
         </Link>
         <Link   to="/sr">
         <button className='buttn-ico' ><img src="https://img.icons8.com/color/40/000000/serbia.png" alt="sr"/></button>
         </Link>
        </div>
    
    </div>
);

export default Header;