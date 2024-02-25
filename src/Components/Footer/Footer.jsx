import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <img src="./img/footer.jpg" alt="" />
            
            <div className="redes">
                <div className='face'>
                    <img src="./img/icons/facebook.png" alt="" />
                    <p>: Paola Peluqueria</p>
                </div>
                <div className='insta'>
                    <img src="./img/icons/instagram.png" alt="" />
                    <p>: Paola Peluqueria</p>
                </div>
                <div className='whats'>
                    <img src="./img/icons/whatsapp.png" alt="" />
                    <p>: Paola Peluqueria</p>
                </div>
            </div>

            <iframe 
            title='Google Maps'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.128289746898!2d-57.90262872576988!3d-34.95339311598433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2eedf67eba563%3A0x581df7d4b5abaaff!2sC.%20604%20603%20n%203535%2C%20B1914EFA%20Villa%20Elvira%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708475850216!5m2!1ses-419!2sar"
            height="220" 
            loading="lazy" 
            ></iframe>

        </div>
    )
}

export default Footer