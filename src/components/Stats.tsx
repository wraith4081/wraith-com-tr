import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const numberFormatter = new Intl.NumberFormat('tr-TR').format;
const dateFormatter = new Intl.RelativeTimeFormat('tr-TR', { numeric: 'auto' });
const compactNumberFormatter = new Intl.NumberFormat('tr-TR', { notation: 'compact' }).format;

export default function Stats() {

    const [data, setData] = useState<{ 
        "user": number, 
        "satisfaction": number, 
        "uptime": number, 
        "servers": { 
            "networkCapacity": number, 
            "activeServers": number, 
            "rps": number, 
            "activeServices": number
        },
        lastUpdated: number
    } | null>(null);

    const [time, setTime] = useState<number>(new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time + 1000);
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        fetch('https://stats.wraith.com.tr/').then(async res => {
            if (res.status !== 200) {
                toast.error('Stats API\'sine bağlanılamadı.');
            } else {
                const json = await res.json();

                setData(json);

                const interval = setInterval(() => {
                    fetch('https://stats.wraith.com.tr/').then(async res => {
                        if (res.status !== 200) {
                            toast.error('Stats API\'sine bağlanılamadı.');
                            clearInterval(interval);
                        } else {
                            const json = await res.json();

                            setData(json);
                        }
                    })
                }, 1000 * 60);
            }
        })
    }, []);

    return (
        <div className="mx-auto w-full px-6 sm:px-8 flex flex-col gap-y-36">
            <div className="mx-auto max-w-7xl w-full">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 transition-colors lg:text-4xl">500+ mutlu müşteriye katılın</h2>
                    <p className="mt-2 text-lg leading-8 text-slate-600 dark:text-slate-400 transition-colors">99.2% müşteri memnuniyeti ile aradığınız hizmete kavuşun.</p>
                </div>
                <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 overflow-hidden rounded-2xl text-center w-full">
                    <div className="flex flex-col bg-slate-400/5 p-8 rounded">
                        <dt className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400 transition-colors">Aylık Ulaşılan Sahış</dt>
                        <dd className="-order-last text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 transition-colors">{data ? compactNumberFormatter(data.user) + '+' : 'N/A'}</dd>
                    </div>
                    <div className="flex flex-col bg-slate-400/5 p-8 rounded">
                        <dt className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400 transition-colors">Müşteri Memnuniyeti</dt>
                        <dd className="-order-last text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 transition-colors">{data ? data.satisfaction : '?'}%</dd>
                    </div>
                    <div className="flex flex-col bg-slate-400/5 p-8 rounded">
                        <dt className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400 transition-colors">Uptime garantisi</dt>
                        <dd className="-order-last text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 transition-colors">{data ? Math.floor(data.uptime * 100) / 100 : '?'}%</dd>
                    </div>
                    <div className="flex flex-col bg-slate-400/5 p-8 rounded">
                        <dt className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400 transition-colors">Aktif Hizmet</dt>
                        <dd className="-order-last text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 transition-colors">{data ? numberFormatter(data.servers.activeServices) : 'N/A'}</dd>
                    </div>
                </dl>
            </div>
            <div className='flex flex-col gap-y-8 items-center max-w-7xl w-full mx-auto'>
                <div className="max-w-7xl text-center flex flex-col gap-y-2">
                    <h2 className="text-base font-semibold leading-8 tracking-widest text-indigo-500 uppercase">Bize Bırak ve Arkana Bakma</h2>
                    <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 lg:text-4xl transition-colors">Yüksek performansımıza güvenimiz tam</p>
                </div>
                <div className="bg-slate-400/5 py-12 sm:py-16 rounded-2xl w-full shadow">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-2 lg:grid-cols-4">
                            <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                                <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Aylık Veri Kullanımı</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl transition-colors">{(data ? numberFormatter(Math.floor(data?.servers.networkCapacity / 100) / 10) : 'N/A') + ' '}<span className='text-xl sm:text-3xl dark:opacity-50 opacity-75 tracking-wider'>Tb</span></dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                                <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Aktif Sunucu</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl transition-colors">{data ? numberFormatter(data.servers.activeServers) : 'N/A'}</dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                                <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Saniye Başına İstek</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl transition-colors">{data ? numberFormatter(Math.floor(data.servers.rps / 1000) * 1000) : 'N/A'}</dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                                <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">Bant Genişliği</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl transition-colors">{(data ? numberFormatter(Math.floor(data.servers.activeServers / 1000 * 10 * 100) / 100) : 'N/A') + ' '}<span className='text-xl sm:text-3xl dark:opacity-50 opacity-75 tracking-wider'>Tbps</span></dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <p className='text-slate-600 dark:text-slate-400 transition-colors'>{data ? dateFormatter.format(Math.floor(((data?.lastUpdated || 0) - time) / 1000), 'second') + ' güncellendi.' : 'Veri çekilemedi.'}</p>
            </div>
        </div>
    )
}
