import Hero from 'components/Hero';
import Projects from 'components/Projects';
import React from 'react';

function Home() {

    return (
        <div className='flex flex-col items-center gap-y-8 mx-auto max-w-full'>
            <Hero />
            <Projects />
        </div>
    )
}

export default Home;