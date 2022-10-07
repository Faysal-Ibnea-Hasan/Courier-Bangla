import React from 'react';
import{Link} from 'react-router-dom';

import './Navber.css';


function Navbar() {
   
    return (


        <>
            <header>
                <img src="./logo.png" alt="logo" />
                <nav>
                    <ul className='nav_links'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/support">Support</Link></li>
                        <li><Link to="/order">Order</Link></li>
                    </ul>
                </nav>
                <div>

                    <Link className='buttons' to="/login"><button>LOGIN</button></Link>
                    <Link className='buttons' to="/signup"><button>REGISTER</button></Link>
                </div>
            </header>
        </>

    )
}

export default Navbar