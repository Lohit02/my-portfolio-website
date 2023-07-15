/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import logo
import Logo from '../assets/logo.png';
import { Link } from "react-scroll";

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt=''/>
        </a>

        {/* button */}
        <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            
          >
             <button className='btn btn-sm'>Work with me</button>
            
          </Link>
       
      </div>
    </div>
  </header>;
};

export default Header;
