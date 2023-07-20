import React, { useEffect } from 'react'
import Testimonial from './Testimonial'
import { useMain } from 'context/Main';

export default function Testimonials() {

    const { content } = useMain();

    const [data, setData] = React.useState<{
        "quote": string,
        "name": string,
        "username": string,
        "image": string,
        "big"?: true | undefined
    }[] | null>(null);
    const [big, setBig] = React.useState<number | null>(null);

    useEffect(() => {
        if (!content) return;

        const firstBig = content.testimonials.findIndex(t => t.big);

        if (firstBig !== -1) {
            setBig(firstBig);
        }

        const removedExtra = content.testimonials.filter((t, i) => !t.big);

        setData(removedExtra);

        return () => {
            setBig(null);
            setData(null);
        }

    }, [content])

    return (
        <div className='lg:px-8 px-6 max-w-[100rem] flex flex-col gap-y-8 items-center justify-center' id='testimonials'>
            <div className="max-w-7xl text-center flex flex-col gap-y-2">
                <h2 className="text-base font-semibold leading-8 tracking-widest text-indigo-500 uppercase">Referanslar</h2>
                <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 lg:text-4xl transition-colors">Binlerce harika insanla çalıştık</p>
            </div>
            {
                content ? (
                    <div className={
                        'mx-auto w-full grid max-w-3xl grid-cols-1 gap-8 text-sm leading-6' +
                        'text-slate-900 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4 gap-y-8 xl:gap-x-8 justify-items-center'
                    }>
                        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 xl:col-span-1 col-span-2 gap-8 min-w-full'>

                            {
                                data?.slice(0, 3).map((testimonial, i) => (
                                    <Testimonial name={testimonial.name} username={testimonial.username} image={testimonial.image} quote={testimonial.quote} key={i} />
                                ))
                            }
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-8 w-full'>
                            {
                                content && big && ((testimonial) => (
                                    <Testimonial name={testimonial.name} username={testimonial.username} image={testimonial.image} quote={testimonial.quote} big={true} company={() => (
                                        <a href="https://cizgimax.online" className='text-xl font-black font-maven text-slate-500 hover:text-[#f2b829] transition-colors'>cizgimax.online</a>
                                    )} />
                                ))(content.testimonials[big])
                            }
                            {
                                data?.slice(3, 7).map((testimonial, i) => (
                                    <Testimonial name={testimonial.name} username={testimonial.username} image={testimonial.image} quote={testimonial.quote} key={i} />

                                ))
                            }

                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 col-span-2 xl:col-span-1 xl:grid-cols-1 gap-8 w-full'>
                            {
                                data?.slice(7, 10).map((testimonial, i) => (
                                    <Testimonial name={testimonial.name} username={testimonial.username} image={testimonial.image} quote={testimonial.quote} key={i} />

                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <div className='max-w-3xl mx-auto w-full aspect-['></div>
                )
            }
        </div>
    )
}
