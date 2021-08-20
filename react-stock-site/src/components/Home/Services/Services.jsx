import React from 'react'
import classes from './Services.module.css'
import Cart from '../Solution/Card'

const Services = () => {
    const cards = [
        {
            img: 'https://rstheme.com/products/html/reobiz/assets/images/services/icons/modify/1.png',
            heading: 'Business Analysis',
            desc: 'We always provide people a complete solution focused of any business.'
        },
        {
            img: 'https://rstheme.com/products/html/reobiz/assets/images/services/icons/modify/2.png',
            heading: 'Reports Analysis',
            desc: 'We always provide people a complete solution focused of any business.'
        },
        {
            img: 'https://rstheme.com/products/html/reobiz/assets/images/services/icons/modify/3.png',
            heading: 'Profit Planning',
            desc: 'We always provide people a complete solution focused of any business.'
        },
        {
            img: 'https://rstheme.com/products/html/reobiz/assets/images/services/icons/modify/4.png',
            heading: 'Project Reporting',
            desc: 'We always provide people a complete solution focused of any business.'
        },
        {
            img: 'https://rstheme.com/products/html/reobiz/assets/images/services/icons/modify/5.png',
            heading: 'Estate Planning',
            desc: 'We always provide people a complete solution focused of any business.'
        },
        {
            img: 'https://rstheme.com/products/html/reobiz/assets/images/services/icons/modify/6.png',
            heading: 'Security Enhanced',
            desc: 'We always provide people a complete solution focused of any business.'
        },
        {
            img: 'https://rstheme.com/products/html/reobiz/assets/images/services/icons/modify/7.png',
            heading: 'Cloud Computing',
            desc: 'We always provide people a complete solution focused of any business.'
        },
        {
            img: 'https://rstheme.com/products/html/reobiz/assets/images/services/icons/modify/8.png',
            heading: 'Cryptocurrency',
            desc: 'We always provide people a complete solution focused of any business.'
        }
    ]
    return (
        <>
            <div>
                <h1 style={{ color: '#F00B51', textAlign: 'center' }}>OUR SERVICES</h1>
                <div className={classes.container}>
                    {cards.map(pd => <Cart product={pd} />)}
                </div>
            </div>
        </>
    )
}

export default Services
