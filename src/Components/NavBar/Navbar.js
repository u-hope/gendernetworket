import "./Navbar.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
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
                <Link to="/">
                    <img src={props.logoImg} alt="Logo"/>
                </Link>
            </div>

            

            <div className="navSocial">
                <Link to="/signin" style={{display:"flex",flexDirection:"column",textDecoration:"none"}}>
                    <img src={userImg} alt="profile" className="userImg"/>
                    <span style={{color:"#5c5c5c",padding:"1px" }}>Profile</span>
                </Link>
            </div>
            
        </div>
    );
}