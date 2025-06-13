import React from 'react';
import { SidebarData } from './../data/SidebarData';
import { motion } from 'framer-motion';

const Sidebar = (props) => {
    const { setShowSidebar } = props;

    return (
        <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.5 }}
            className="w-64 h-screen overflow-auto bg-secondary fixed top-0 left-0 z-20 p-6"
        >
            <div>
                <button onClick={() => setShowSidebar(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="mt-6">
                {SidebarData.map((item, idx) => (
                    <h2
                        key={idx}
                        className="font-semibold mb-3 cursor-pointer hover:underline transition-all duration-150 max-w-fit"
                    >
                        {item}
                    </h2>
                ))}
            </div>
        </motion.div>
    );
};

export default Sidebar;
