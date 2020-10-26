import React from 'react';
import HeroSection from '../../HeroSection';
import Princing from '../../Princing';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <Princing />
            <HeroSection {...homeObjFour} />
        </>
    )
}

export default Home;
