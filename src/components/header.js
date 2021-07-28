import React from 'react'
import {Link} from 'gatsby'
import * as headerStyles from "./header.module.scss"

const Header = ()=>{
    return(
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    Liau Ming Sheng (Darren)
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/aboutme'>About Me</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>My Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/mycontacts'>My Contacts</Link>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header
