import React, { useState } from 'react'
import classes from './Sidebar.module.css'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Sidebar = ({handleSideBar, handle}) => {
    const ShowSideBar = {
        left: '0',
        opacity: '.9'
    }
    const HideSideBar = {
        left: '-100%',
        opacity: 0
    }
    return (
        <>
            <div className={classes.sidebar} style={ handle? ShowSideBar: HideSideBar}>
                <div className={classes.icon} onClick={()=> handleSideBar(false)}>
                    <MdClose />
                </div>
                <div className={classes.options}>
                    <div className={classes.NavItem}>
                        <li><Link onClick={()=> handleSideBar(false)} className={classes.NavLink} to="/">Home</Link></li>
                    </div>
                    <div className={classes.NavItem}>
                        <li><Link onClick={()=> handleSideBar(false)} className={classes.NavLink} to="/about">About</Link></li>
                    </div>
                    <div className={classes.NavItem}>
                        <li><Link onClick={()=> handleSideBar(false)} className={classes.NavLink} to="/discover">Discover</Link></li>
                    </div>
                    <div className={classes.NavItem}>
                        <li><Link onClick={()=> handleSideBar(false)} className={classes.NavLink} to="/services">Services</Link></li>
                    </div>
                    <div className={classes.NavItem}>
                        <li ><Link onClick={()=> handleSideBar(false)} className={classes.NavLink}  to="/sign">Sign Up</Link></li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
