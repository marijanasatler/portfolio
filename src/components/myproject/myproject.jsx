import React from 'react';
import './myproject.scss';



const MyProject =()=>(
    
       <div className='project-container'>
           <div className='project-list' >
               <div className='project'>
               <a href='https://www.zavon.rs/' target='blanck' >  
             <img className='background-image' src={require('./picture/logo1.png')} alt='ja' /> 
             </a>
              <h4><a href='https://www.zavon.rs/' target='blanck' >Zavon.d.o.o</a></h4>
             <span>
             &#8679;click&#8679;
             </span></div>
             <div className='project'>
             <a href='https://crwn-clo-live.herokuapp.com/' target='blanck' >  
             <img   className='background-image'  src={require('./picture/logo2.png')} alt='ja' /> 
            </a>
             <h4><a href='https://crwn-clo-live.herokuapp.com/' target='blanck' >Crwn cloathing</a></h4>
             <span>
             &#8679;click&#8679;
             </span>
              </div>
             <div className='project'>
             <a href='https://marijanasatler.github.io/robofriends/' target='blanck'>
             <img className='background-image'   src={require('./picture/logo3.png')} alt='ja' /> 
             </a>
             <h4><a href='https://marijanasatler.github.io/robofriends/' target='blanck'>Robofriends</a></h4>
             <span>
             &#8679;click&#8679;
             </span>
             </div>
             <div className='project'>
              <a href='https://electronic-business-card.herokuapp.com/' target='blanck'>
             <img className='background-image'   src={require('./picture/logo4.png')} alt='ja' /> 
             </a>   
             <h4><a href='https://electronic-business-card.herokuapp.com/' target='blanck'>Elektronska vizit karta</a></h4>
             <span>
             &#8679;click&#8679;
             </span>
             </div>
             <div className='project'>
            < a href='https://marijanasatler.github.io/example-website/' target='blanck' >
             <img className='background-image'   src={require('./picture/logo.png')} alt='ja' /> 
            </a>
             <h4><a href='https://marijanasatler.github.io/example-website/' target='blanck' >Example-website</a></h4>
             <span>
             &#8679;click&#8679;
             </span>
             </div>
             <div className='project'>
            < a href='https://marijanasatler.github.io/custom-background-generator/' target='blanck' >
             <img className='background-image'   src={require('./picture/logo.png')} alt='ja' /> 
            </a>
             <h4><a href='https://marijanasatler.github.io/custom-background-generator/' target='blanck' >Background-generator</a></h4>
             <span>
             &#8679;click&#8679;
             </span>
             </div>

        </div>   
       </div>
    
);

export default MyProject;