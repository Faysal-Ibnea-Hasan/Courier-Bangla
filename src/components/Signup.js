import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn"></div>
          <Link to="/login"><button className='toggle-btn' type='button'>LOGIN</button></Link>
          <Link to="/signup"><button className='toggle-btn' type='button'>REGISTER</button></Link>
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
