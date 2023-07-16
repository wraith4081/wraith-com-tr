import React from 'react'

export default function Stats() {
    return (
        <div className="mx-auto w-full px-6 sm:px-8 flex flex-col gap-y-36">
            <div className="mx-auto max-w-7xl w-full">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 transition-colors lg:text-4xl">500+ mutlu müşteriye katılın</h2>
                    <p className="mt-2 text-lg leading-8 text-slate-600 dark:text-slate-400 transition-colors">99.2% müşteri memnuniyeti ile aradığınız hizmete kavuşun.</p>
                </div>
                <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 overflow-hidden rounded-2xl text-center w-full">
                    <div className="flex flex-col bg-slate-400/5 p-8">
                        <dt className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400 transition-colors">Aylık Ulaşılan Sahış</dt>
                        <dd className="-order-last text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 transition-colors">7,2M+</dd>
                    </div>
                    <div className="flex flex-col bg-slate-400/5 p-8">
                        <dt className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400 transition-colors">Müşteri Memnuniyeti</dt>
                        <dd className="-order-last text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 transition-colors">99.2%</dd>
                    </div>
                    <div className="flex flex-col bg-slate-400/5 p-8">
                        <dt className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400 transition-colors">Uptime garantisi</dt>
                        <dd className="-order-last text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 transition-colors">99.9%</dd>
                    </div>
                    <div className="flex flex-col bg-slate-400/5 p-8">
                        <dt className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400 transition-colors">Paid out to creators</dt>
                        <dd className="-order-last text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 transition-colors">$70M</dd>
                    </div>
                </dl>
            </div>
            <div className='flex flex-col gap-y-2 items-center max-w-7xl w-full mx-auto'>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 transition-colors lg:text-4xl mb-2">Bize Bırak ve Arkana Bakma</h2>

                <div className="bg-slate-400/5 py-12 sm:py-16 rounded-2xl w-full shadow">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-2 lg:grid-cols-4">
                            <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                                <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Ağ Kapasitesi</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl transition-colors">7Tbps+</dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                                <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Aktif Sunucu</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl transition-colors">8,632</dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                                <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Saniye Başına İstek</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl transition-colors">102,500</dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                                <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Aktif Hizmet</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl transition-colors">512</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <p className='text-slate-600 dark:text-slate-400 transition-colors'>3 Saat önce güncellendi.</p>
            </div>
        </div>
    )
}
