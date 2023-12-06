import React from "react";
import { FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Logo=()=>{
    return(
        <h1 className='header_logo'>
            <GiHamburgerMenu size='25px' color='#A4A4A4'/>
            <a href="/">
                <FaYoutube color='red'/>
                <span>Youtube</span>
            </a>
      </h1>
    )
}

export default Logo