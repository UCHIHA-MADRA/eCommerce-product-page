import React from 'react';
import { motion } from 'framer-motion';

const Overlay = (props) => {
    const { setShowSidebar, setShowCart, showSidebar, showCart, showSlider, setShowSlider } = props;

    const handleOverlayClick = () => {
        if (showSidebar) {
            setShowSidebar(false);
        } else if (showCart) {
            setShowCart(false);
        } else if (showSlider) {
            setShowSlider(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={handleOverlayClick}
            className="bg-gray-900 bg-opacity-30 w-full h-full fixed top-0 left-0 z-10"
        ></motion.div>
    );
};

export default Overlay;
