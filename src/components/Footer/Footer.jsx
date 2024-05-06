import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div className='footer '>
            <div className="container-fluid footer-part-1">
            <div class="container text-center">
                <div class="row footer-part-1">
                    <div class="col">
                        <a href="">Language Services</a>
                    </div>
                    <div class="col">
                        <a href="">Contact us</a>
                    </div>
                    <div class="col">
                        <a href="">Terms Of Use</a>
                    </div>
                    <div class="col" >
                        <a href="">Privacy Policy</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="container-fluid footer-part-2">
                <div className='row'>
                <img className='footer-img' src="https://gmt.vwgroup.com/assets/images/footer_logo_vwag.svg" alt="VOLKSWAGEN" />
                </div>
            </div>
            
        </div>
    )
}

export default Footer