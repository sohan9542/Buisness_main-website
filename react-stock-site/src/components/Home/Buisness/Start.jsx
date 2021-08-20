import React from 'react'
import classes from './Start.module.css'
import { ProgressBar } from 'react-bootstrap';
const Start = () => {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.ceo__description}>
                    <p className={classes.color}>LET'S START</p>
                    <h1>Start Your Business with brainstorming</h1>
                    <div className={classes.name}>
                        <h6>Buisness</h6>
                        <h6>80%</h6>
                    </div>
                    <ProgressBar variant="danger" animated now={80} />
                    <div className={classes.name}>
                        <h6>Consulting</h6>
                        <h6>70%</h6>
                    </div>
                    <ProgressBar variant="danger" animated now={70} />
                    <div className={classes.name}>
                        <h6>Stratigy</h6>
                        <h6>90%</h6>
                    </div>
                    <ProgressBar variant="danger" animated now={90} />
                    <button>DISCOVER MORE</button>
                </div>

                <div className={classes.ceo__photo}>
                    <img src="https://rstheme.com/products/html/reobiz/assets/images/bg/skill.jpg" alt="" />
                </div>

            </div>
        </>
    )
}

export default Start