import React from 'react'
import { motion } from 'framer-motion'

export default function Skeleton() {
    return (
        <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='w-full h-full bg-[#ddd] rounded'
        />
    );
}
