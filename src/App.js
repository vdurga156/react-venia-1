import './App.css';
import Header from './component/Home/Header';
import Navbar from './component/Home/Navbar';
import { Routes, Route } from 'react-router-dom';
import Productlist from './component/Product-page/Productlist';
import Product from './component/Product-page/Product';
import Basket from './component/Login/Basket';
import { useEffect, useState } from 'react';
import Detail from './component/Home/Detail';
import Review from './component/Login/Review';
import Filter from './component/Product-page/Filter';
import Footer from './component/Home/Footer';
import Signin from './component/Login/Signin';
import Order from './component/Login/Order'
import Signout from './component/Login/Signout';
import Signup from "./component/Login/Create";
import Navbardesc from './component/Home/Navbardesc';
import Shipping from '../src/component/Login/Shipping'
import Landing from './component/Home/Landing';
import Checkout from './component/Login/Checkout';
import Guestcheckout from './component/Login/Guestcheckout';

import Payment from './component/Login/Payment';
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState("");
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const getCategory = () => category;
  return (
    <>
    
    
      <Navbar countCartItems={cartItems.length} setCategory={setCategory} selectedCategory={category} />
      <Navbardesc countCartItems={cartItems.length} setCategory={setCategory} selectedCategory={category} />
      <Routes>
      <Route exact path='/'element={<Landing   />}/>        
        <Route exact path='/Header' element={<Header category={category} />}/>
        <Route exact path='/about' element={<Detail />} />
       <Route exact path='/filter'element={<Filter />} />
        <Route exact path='/Productlist' element={<Productlist category="" />} />
        <Route exact path='/signin' element={<Signin />} />
        <Route exact path='/Guestcheckout' element={<Guestcheckout />} />
        <Route exact path='/Payment' element={<Payment />} />
        <Route exact path='/Review' element={<Review />} />
        <Route exact path='/Order' element={<Order />} />
        <Route exact path='/Checkout' element={<Checkout />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/signout' element={<Signout />} />
        <Route exact path='/products/:id' element={<Product onAdd={onAdd} />} />
        <Route exact path='/cart' element={<Basket  cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
        <Route exact path='/Shipping' element={<Shipping  cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
