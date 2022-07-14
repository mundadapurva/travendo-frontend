import React from 'react';
import { Box } from '@material-ui/core'

import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Login from './components/login/Login';
import Product from './components/product/Product';
import SignUp from './signup/SignUp';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import DetailView from './components/ItemDetails/DetailView';
// import Footer from './components/footer/Footer';
// import './app.css';


function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/product" element={<Product />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/product/:id" element={<DetailView />} />
            </Routes>

          </Box>

          <br />
          {/* <Footer /> */}
        </BrowserRouter>


      </ContextProvider>
    </TemplateProvider>







  );


}

export default App;
