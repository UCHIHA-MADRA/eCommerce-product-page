import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import IMAGE from "./../images/image-product-1.jpg";

function Cart(props) {
  const { setShowCart, cartCount, setCartCount } = props;

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: "0%" }}
      transition={{ duration: 0.5 }}
      className="max-w-sm w-full h-screen bg-secondary text-primary fixed top-0 right-0 z-20 p-6 overflow-auto"
    >
      <div className="pb-6 border-b border-primary flex items-center justify-between">
        <h2 className="font-semibold">Cart</h2>
        <button onClick={() => setShowCart(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {cartCount === 0 ? (
        <div className="py-12 text-center">
          Your cart is empty
        </div>
      ) : (
        <>
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-2">
                <div className="w-16 aspect-square">
                  <img src={IMAGE} alt="image" />
                </div>
                <div>
                  <h2 className="mb-2">Fall Limited Edition Sneakers</h2>
                  <h2>
                    $125.00 x {cartCount} <span className="font-bold">${125 * cartCount}.00</span>
                  </h2>
                </div>
              </div>
              <div>
                <button onClick={() => setCartCount(0)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div>
            <button className="flex items-center border-2 border-primary gap-4 justify-center bg-primary text-secondary px-6 py-3 hover:shadow-lg transition-all duration-300 w-full">
              Checkout
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
}

Cart.propTypes = {
  cartCount: PropTypes.number.isRequired,
  setCartCount: PropTypes.func.isRequired,
  setShowCart: PropTypes.func.isRequired,
};

export default Cart;
