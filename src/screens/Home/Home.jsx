import React from 'react'
import './Home.css'

import LatestWork from '../../components/LatestWork/LatestWork'
import Services from '../../components/OfferedServices/Services'

import Workspace from '../../assets/workspace.jpg'

export default function Home() {
    return (
        <div className="homepage">
            <img src='src/assets/workspace.jpg' alt=""/>
            <div className='hero-image' style={{ backgroundImage: `url(${Workspace})`}} />
            <div className='content'>
                <h1>let's get started.</h1>
                <LatestWork />
                <p>We are a bespoke design firm dedicated to helping our clients make their ideas a reality. From design, development and SEO we work endlessly to ensure that the finished product meets and exceeds standards.</p>
                <Services />
            </div>
        </div>
    )
}
