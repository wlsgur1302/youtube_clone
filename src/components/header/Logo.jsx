import React from "react";
import { ReactComponent as Youtube_logo } from "../../assets/svg/YouTube_Logo.svg" 
import { GiHamburgerMenu } from "react-icons/gi";

const Logo=()=>{
    return(
        <h1 className='header_logo'>
            <button>
                <GiHamburgerMenu className='hamburger' size='40px' color='white'/>
            </button>
            <a href="/">
                <Youtube_logo className="logo" ></Youtube_logo>              
            </a>
      </h1>
    )
}

export default Logo