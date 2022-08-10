import React from 'react'
import { Link } from 'react-router-dom'

import '../screens/LandingPage.css';
import BackgroundImage from '../../assets/images/bg3.jpg'
import Dblogo from '../../assets/images/db_logo_black.jpeg'



export default function LandingPage() {
    return (
        <div id="forLandingPage">

        <header style={ HeaderStyle }>
        <div className="landingLogo"><img src={Dblogo} alt="DB Logo"/> </div>
            <h1 className="main-title text-center">Welcome to Deutsche Bank!</h1>
            <p className="main-para text-center">#PositiveImpact</p>
            <div className="buttons text-center">
                
                <Link to="/login/user">
                    <button className="primary-button">log in</button>
                </Link>
            </div>
        </header>
        </div>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}