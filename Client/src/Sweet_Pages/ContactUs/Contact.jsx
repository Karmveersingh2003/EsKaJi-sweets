import React from 'react'
import './contact.css'
import { ImMobile, ImLocation2 } from 'react-icons/im';
import { BiSupport } from 'react-icons/bi';
import { SlPlane } from 'react-icons/sl';
import Footer from '../Footer/Footer';
import Form from '../../Sweet_Home_Components/Form';


const Contact = () => {
    return (
        <>
       
            <div id='submitMain'>
               
                    <div id='contactitems'>
                        <h1 className='submitname'>SEND US AN EMAIL</h1>
                        <form  className='inputContainer' >
                            <label>Enter your name
                            </label>
                                <input type="text" className='contactus' />
                        </form>
                        <form  className='inputContainer' >
                            <label>Enter your email
                            </label>
                                <input type="text" className='contactus' />
                        </form >
                        <form className='inputContainer' >
                            <label>Subject
                            </label>
                                <input type="text" className='contactus' />
                        </form >
                        <form  className='inputContainer'>
                            <label>Your message (optional)
                            </label>
                                <textarea ></textarea>
                        </form>
                        <div id='submitbtn'>
                            <button id='contactbtn'>submit</button>
                        </div>
                    </div>

                
                <div className='checke' >
                    <h1 className='submitname'>  REACH WITH US</h1><hr />
                    <p>We deal in a wide variety of sweets and namkeens , ranging from traditional sweets to high end boutique sweets. We cater the needs from individual persons to large corporate and from weddings to baby showers.

                    </p>

                    <p> With listing of 150 plus products we are always open to innovate and learn new products and deliver it to our customers. Snacks and desserts are our another forte where we are always excited to bring something new to our customers.
                    </p>

                    <h1 className='submitname'>CONTACT US</h1><hr />
                    <div className='iconlast'>
                        <div className='submiticon'>
                            <ImMobile />
                        </div>
                        <div>
                            <h3>Phone: +91-7014018057</h3>
                            <h3>EMAIL: karmveersingh2003@gmail.com</h3>
                        </div>
                        <div className='submiticon'>
                            <BiSupport />

                        </div>
                        <h3>Support forum
                            for over 24hr</h3>

                    </div>
                    <div className='iconlast'>
                        <div className='submiticon'>
                            <SlPlane />
                        </div>
                        <h3> Paid standard shipping
                            on all orders.</h3>
                        <div id='submiticon1'>
                            <ImLocation2 />

                        </div>
                        <h3>Address: Sardarpura, Jodhpur-INDIA</h3>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Contact














































{/* <div>
                <h1> SEND US AN EMAIL </h1>
            </div>
            <div>
                <h3>
                    Your name
                    <div className='b'>
                        <button id='stylebtn' >name</button>
                    </div>
                </h3>
            </div>
            <div>
                <h3>
                Your email
                    <div className='b'>
                        <button id='stylebtn' >name</button>
                    </div>
                </h3>
            </div>
            <div>
                <h3>
                Subject
                    <div className='b'>
                        <button id='stylebtn' >name</button>
                    </div>
                </h3>
            </div>
            
            <div>
                <h3>
                Your message (optional)
                    <div className='b'>
                        <button id='stylebtn' >name</button>
                    </div>
                </h3>
            </div> */}