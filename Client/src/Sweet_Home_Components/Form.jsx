import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Form = () => {
  const location = useLocation()

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async(event) => {
      event.preventDefault();
console.log('You made a request');
    let response =  await axios.post("http://localhost:4000/addproducts",inputs);
    console.log(response);
    
    let data =  await axios.get("http://localhost:4000/",inputs);
    console.log(data);
    }

  return (
    <>

    {/* <h1>hello {location.state.id}</h1> */}
    <form onSubmit={handleSubmit}>
      <label>Name:
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      
      </label>
      <br />
      <br />
      <label>Category:
        <input 
          type="text" 
          name="category" 
          value={inputs.category || ""} 
          onChange={handleChange}
        />
        </label>

        <br />
      <br />
      <label>Price:
        <input 
          type="number" 
          name="price" 
          value={inputs.price || ""} 
          onChange={handleChange}
        />
        </label>
        <br />
        <br />

        <label>Image:
        <input 
          type="string" 
          name="image" 
          value={inputs.image || ""} 
          onChange={handleChange}
        />
</label>
        <br />
        <br />
        <input type="submit" />
    </form>
    </>
  )
}

export default  Form;
