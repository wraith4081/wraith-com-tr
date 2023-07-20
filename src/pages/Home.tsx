import FAQs from 'components/FAQs';
import Feature from 'components/Feature';
import Hero from 'components/Hero';
import LogoClouds from 'components/LogoClouds';
import Projects from 'components/Projects';
import Stats from 'components/Stats';
import Testimonials from 'components/Testimonials';
import React from 'react';

function Home() {

    return (
        <div className='flex flex-col items-center gap-y-36 mx-auto max-w-full'>
            <Hero />
            <Projects />
            <Testimonials />
            <LogoClouds />
            <Stats />
            <Feature />
            <FAQs />
        </div>
    )
}

export default Home;