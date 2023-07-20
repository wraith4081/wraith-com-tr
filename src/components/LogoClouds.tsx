import { useMain } from 'context/Main';
import React, { useState } from 'react'
import classnames from 'classnames';

const Cloud = ({ src, alt, widthBased = false, size = 64 }: { src: string, alt: string, isDarkMode: boolean, widthBased?: boolean, size?: number }) => {

    const [isHovered, setIsHovered] = useState(false);
    const colorMask = { filter: `brightness(0)`, opacity: 0.25 }; /* Adjust the color mask as needed */

    return (
        <div
            className="relative bg-slate-400/5 p-8 h-32 overflow-hidden rounded w-full group"
            onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
            onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
        >
            <dd style={{
                width: !widthBased ? 'auto' : size,
                height: widthBased ? 'auto' : size,
            }} className='h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <img
                    src={src}
                    alt={alt}
                    className={classnames('transition-all object-fit bg-center')}

                    style={{
                        ...(isHovered ? {} : colorMask),
                        width: !widthBased ? 'auto' : size,
                        height: widthBased ? 'auto' : size,
                    }}
                />
            </dd>
        </div>
    )
}

export default function LogoClouds() {

    const { isDarkMode } = useMain();

    return (
        <div className="mx-auto w-full px-6 sm:px-8 flex flex-col gap-y-36">
            <div className="mx-auto max-w-7xl w-full">
                <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0.5 overflow-hidden rounded-2xl text-center w-full">
                    <Cloud isDarkMode={isDarkMode} src="https://wraith.com.tr/cloudflarelogo.png" alt={"Cloudflare"} widthBased={true} size={92} />
                    <Cloud isDarkMode={isDarkMode} src="https://wraith.com.tr/discordlogo.png" alt={"Discord"} />
                    <Cloud isDarkMode={isDarkMode} src="https://wraith.com.tr/crunchyrolllogo.png" alt={"Crunchyroll"} />
                    <Cloud isDarkMode={isDarkMode} src="https://wraith.com.tr/amazonlogo.png" alt={"Amazon"} />
                    <Cloud isDarkMode={isDarkMode} src="https://wraith.com.tr/wafoenlogo.png" alt={"Wafoen"} size={80} />
                    <Cloud isDarkMode={isDarkMode} src="https://wraith.com.tr/twitterlogo.png" alt={"Twitter"} />

                </dl>
            </div>
        </div>
    )
}
