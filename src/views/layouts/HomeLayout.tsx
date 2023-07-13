import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'views/Footer'
import Header from 'views/Header'

function HomeLayout() {
    return (
        <div className='w-full min-h-full overflow-y-scroll flex flex-col gap-y-8 font-inter bg-slate-50 dark:bg-slate-900 transition-colors text-slate-900 dark:text-slate-100'>
            <Header />
            <main className='flex-grow max-w-full mt-12 mx-auto px-4 min-h-full'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default HomeLayout