import React from 'react'
import Cart from './Card';
import classes from './Solution.module.css'


const Solution = () => {
    const solution = [
        {
            img: 'https://rstheme.com/products/html/reobiz/assets/images/services/icons/1.png',
            heading: 'Solution Focused',
            desc: 'We always provide people a complete solution focused of any business.'
        },
        {
            img: 'https://rstheme.com/products/html/reobiz/assets/images/services/icons/2.png',
            heading: 'Customer Oriented',
            desc: 'We always provide people a complete solution focused of any business.'
        },
        {
            img: 'https://rstheme.com/products/html/reobiz/assets/images/services/icons/3.png',
            heading: '99.99% Success',
            desc: 'We always provide people a complete solution focused of any business.'
        },
        {
            img: 'https://rstheme.com/products/html/reobiz/assets/images/services/icons/4.png',
            heading: 'Decision Maker',
            desc: 'We always provide people a complete solution focused of any business.'
        },


    ]

    return (
       <div className={classes.container}>
           {solution.map(pd=> <Cart product={pd}/>)}
       </div>
    )
}

export default Solution
