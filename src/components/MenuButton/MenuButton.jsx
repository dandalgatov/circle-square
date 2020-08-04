import React from 'react'

import './MenuButton.css'

export default function MenuButton(props) {

    const { hamburgerActive, setHamburgerActive } = props

    const flipButton = () => {
        setHamburgerActive(!hamburgerActive)
    }


    return (
        <div className={`m-6 btn ${hamburgerActive ? "active" : "not-active md:hidden"}`} onClick={flipButton}>
            <span style={{ background: "#ffd471" }}></span>
            <span style={{ background: "#eb8a8a" }}></span>
            <span style={{ background: "#908adc" }}></span>
        </div>
    )
}
