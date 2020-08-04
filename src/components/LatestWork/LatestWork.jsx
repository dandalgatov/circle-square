import React from 'react'

import './LatestWork.css'

import Deer from '../../assets/deer.jpg'
import Abstract from '../../assets/abstract.jpg'
import Leaves from '../../assets/leaves.jpg'
import PlayButton from '../../assets/play_button.svg'

export default function LatestWork() {
    return (
        <div className="latest-work">
            <div className="flex leading-10">
                <h4 className="text-sm md:text-lg font-semibold">latest work</h4>
                <img src={PlayButton} alt="play button" className="w-3 h-auto mx-1" />
            </div>

            <div className="card-stack">

                <div className='card card-one'>
                    <img src={Deer} alt="Deer" />
                </div>
                <div className='card card-two'>
                    <img src={Abstract} alt="Abstract" />
                </div>
                <div className='card card-three'>
                    <img src={Leaves} alt="Leaves" />
                </div>

            </div>


        </div>
    )
}
