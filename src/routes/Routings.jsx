import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import MyProvider from '../context/MyProvider';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Products from '../components/pages/Products';
import ProductDetail from '../components/pages/ProductDetail';
import NotFound404 from '../components/pages/NotFound404';

const Routings = () => (
  <MyProvider>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product-detail' element={<ProductDetail />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
      <Footer />
    </Router>
  </MyProvider>
);

export default Routings;
