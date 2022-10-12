import React from 'react'
import './Order.css'

export default function Order() {
  return (
    <>
    <div className='order-main'>
      <div className="order">
        <div className="order-content">
          <h1 className='heading'>Order Process</h1>
          <form id='order' className='order-group'>
          <input type="text" className="input-field" placeholder="Enter Sender's Full Name" required=""/>
          <input type="text" className="input-field" placeholder="Enter Reciever's Name" required=""/>
          <input type="text" className="input-field" placeholder="Enter Destination Address" required=""/>
          <input type="text" className="input-field" placeholder="Phone or Mobile Number" required=""/>
          <button className='confirm-btn'>CONFIRM</button>
          </form>
          
        </div>
      </div>

    </div>
    </>
  )
}
