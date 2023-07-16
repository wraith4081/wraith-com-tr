import React from 'react'
import Testimonial from './Testimonial'

export default function Testimonials() {
    return (
        <div className='lg:px-8 px-6 max-w-[100rem] flex flex-col gap-y-16 items-center justify-center'>
            <div className="max-w-7xl text-center flex flex-col gap-y-2">
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-500">Testimonials</h2>
                <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 lg:text-4xl transition-colors">We have worked with thousands of amazing people</p>
            </div>
            <div className={
                'mx-auto w-full grid max-w-3xl grid-cols-1 gap-8 text-sm leading-6' +
                'text-slate-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4 gap-8 justify-items-center'
            }>
                <div className='grid grid-cols-1 sm:grid-cols-2 sm:col-span-2 xl:col-span-1 xl:grid-cols-1 gap-8 w-full'>
                    <Testimonial name='Leslie Alexander' username='lesliealexander' image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80' quote='Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.' />
                    <Testimonial name='Leslie Alexander' username='lesliealexander' image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80' quote='Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.' />

                    <Testimonial name='Leslie Alexander' username='lesliealexander' image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80' quote='Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.' />

                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-8 min-w-fit'>
                    <Testimonial name='Leslie Alexander' username='lesliealexander' image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80' quote='Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.' big={true} company='https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg' />
                    <Testimonial name='Leslie Alexander' username='lesliealexander' image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80' quote='Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.' />
                    <Testimonial name='Leslie Alexander' username='lesliealexander' image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80' quote='Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.' />
                    <Testimonial name='Leslie Alexander' username='lesliealexander' image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80' quote='Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.' />
                    <Testimonial name='Leslie Alexander' username='lesliealexander' image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80' quote='Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.' />

                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 sm:col-span-2 xl:col-span-1 xl:grid-cols-1 gap-8 min-w-fit'>
                    <Testimonial name='Leslie Alexander' username='lesliealexander' image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80' quote='Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.' />
                    <Testimonial name='Leslie Alexander' username='lesliealexander' image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80' quote='Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.' />
                    <Testimonial name='Leslie Alexander' username='lesliealexander' image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80' quote='Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.' />

                </div>
            </div>
        </div>
    )
}
