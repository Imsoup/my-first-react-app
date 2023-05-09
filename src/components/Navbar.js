import React from 'react'
import logo from '../images/react-logo.png'

export default function Navbar(){
    return(
        <nav className='nav'>
            <div className='logo-items'>
                <img className='logo-img'src={logo}/>
                <h3>ReactFacts</h3> 
            </div>         
                <h4 className='nav-item'>React-Course - Project 1</h4>           
        </nav>
    )
}