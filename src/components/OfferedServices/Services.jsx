import React from 'react'
import './Services.css'

import DesigningLogo from '../../assets/design_logo.png'
import DevelopingLogo from '../../assets/develop_logo.png'
import MarketingLogo from '../../assets/market_logo.png'

export default function Services() {
    return (
        <div className='services'>
            <div>
                <img src={DesigningLogo} alt="Designing Logo" />
                <h2>design</h2>
            </div>

            <div>
                <img src={DevelopingLogo} alt="Developing Logo" />
                <h2>development</h2>
            </div>

            <div>
                <img src={MarketingLogo} alt="Marketing Logo" />
                <h2>seo & marketing</h2>
            </div>
        </div>
    )
}
