import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'


function Login() {


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
          <form id='login' className="input-group">
            <input type="text" className='input-field' placeholder='User ID or EMAIL' required />
            <input type="text" className='input-field' placeholder='Password' required />
            <button type='submit' className='submit-btn'>LOGIN</button>
          </form>

        </div>

      </div>

    </>
  )
}

export default Login
