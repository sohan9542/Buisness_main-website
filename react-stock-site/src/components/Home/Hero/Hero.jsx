import React from 'react'
import Slider from 'infinite-react-carousel';
import classes from './hero.module.css'
const Hero = () => {
    return (
        <>
            <Slider autoplay={true} autoplaySpeed={4000}>
                <div className={classes.slide}>
                    <img src="https://rstheme.com/products/html/reobiz/assets/images/slider/h1-sl1.jpg" alt="" />
                    <div className={classes.description}>
                        <h1>Need Better Plan To Start Business</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and type setting has been the industry's standard dummy text.</p>
                        <button>Sign Up</button>
                    </div>

                </div>
                <div className={classes.slide}>
                    <img src="https://wallpaperaccess.com/full/656665.jpg" alt="" />
                    <div className={classes.description2}>
                        <h1>Grow Up Buisness With Our Help</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and type setting has been the industry's standard dummy text.</p>
                        <button>Contact Us</button>
                    </div>
                </div>
            </Slider>
        </>
    )
}

export default Hero
