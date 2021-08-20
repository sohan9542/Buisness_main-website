import React from 'react'
import classes from './Ceo.module.css'
import {FaHandPointRight} from 'react-icons/fa'
const Ceo = () => {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.ceo__photo}>
                    <img src="https://rstheme.com/products/html/reobiz/assets/images/about/inner/left-img.jpg" alt="" />
                    <div className={classes.ceo__name}>
                        <h2>Marlina More</h2>
                        <h6>CEO & Founder</h6>
                    </div>
                </div>
                <div className={classes.ceo__description}>
                    <p className={classes.color}>ABOUT</p>
                    <h1>We Provides Best Advice For Your Business</h1>
                    <p className={classes.ash}>Reobiz donec pulvinar magna id leoersi pellentesque impered dignissim rhoncus euismod euismod eros vitae.</p>
                    <ul>
                        <li><FaHandPointRight className={classes.icon}/> Production or Trading of Good or Services for Sale</li>
                        <li><FaHandPointRight className={classes.icon}/> Cost of supplies and equipment</li>
                        <li><FaHandPointRight className={classes.icon}/> Change in the volume of expected sales</li>
                        <li><FaHandPointRight className={classes.icon}/> Change in the volume of expected sales</li>
                        <li><FaHandPointRight className={classes.icon}/> Change in the volume of expected sales</li>

                    </ul>
                    <button>DISCOVER MORE</button>
                </div>
            </div>
        </>
    )
}

export default Ceo
