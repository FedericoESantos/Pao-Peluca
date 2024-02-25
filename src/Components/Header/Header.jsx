import React from 'react'
import "./Header.css";

export const Header = () => {
    return (
        <div className='header'>
            
            <div className="container-info">
                <img src="./img/perfil.jpg" alt="" />
            </div>

            <div className='container'>
                <div className='img1'>
                    <img src="./img/secador.jpg" alt="" />
                </div>
                <div className='img2'>
                    <img src="./img/logo.jpg" alt="" />
                </div>
                <div>

                </div>
                <div className='img4'>
                    <img src="./img/belleza.jpg" alt="" />
                </div>
            </div>

            <div className="container-info2">
                <img src="./img/perfil2.jpg" alt="" />
            </div>

        </div>
    )
}
