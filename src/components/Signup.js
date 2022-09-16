import React from 'react'
import './Login.css'

function Signup() {
  return (
    <>
    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn"></div>
          <button type='button' className='toggle-btn' >LOGIN</button>
          <button type='button' className='toggle-btn' >REGISTER</button>
        </div>
        {/* <div className="social">
          <img src="./gmail.png" alt="" />
          <img src="./facebook.png" alt="" />
        </div> */}
       
        <form id='reg' className="input-group">
          <input type="text" className='input-field' placeholder='Full Name' required />
          <input type="email" className='input-field' placeholder='Enter Your Email' required />
          <input type="text" className='input-field' placeholder='Password' required />
          <button type='submit' className='submit-btn'>REGISTER</button>
        </form>
      </div>

    </div>

  </>
  )
}

export default Signup
