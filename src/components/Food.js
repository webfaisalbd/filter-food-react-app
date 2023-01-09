import React, { useState } from 'react'
import Fooddata from '../data';

const Food = () => {

    const [foods, setFoods] = useState(Fooddata);

    const handleFilter = (select) => {
        const filtered = Fooddata.filter((food)=> {
            return food.category === select;
        })
        setFoods(filtered);
    }



    return (
        <div className='container'>

            <header>
                <div className="title">
                    <h1>Filter Food</h1>
                </div>
                <nav>
                    <li onClick={()=> handleFilter("combo")}>Combo</li>
                    <li onClick={()=> handleFilter("burger")}>Burger</li>
                    <li onClick={()=> handleFilter("pizza")}>Pizza</li>
                    <li onClick={()=> handleFilter("sandwich")}>Sandwich</li>
                    <li onClick={()=> handleFilter("shawarma")}>Shawarma</li>
                    <li onClick={()=> setFoods(Fooddata)}>All</li>
                </nav>
                <div>

                </div>
            </header>

            <div className="displayData">

                <div className="main">

                    {
                        foods.map((food) => {
                            return <div className='card-body' key={food.id}>
                                <div className="card">
                                    <img className='img-resize' src={food.imgdata} alt="" />
                                    <div className='nameAndPrice'>
                                        <h2>{food.rname}</h2>
                                        <p>{food.price}</p>
                                    </div>
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