import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

import Logo from '../../assets/logo.png'
import MenuButton from '../MenuButton/MenuButton'

export default function Header() {

    const [hamburgerActive, setHamburgerActive] = useState(false)
    const [menuItemActive, setMenuItemActive] = useState('home')

    return (
        <>
            <nav>
                <div className='logo'>
                    <img src={Logo} alt='Logo'/>
                </div>

                <div className={ hamburgerActive ? 'overlay' : 'no-overlay' }>

                    <Link
                        exact to='/'
                        className={`m-4 link ${hamburgerActive ? 'text-4xl' : 'inline-block'}`}
                        onClick={() => setMenuItemActive('home')}
                    >
                        <span className={menuItemActive === 'home' ? 'menu-highlight' : 'no-highlight'}/>
                        home
                    </Link>
                    <Link
                        exact to="/about"
                        className={`m-4 link ${hamburgerActive ? "text-4xl" : "inline-block"}`}
                        onClick={() => setMenuItemActive('about')}
                    >
                        <span className={menuItemActive === 'about' ? 'menu-highlight' : 'no-highlight'}/>
                        about
                    </Link>
                    <Link
                        exact to="/work"
                        className={`m-4 link ${hamburgerActive ? "text-4xl" : "inline-block"}`}
                        onClick={() => setMenuItemActive('work')}
                    >
                        <span className={menuItemActive === 'work' ? 'menu-highlight' : 'no-highlight'}/>
                        work
                    </Link>
                    <Link
                        exact to="/contact"
                        className={`m-4 link ${hamburgerActive ? "text-4xl" : "inline-block"}`}
                        onClick={() => setMenuItemActive('contact')}
                    >
                        <span className={menuItemActive === 'contact' ? 'menu-highlight' : 'no-highlight'}/>
                        contact
                    </Link>



                </div>







                <MenuButton hamburgerActive={hamburgerActive} setHamburgerActive={setHamburgerActive} />



            </nav>
        </>
    )
}
