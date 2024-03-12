import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./sweet.css"
import Form from '../../Sweet_Home_Components/Form';
import { Link } from 'react-router-dom';
const Sweet = ({ isAdmin }) => {
  const [products, setproducts] = useState([])
  const getProductsHandler = async () => {
    let response = await axios.get("http://localhost:4000/");
    setproducts(response.data.products);
  }

  useEffect(() => {
    getProductsHandler();
  }, []);

  const [updateProduct, setupdateProduct] = useState(null)


  const updateProductHandler = (item) => {
    setupdateProduct(item);
  }

  const onchangeHandler = (e) => {
    setupdateProduct({ ...updateProduct, [e.target.name]: e.target.value })
  }

  const submitUpdateHandler = async (event) => {
    event.preventDefault();
    await axios.put(`http://localhost:4000/updateproduct/${updateProduct._id}`, updateProduct);
  }
  console.log(updateProduct);
  return (
    <>
      <div className='body'>
        {updateProduct &&
          <form onSubmit={submitUpdateHandler}>
            <label>Name:
              <input
                type="text"
                name="name"
                value={updateProduct.name}
                onChange={(e) => onchangeHandler(e)}
              />

            </label>
            <br />
            <br />
            <label>Category:
              <input
                type="text"
                name="category"
                value={updateProduct.category}
                onChange={(e) => onchangeHandler(e)}
              />
            </label>

            <br />
            <br />
            <label>Price:
              <input
                type="number"
                name="price"
                value={updateProduct.price}
                onChange={(e) => onchangeHandler(e)}
              />
            </label>
            <br />
            <br />

            <label>Image:
              <input
                type="string"
                name="image"
                value={updateProduct.image}
                onChange={(e) => onchangeHandler(e)}
              />
            </label>
            <br />
            <br />
            <input type="submit" />
          </form>
        }
        <div className='container-box1'>

          {
            products.length >= 1 && products.map((item) => {
              if (item.category === "Sweet") {
                return (

                  <Link to={`/product_cat/product_description/${item._id}`}>
                  <div className='card'>
                    <img src={item.image}></img>
                    <div className='description'>
                      <h3>{item.name}</h3>
                      <p>{item.category}</p>
                      <p>₹{item.price}</p>
                      <a href="#">Read More</a>
                      {isAdmin && <button onClick={() => updateProductHandler(item)}>Update</button>}
                    </div>
                  </div>
                  </Link>
                )
              }
              return;
            })
          }</div>
      </div>
    </>
  )


}

export default Sweet
