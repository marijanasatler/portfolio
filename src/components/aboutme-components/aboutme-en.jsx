import React from 'react';
import './aboutme.scss';

const AboutMeEn=()=>(
    <div className='ab-me' > 
     <div class='abm-cont'>
         <div className='text-cont'>
           <h2>
          <p>
          I'm Marijana, I'm relatively new to web design, but I'm very good at it.
          </p> 
          <p>
          I make websites in React. If you already know how you would like your website to look, I will make it according to your wishes. 
          If you are still not sure what your website should look like, I can design it according to your needs.
          </p>
          </h2></div>
          <img src={require('./mypic.jpg')}  className='im-pro' alt="pic "/>
      </div>
    </div>
);

export default AboutMeEn;