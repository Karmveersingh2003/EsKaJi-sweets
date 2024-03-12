import React, { useEffect, useState } from 'react'
import './product.css'
import { BiGitCompare, BiLogoTwitter } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { BiLogoFacebook,BiLogoTelegram,BiLogoLinkedinSquare } from "react-icons/bi";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Product = () => {
    const [products, setproducts] = useState([]);
    const {productid} = useParams();
  
  const getProductsHandler=async()=>{
let response= await axios.get(`http://localhost:4000/product_description/${productid}`);
setproducts(response.data.pro_des);
}

  useEffect(() => {
    getProductsHandler();
  }, []);

  
    return (
        <>
            <div className='productDetailDiv'>
                
           
                <>
                    <div className='descriptionImage'>
                    <img src={products.image}></img>
                </div>
                <div className='description'>
                    <h1 id='tittle'>{products.name}</h1>
                    <h2 id='color'>{products.price}</h2>
                    <h4>PACKING:</h4>
                    <select id="dropdown">
                        <option value="N/A">Choose An Option</option>
                        <option value="1">500 gm</option>
                        <option value="2">1Kg</option>
                    </select>
                    <div className='b'>
                        <button type='button' className='btnn'>-</button>
                        <button type='number' className='btnn' />
                        <button type='button' className='btnn'>+</button>
                        <button id='stylebtn' >Add To Cart</button>
                    </div>
                    <div id='icons'>
                        <BiGitCompare></BiGitCompare>
                        COMPARE
                        <FiHeart></FiHeart>
                        ADD TO WISHLIST
                        <hr></hr>
                    </div>
                    <div>
                       {/* <h4 className='bottomtag'> SKU: N/A</h4> */}
                       <h4 className='bottomtag'> {products.category}</h4>
                        {/* <h4 className='bottomtag'>Tag: Dry Fruit</h4> */}

                        <div className='tele'>SHARE:
                            <a target='_blank' href="https://www.facebook.com/"><BiLogoFacebook/> </a>
                        <BiLogoTwitter/> 
                        <BiLogoTelegram/>
                         <BiLogoLinkedinSquare/>
                         </div>
                    </div>
                </div>
                </>
                
            
            
            </div>
        </>
    )
}

export default Product