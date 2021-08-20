import React from 'react'
import Hero from './Hero/Hero'
import Ceo from './CEO/Ceo'
import Solution from './Solution/Solution'
import Services from './Services/Services'
import SimpleSlider from './Overview/Overview'
import Start from './Buisness/Start'
import FooterPage from './Footer/Footer'

const Home = () => {

    return (
        <>
            <Hero />
            <Solution />
            <Ceo />
            <Services />
            <SimpleSlider />
            <Start />
            <FooterPage />
        </>
    )
}

export default Home
