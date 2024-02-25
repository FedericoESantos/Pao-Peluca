import React from 'react'
import "./Home.css";
import Index from "../PAGINAS/Index/Index"

const Home = () => {
    return (
        <div>
            <div className='home'>
                <img src="./img/title.png" alt="" />
                <div className="container-home">
                    <h1>Los mejores Productos</h1>
                    <button className='buton'>
                        <a href="/">Productos</a>
                    </button>
                </div>

            </div>
            <Index />
        </div>
    )
}

export default Home