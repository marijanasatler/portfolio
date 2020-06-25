import React from 'react';
import '../App.css';
import { Link,Element, Events, animateScroll as scroll, scroller } from 'react-scroll'
import AboutMe from '../components/aboutme-components/aboutme';
import MyProject from '../components/myproject/myproject';
import Contact from '../components/contact-component/contact';




class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div>
          <nav className="navbar ">
            <div className="container-fluid">
           
                <ul className="nav navbar-nav">
                  <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >O MENI</Link></li>
                  <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>MOJI PROJEKTI</Link></li>
                  <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >KONTAKT</Link></li>
                </ul>
            </div>
          </nav>
     
          <Element name="test1" className="element" >
          <AboutMe/>
        </Element>

          <Element name="test2" className="element">
          <MyProject/>
        </Element>

          <Element name="test3" className="element">
          <Contact/>
        </Element>
       
         <div >
          <div  className='to-top' onClick={this.scrollToTop}>Na početak!</div>
         </div>
         
      </div>
    );
  }
};

export default HomePage;