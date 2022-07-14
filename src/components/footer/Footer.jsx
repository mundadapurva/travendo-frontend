import React from 'react';
import './footer.css';


const Footer = () => {
    return (
        <>
            <footer>
                <div className="content">
                    <div className="left box">
                        <div className="upper">
                            <div className="topic">About us</div>
                            <p>Travendo is an Ecommerce website</p>
                        </div>
                        <div className="lower">
                            <div className="topic">Contact us</div>
                            <div className="phone">
                                <a href="#"><i className="fas fa-mobile"></i>+91-0000000000</a>
                            </div>
                            <div className="email">
                                <a href="#"><i className="fas fa-envelope"></i>travendo@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="middle box">
                        <div className="topic">Our Services</div>
                        <div><a href="#">Ketan</a></div>
                        <div><a href="#">Purva</a></div>
                        <div><a href="#">Anand</a></div>
                        <div><a href="#">Pratham</a></div>
                        <div><a href="#">Siddhi</a></div>
                        <div><a href="#">:)</a></div>
                    </div>
                    <div className="right box">
                        <div className="topic">Subscribe us</div>
                        <form action="#">
                            <input type="text" placeholder="Enter email address" />
                            <input type="submit" name="" value="Send" />
                            <div Name="media-icons">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>

                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="bottom">
                    <p>Copyright 	&copy; 2022 <a href="#">KPAPS</a> All rights reserved</p>
                </div>
            </footer>
        </>


    )
}

export default Footer;