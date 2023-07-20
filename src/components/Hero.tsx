import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

export default function Hero() {
  const [isClicked, setIsClicked] = useState(false)

  const buttonVariants = {
    idle: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    clicked: {
      y: 10,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  }

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
    }, 200)
  
    const projects = document.getElementById('projects')
    if (!projects) return;
  
    const projectsTop = projects.getBoundingClientRect().top + window.pageYOffset - 80;
  
    window.scrollTo({
      top: projectsTop,
      behavior: 'smooth',
    })
  }

  return (
    <div className='flex flex-col items-center justify-start gap-y-12 text-center max-w-full h-screen' id='hero'>
      <div className='flex flex-col gap-y-2 h-2/3 justify-center'>
        <div className='text-center max-w-full'>
          <h1 className='text-5xl font-semibold max-w-full whitespace-pre-wrap'>
            Üzgünüz, bu sayfa henüz hazır değil.
          </h1>
        </div>
        <p className='text-slate-700 dark:text-slate-300'>
          Eğer isterseniz, alta kaydırarak ön izleyebilirsiniz.
        </p>
      </div>
      <motion.button
        className='inline-flex flex-col gap-x-2 items-center font-medium'
        variants={buttonVariants}
        initial='idle'
        animate={isClicked ? 'clicked' : 'idle'}
        whileHover='hover'
        onClick={handleClick}
      >
        Aşağıya Kaydır
        <HiChevronDown size={20} />
      </motion.button>
    </div>
  )
}