import { useMain } from 'context/Main'
import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import url from 'utils/url';

function Header() {
    const { isDarkMode, setIsDarkMode } = useMain();

    return (
        <div className='w-dynamic z-[999] fixed inset-x-0 top-0 h-16 bg-slate-200 dark:bg-slate-800 transition-colors px-4 py-2 flex items-center justify-between shadow-sm'>
            <a href={'#'}>
                <h1 className='font-maven text-2xl text-slate-900 dark:text-slate-100 font-black rounded-lg hover:text-indigo-500 transition-colors'>wraith.com.tr</h1>
            </a>
            <div
                className='w-10 h-10 bg-slate-900/10 hover:bg-slate-900/20 dark:bg-slate-100/10 dark:hover:bg-slate-100/20 rounded-lg cursor-pointer flex items-center justify-center transition-colors'
            >
                <motion.div
                    animate={{ rotate: isDarkMode ? 360 : 0 }}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => {
                        setIsDarkMode(current => !current)
                    }}
                    className='relative w-10 h-10'
                >
                    <motion.div
                        animate={{ opacity: isDarkMode ? 0 : 1 }}
                        className='absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                        children={<HiSun size={20} />}
                    />
                    <motion.div
                        animate={{ opacity: isDarkMode ? 1 : 0 }}
                        className='absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                        children={<HiMoon size={20} />}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Header