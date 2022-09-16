import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'



function Footer() {
  return (

    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>company</h4>
            <ul>
              <li><Link to="/about">about us</Link></li>
              <li><Link to="/services">our services</Link></li>
              <li><Link to="/">privacy policy</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <ul>
              <li><Link to="/">FAQ</Link></li>
              <li><Link to="/">Connect US</Link></li>
              <li><Link to="/">returns</Link></li>
              <li><Link to="/">order status</Link></li>
              <li><Link to="/">payment options</Link></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Social</h4>
            <ul>
              <li><a target={"_blank"} rel="noreferrer" href="https://www.facebook.com">Facebook</a></li>
              <li><a target={"_blank"} rel="noreferrer" href="/">Whatsapp</a></li>
              <li><a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/">Instagram</a></li>
              <li><a target={"_blank"} rel="noreferrer" href="https://twitter.com/">Twitter</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer