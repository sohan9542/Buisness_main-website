import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import classes from './NavbarStyle.module.css'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar';
import {DiJira} from 'react-icons/di'
const Navbar = () => {
    const [handle, setHandle] = useState(false)
    function handleSideBar(value) {
        setHandle(value)
    }
    return (
        <>
            <div>
                <nav className={classes.Nav}>
                    <div className={classes.NavbarContainer}>
                        <div className={classes.logo}><DiJira /> Reobiz</div>
                        <div className={classes.mobileIcon} onClick={()=> handleSideBar(true)}>
                            <FaBars />
                        </div>
                        <div className={classes.NavMenu}>
                            <div className={classes.NavItem}>
                                <li><Link className={classes.NavLink}  to="/">Home</Link></li>
                            </div>
                            <div className={classes.NavItem}>
                                <li><Link className={classes.NavLink}  to="/about">About</Link></li>
                            </div>
                            <div className={classes.NavItem}>
                                <li><Link className={classes.NavLink} to="/discover">Discover</Link></li>
                            </div>
                            <div className={classes.NavItem}>
                                <li><Link className={classes.NavLink} to="/services">Services</Link></li>
                            </div>
                            <div className={classes.NavItem}>
                                <li><Link className={classes.NavLink} to="/sign">Sign Up</Link></li>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <Sidebar handleSideBar={handleSideBar} handle={handle}/>


        </>
    )
}

export default Navbar
