import React, { useEffect, useState } from 'react'
import "./namkeen.css"
import axios from 'axios';
import { Link } from 'react-router-dom';




const Namkeen = () => {
const [products, setproducts] = useState([])
  const getProductsHandler=async()=>{
let response= await axios.get("http://localhost:4000/");
setproducts(response.data.products);
  }

  useEffect(() => {
    getProductsHandler();
  }, []);
  

  return (

  <>
   {/* {
    [...Array(10)].map((item,int)=>{
      return <div>
       {int} abce
      </div>
    })
   } */}


    <div className='body'>
      <div className='container-box1'>
      {
  products.length>=1 && products.map((item)=>{
    if(item.category==="Namkeen"){
      return(

        <Link to={`/product_cat/product_description/${item._id}`}>
        <div className='card'>
            <img src={item.image}></img>
            <div className='description'>
              <h3>{item.name}</h3>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
              <a href="">Read More</a>
            </div>
          </div>
        </Link>
      )
    }

    
    return;
  })
}

</div> 
</div>
    </>



  )
}

export default Namkeen
