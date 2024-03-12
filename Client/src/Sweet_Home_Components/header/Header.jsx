import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import pic from "./logo1.png"
import Form from '../Form'
const Header = () => {
  return (
  
    <div className='header'>
   
            <Link to="/"><img className='header_icon' src={pic}/></Link>
        <div className='headerLeft'>
            <Link to="/product_cat/sweets" style={{textDecoration: "none"}}><span>Sweets</span></Link>
            <Link to="/product_cat/namkeen" style={{textDecoration: "none"}}><span>Namkeen</span></Link>
            <Link to="/product_cat/manwaar" style={{textDecoration: "none"}}><span>Manwaar</span></Link>
            <Link to="/page_id/aboutus" style={{textDecoration: "none"}}><span>About Us</span></Link>
            <Link to="/page_id/contactus" style={{textDecoration: "none"}}><span>Contact</span></Link>
            
            
        </div>
    </div>
  )
}
export default Header;

