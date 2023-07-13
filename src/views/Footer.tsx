import React from 'react';
import { BsDiscord, BsInstagram, BsTwitter } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className='py-20 px-6 overflow-hidden mx-auto bg-slate-900/10 dark:bg-slate-100/10 w-full'>
      <div className='max-w-xl mx-auto flex flex-col gap-y-10 items-center w-full'>
        <nav className='grid grid-cols-2 gap-x-2 gap-y-4 w-full lg:text-center'>
          <a href="#" className='px-2 py-1 rounded-lg hover:bg-slate-900/10 transition-colors'>Ana sayfa</a>
          <button onClick={() => {
            window.scrollTo({
              top: (document.querySelector('#projects')?.getBoundingClientRect().top || 0) + window.pageYOffset - 80,
              behavior: 'smooth',
            })
          }} className='px-2 py-1 rounded-lg hover:bg-slate-900/10 transition-colors'>Projeler</button>
        </nav>
        <div className='flex justify-center text-slate-600 dark:text-slate-300 text-sm gap-x-6'>
          <NavLink to={"https://discord.com/users/523113284853825546"}><BsDiscord size={20} /></NavLink>
          <NavLink to={"https://instagram.com/n0tbaris"}><BsInstagram size={20} /></NavLink>
          <NavLink to={"https://twitter.com/wraithdeveloper"}><BsTwitter size={20} /></NavLink>
        </div>
        <p className='text-slate-500 dark:text-slate-300 text-sm text-center'>© {new Date().getFullYear()} Wraith. Tüm Haklar Saklıdır.</p>

      </div>
    </div>
  )
}

export default Footer