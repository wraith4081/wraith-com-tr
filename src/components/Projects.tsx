import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { useMain } from 'context/Main'
import Skeleton from './Skeleton'

export default function Projects() {
    const { content } = useMain();
    const [inView, setInView] = useState(false)
    const projectsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting)

                if (entry.isIntersecting) {
                    observer.unobserve(entry.target)
                }
            },
            {
                rootMargin: '-50px 0px',
            }
        )

        if (projectsRef.current) {
            observer.observe(projectsRef.current)
        }

        return () => {
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current)
            }
        }
    }, [])

    const projectVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
    }

    return (
        <div ref={projectsRef} id='projects' className='flex flex-col items-center justify-start gap-y-6 text-center max-w-full h-full w-full'>
            <div className='flex flex-col gap-y-2 h-2/3 justify-center'>
                <div className='text-center max-w-full'>
                    <h1 className='text-3xl font-semibold max-w-full whitespace-pre-wrap'>Projeler</h1>
                </div>
                <p className='text-slate-700 dark:text-slate-300'>Şu anda aktif olarak geliştirdiğim projeler.</p>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-4 w-full'>
                {
                    content ? (
                        content.projects.map((project, index) => (
                            <NavLink to={project.url}>
                                <motion.div
                                    key={index}
                                    className='group w-full aspect-square dark:bg-slate-100/10 bg-slate-900/10 rounded-lg border-2 dark:border-slate-100/10 border-slate-900/10 hover:border-indigo-600 relative flex items-center justify-center p-4 transition-colors overflow-hidden'
                                    variants={projectVariants}
                                    initial='hidden'
                                    animate={inView ? 'visible' : 'hidden'}
                                >
                                    <div className='w-full aspect-square max-w-[192px]'>
                                        <img src={project.logo} alt='' className='w-auto aspect-square' />
                                    </div>
                                    <div
                                        className='absolute inset-0 opacity-0 group-hover:opacity-100 bg-indigo-500 transition-opacity flex flex-col items-center justify-center p-2'
                                    >
                                        <h1 className='text-2xl font-semibold text-indigo-100'>{project.name}</h1>
                                        <p className='text-indigo-300'>{new URL(project.url).host}</p>
                                    </div>
                                </motion.div>
                            </NavLink>
                        ))
                    ) : (
                        Array.from({length: 4}).map((_, index) => (
                            <div className='w-full aspect-square rounded-lg'>
                                <Skeleton />
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}