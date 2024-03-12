import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Sweet_Home_Components/header/Header';
import Sweet from './Sweet_Pages/Sweets/Sweet';
import Home from './Sweet_Pages/Home/Home';
import Namkeen from './Sweet_Pages/Namkeen/Namkeen';
import Manwaar from './Sweet_Pages/Manwaar/Manwaar';
import Form from './Sweet_Home_Components/Form';
import Product from './Sweet_Pages/Products/Product';
import Login from './Sweet_Pages/Login/Login';
import Contact from './Sweet_Pages/ContactUs/Contact';
import About from './Sweet_Pages/AboutUs/About';
import Footer from './Sweet_Pages/Footer/Footer';

function App() {

  let isAdmin=false;

  {/* {isAdmin&& <Form/>} */}
        {/* <Form/> */}
        {/* <Route path='/product_description' element={<Greece/>}></Route> */}

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route index element={<Home />}></Route>
          <Route path='product_cat/sweets'  element={<Sweet/>}></Route>
          <Route path='product_cat/namkeen'  element={<Namkeen/>}></Route>
          <Route path='product_cat/manwaar'  element={<Manwaar isAdmin={isAdmin} />}></Route>
          <Route path='admin' ></Route>
          <Route path='/product_cat/product_description/:productid' element={<Product/>}></Route>
          <Route path='/login_page'  element={<Login/>}></Route>
          <Route path='page_id/aboutus' element={<About/>}></Route>
          <Route path='page_id/contactus' element={<Contact/>}></Route>
          <Route path='/*' element={<h1>error page</h1>}></Route>
         
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
