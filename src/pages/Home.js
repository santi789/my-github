import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Navbar />
    <main className="hero">
      <div className="container">
        <div className="hero-text">
          <h2>Order Food Anytime, Anywhere</h2>
          <p>Experience the best food delivery service at your doorstep. Choose from a wide variety of cuisines.</p>
          <a href="#" className="btn-order-now">Order Now</a>
        </div>
        <img src="https://via.placeholder.com/400x300" alt="Food Delivery" className="hero-image" />
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;