import React from "react";
import './Carouse.css';
import car1 from './car1.jpg';
import car2 from './car2.jpg';
import car3 from './car3.jpg';
import AwesomeSliderStyles from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
class Home extends React.Component {
  render(){
    const AutoplaySlider = withAutoplay(AwesomeSliderStyles);
      return (
        <div className="AutoplaySlider">
            <AutoplaySlider
              className="AutoplaySlider-inter"
              play={true}
              cancelOnInteraction={false} 
              interval={10000}
              bullets={false}
              organicArrows={false}
            > 
              <div data-src={car1}>
                <div className="text-overlay">
                  <h1>EXPERT TEAM OF</h1>
                  <h1 className="large-text">TECHNICIANS</h1>
                  <p>
                    Every member of our team is fully qualified and we have our own area of expertise. 
                    We’re passionate about the work that we do and our highly skilled operatives undergo 
                    regular training to ensure our business always provides the most up-to-date repair services 
                    for our clients. We are always ready to help you make your vehicle run better than ever before!
                  </p>
                </div>
              </div>
              <div data-src={car2}>
                <div className="text-overlay">
                  <h1>FULL-SERVICE</h1>
                  <h1 className="large-text">REPAIR FACILITY</h1>
                  <p>
                  When we say your vehicle’s in the best hands possible, we’re not just saying what you want to hear. We’re putting our money where our words are, doing exactly what your vehicle needs to protect you and your family. We only deal with the truth when it comes to our diagnostic services because you have a lot depending on your vehicle’s peak performance.
                  </p>
                </div>
              </div>
              <div data-src={car3}>
                <div className="text-overlay">
                  <h1>QUALITY CAR</h1>
                  <h1 className="large-text">MAINTENANCE</h1>
                  <p>
                  At Car Repair, we strive to provide the best levels of service to all our customers ensuring they enjoy a safe and pleasant driving experience. We offer an extensive range of car repair and maintenance services for cars of all makes and models all under one roof. We specialize in car services including wheel alignment service, car body repair, engine repair, denting and painting etc
                  </p>
                </div>
              </div>
            </AutoplaySlider> 
        </div>    
      )
    }
    }
export default Home