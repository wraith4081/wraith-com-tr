import React from 'react'

function Calculator() {
    return (
        <div className='lg:mx-8 mx-0 px-6 lg:px-0 max-w-7xl w-full flex flex-col gap-y-8 items-center justify-center' id='testimonials'>
            <div className="max-w-7xl text-center flex flex-col gap-y-2">
                <h2 className="text-base font-semibold leading-8 tracking-widest text-indigo-500 uppercase">Hesaplama Aracı</h2>
                <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 lg:text-4xl transition-colors">Beklenmedik süprizlere yer yok</p>
            </div>
            <div className='w-full relative'>
                <div className="bg-slate-400/5 py-8 px-6 rounded-2xl w-full shadow blur-sm select-none pointer-events-none">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-y-6 blur">
                        <h2 className='text-4xl text-indigo-500 uppercase font-semibold leading-8 tracking-widest'>Lorem ipsum dolor sit.</h2>
                        <p className='text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus optio explicabo nihil magnam molestias saepe aut nemo ipsa distinctio dicta, assumenda voluptatem iure culpa iusto consectetur reiciendis, provident numquam, autem fugiat! Ea, ad accusantium. Excepturi quas libero harum quos.</p>
                        <p className='text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, harum quisquam numquam deleniti ducimus illo animi quam tempora nulla nam ipsam eligendi explicabo est dolorem molestias alias hic ipsum sit, ipsa quaerat assumenda. Assumenda, earum temporibus nihil enim reprehenderit aperiam!</p>
                    </div>
                </div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <h3 className="text-lg font-semibold leading-8 tracking-[0.25rem] text-indigo-500 uppercase">Yakında</h3>
                </div>
            </div>
        </div>
    )
}

export default Calculator