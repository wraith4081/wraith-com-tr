import React from 'react'
import classnames from 'classnames';

interface TestimonialProps {
    quote: string;

    name: string;
    username: string;

    image: string;

    big?: true,

    company?: string | HTMLCompany
}

type HTMLCompany = () => JSX.Element;

export default function Testimonial(data: TestimonialProps & (
    { big?: true  } |
    { big?: false }
)) {
    return (

        <figure className={classnames("rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-lg ring-0 ring-slate-900 transition-colors flex flex-col items-start justify-between", {
            'w-full sm:col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white': data.big
        })}>
            <blockquote className="text-slate-900 dark:text-slate-100">
                <p>“{data.quote}”</p>
            </blockquote>

            <figcaption className={classnames("mt-6 flex items-center gap-x-4 justify-between border-t border-slate-100 dark:border-slate-900 transition-colors w-full pt-4", {
                "": data.big
            })}>
                <div className='flex items-center gap-x-4'>
                    <img className="h-10 w-10 rounded-full bg-slate-700" src={`https://wraith.com.tr/${data.image}`} alt="" />
                    <div>
                        <div className="font-semibold">{data.name}</div>
                        <div className="text-slate-600 dark:text-slate-400 transition-colors">@{data.username}</div>
                    </div>
                </div>
                {
                    typeof data.company === 'string' ? (
                        <img className="h-10 w-auto flex-none" src={data.company as string} alt="" />
                    ) : data.company && typeof data.company !== 'string' && (
                        <data.company />
                    )
                }

            </figcaption>
        </figure>
    )
}
