import React from 'react';
import './aboutme.scss';

const AboutMe=()=>(
    <div className='ab-me' > 
     <div class='abm-cont'>
         <div className='text-cont'>
           <h2>
          <p>
             Ja sam Marijana,relativno sam nova u izradi web sajtova, ali sam veoma dobra u tome.
          </p> 
          <p>
           Web sajtove izradjujem u Reactu.Ukoliko već znate kako bi ste želeli da vaša web stranica izgleda,ja
           cu vam je napraviti prema vasim zeljama.Ako ipak niste sigurni kako bi vaša web stranica trebalo da izgleda,ja mogu osmisliti 
           dizajn prema vašim potrebama.
          </p>

          </h2></div>
          <img src={require('./mypic.jpg')}  className='im-pro' alt="pic "/>
      </div>
    </div>
);

export default AboutMe;