import "./Navbar.css";
import React, { useState } from 'react';
import userImg from '../../Img/user.png';

export default function NavBar(props){
    
    
    
    const [navbar,setNavbar] = useState(true);

    const navScroll = () =>{
        if(window.screenY >= 80){
            setNavbar(false);
        }else{
            setNavbar(true);
        }
    }
    
    window.addEventListener('scroll', navScroll)

    return(
        <div className= {navbar ? 'navBar active' : 'navBar'}>

            <div className="navLogo">
                <img src={props.logoImg} alt="Logo"/>
            </div>

            

            <div className="navSocial">
                <a href="/signup" ><img src={userImg} alt="profile" className="userImg"/></a>
            </div>
            
        </div>
    );
}