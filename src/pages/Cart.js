import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => (
  <div>
    <Navbar />
    <section className="cart">
      <h2>Your Cart</h2>
      <p>No items in your cart yet!</p>
    </section>
    <Footer />
  </div>
);

export default Cart;