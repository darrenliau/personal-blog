import React from 'react'
import {Link , graphql, useStaticQuery} from 'gatsby'
import * as headerStyles from "./header.module.scss"

const Header = ()=>{
    const data = useStaticQuery(graphql`
    query {
        site{
            siteMetadata{
                title
                author
            }
        }
    }
  `)
    

    return(
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    { data.site.siteMetadata.author }
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
