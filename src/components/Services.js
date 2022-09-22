import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <>
    <div className='heading'>
      <h1>Our Services</h1>
    </div>
      <div className="body">

        <div className="card">
          <div className="card-img1"></div>
          <div className="card-txt">
            <h4>Person 2 Person Delivery(P2P)</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero id velit laboriosam esse commodi? Iure, optio fugit sit distinctio sed minima facere nobis.</p>
          </div>
          <div className="card-stats">
            <div className="stat">
              <div className="read-more">
                <Link to='/'><p>Read More</p></Link>
              </div>
            </div>
          </div>


        </div>
        <div className="card">
          <div className="card-img2"></div>
          <div className="card-txt">
            <h4>Ware-House</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero id velit laboriosam esse commodi? Iure, optio fugit sit distinctio sed minima facere nobis.</p>
          </div>
          <div className="card-stats">
            <div className="stat">
              <div className="read-more">
                <Link to='/'><p>Read More</p></Link>
              </div>
            </div>
          </div>


        </div>
        <div className="card">
          <div className="card-img3"></div>
          <div className="card-txt">
            <h4>Merchant Delivery Service</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero id velit laboriosam esse commodi? Iure, optio fugit sit distinctio sed minima facere nobis.</p>
          </div>
          <div className="card-stats">
            <div className="stat">
              <div className="read-more">
                <Link to='/'><p>Read More</p></Link>
              </div>
            </div>
          </div>


        </div>
        <div className="card">
          <div className="card-img4"></div>
          <div className="card-txt">
            <h4>Percel Pick & Drop Service</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero id velit laboriosam esse commodi? Iure, optio fugit sit distinctio sed minima facere nobis.</p>
          </div>
          <div className="card-stats">
            <div className="stat">
              <div className="read-more">
                <Link to='/'><p>Read More</p></Link>
              </div>
            </div>
          </div>


        </div>
        <div className="card">
          <div className="card-img5"></div>
          <div className="card-txt">
            <h4>Cash On Delivery(COD)</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero id velit laboriosam esse commodi? Iure, optio fugit sit distinctio sed minima facere nobis.</p>
          </div>
          <div className="card-stats">
            <div className="stat">
              <div className="read-more">
                <Link to='/'><p>Read More</p></Link>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Services
