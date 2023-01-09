import React from 'react'
import Fooddata from '../data';

const Food = () => {
    return (
        <div className='container'>

            <header>
                <div className="title">
                    <h1>Filter Food</h1>
                </div>
                <nav>
                    <li>Punjabi</li>
                    <li>Vadapav</li>
                    <li>Pizza</li>
                    <li>Punjabi</li>
                    <li>All</li>
                </nav>
                <div>

                </div>
            </header>

            <div className="displayData">

                <div className="main">

                    {
                        Fooddata.map((food, i) => {
                            return <div className='card-body' key={i}>
                                <div className="card">
                                    <img className='img-resize' src={food.imgdata} alt="" />
                                </div>
                            </div>
                        })
                    }

                </div>

            </div>


        </div>
    )
}

export default Food