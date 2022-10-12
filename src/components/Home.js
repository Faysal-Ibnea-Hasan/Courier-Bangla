import React from 'react'
import './Home.css';
import Typed from 'react-typed';

function Home() {
  return (
    <>


      {/* this is for typing effect */}
      {/* npm install react-typed --force */}
      <div className="container-home">
      <div className="trackId">
          <div className="trackIdbox">
            <div className="trackIdbox-content">
              <form className='fxg-form' method='POST' action="/" id='tracking'>
                <div className='fxg-field'>
                <input type="text" name="trackingnumber" id="trackingnumber" placeholder='Enter your track ID' className="fxg-field__input-text fxg-field__input--required" required="" title="Enter a FedEx tracking number to review shipping details." aria-required="true" data-errmsg="Please enter at least one tracking number."/>
                
                
                
                
                </div>
                <button type="submit" className="fxg-button" aria-label="Click your to track your package" id="btnSingleTrack" data-analytics="hero|Track" target="_blank">Track</button>
              </form>
              
            </div>
          </div>
        </div>



        <div className="animated-typing">
          <span>

            <Typed
              strings={[
                "WELCOME TO <strong>COURIER-BANGLA.<strong/>",

              ]}
              typeSpeed={100}
            />
          </span>

          <br />

          <span className='small-typing'>
            <Typed
              strings={[
                "Courier-Bangla is a place where you can send and recieve your product from anywhere and anytime in <strong>BANGLADESH.<strong/>"

              ]}
              typeSpeed={25}
            />
          </span>
        </div>
        
        
      </div>








    </>
  )
}

export default Home
