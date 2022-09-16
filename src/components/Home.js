import React from 'react'
import './Home.css';
import Typed from 'react-typed';

function Home() {
  return (
    <>
      {/* this is for typing effect */}
      {/* npm install react-typed --force */}
      <div className="animated-typing">
        <span>

          <Typed
            strings={[
              "WELCOME TO <strong>COURIER-BANGLA<strong/>",

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
            typeSpeed={50}
          />
        </span>








      </div>
    </>
  )
}

export default Home
