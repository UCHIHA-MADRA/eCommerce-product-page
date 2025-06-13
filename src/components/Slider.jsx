import React from 'react';
import { motion } from 'framer-motion';
import IMAGE from "./../images/image-product-1.jpg";
import { ProductImageData } from '../data/ProductImageData';

const Slider = (props) => {
    const { selected, setSelected } = props;

    const Source = ProductImageData.find(item => item.imageNumber === selected);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl w-full h-auto overflow-auto bg-secondary fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 shadow-2xl"
        >
            {selected !== 1 && (
                <button
                    onClick={() => setSelected(prev => prev - 1)}
                    className="fixed top-0 bg-primary bg-opacity-0 hover:bg-opacity-50 px-2 transition-all duration-300 left-0 h-full text-secondary"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                    </svg>
                </button>
            )}
            <div className="w-full mx-auto">
                <img src={Source?.source} alt="image" className="block" />
            </div>
            {selected !== 4 && (
                <button
                    onClick={() => setSelected(prev => prev + 1)}
                    className="fixed top-0 bg-primary bg-opacity-0 hover:bg-opacity-50 px-2 transition-all duration-300 right-0 h-full text-secondary"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            )}
        </motion.div>
    );
};

export default Slider;
