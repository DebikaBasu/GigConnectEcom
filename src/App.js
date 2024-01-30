import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Header from "./components/Header";
import Products from "./components/Products";
import ProductView from "./components/ProductView";
import Cart from "./components/Cart";
import ThankYou from "./components/ThankYou";

function App() {
  const [filter, setFilter] = useState('');
  return (
      <BrowserRouter>
        <Header setFilter={setFilter}/>
        <Routes>
          <Route path='/' element={<Products filter={filter} />} />
          <Route path='/product/:productId' element={<ProductView />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/thankyou' element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
