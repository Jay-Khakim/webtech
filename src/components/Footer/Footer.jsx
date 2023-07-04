import React from "react";
import Linkedin from "../../assets/images/linkedin-with-frame.svg";
import Facebook from "../../assets/images/facebook-with-frame.svg";
import Instagram from "../../assets/images/instagram-with-frame.svg";


const Footer = ()=>{
    return(
        <footer>
            <div className="container">
                <div className="col-1">
                    <div className="row">
                        <h1>
                            web<span>tech</span>
                        </h1>
                        <p>Licence number: <br />
                        342-09-01584</p>
                    </div>
                    <div className="row">
                        <div className="row-col">
                            <h3>About</h3>
                            <ul>
                                <li><a href="">Company</a></li>
                                <li><a href="">Team</a></li>
                                <li><a href="">Partners</a></li>
                            </ul>
                        </div>
                        <div className="row-col">
                            <h3>Works</h3>
                            <ul>
                                <li><a href="">Drugsnote</a></li>
                                <li><a href="">Manajoy</a></li>
                                <li><a href="">Deltoid</a></li>
                            </ul>
                        </div>
                        <div className="row-col">
                            <h3>Contacts</h3>
                            <ul>
                                <li><a href="">info@webtech.kr</a></li>
                                <li><a href="">+8210 1587 6659</a></li>
                                <li><a href="">South Korea</a></li>
                            </ul>
                        </div>

                        <div className="row-col">
                            <h3>Blog</h3>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div class="footer-col-languages">
                            <ul>
                                <li><a href="" class="current">EN</a></li>
                                <li><a href="">RU</a></li>
                                <li><a href="">KR</a></li>
                                <li><a href="">UZ</a></li>
                            </ul>
                        </div>

                        <div class="footer-social-media">
                            <a href=""><img src={Instagram} alt="" /></a>
                            <a href=""><img src={Facebook} alt="" /></a>
                            <a href=""><img src={Linkedin} alt="" /></a>
                        </div>
                    </div>
                    
                </div>

                <div className="col-2">
                    <div className="row">
                        <p>
                            &copy; 2022 <strong>web</strong>tech <br />
                            All rights reserved
                        </p>
                    </div>
                    <div className="row">
                        <h3>Services</h3>
                        <div className="services">
                            <ul>
                                <li>Custom Software Development </li>
                                <li>Digital Stratage Consulting</li>
                                <li>Mobile App Development</li>
                                <li>Hybrid App Development</li>
                                
                                
                            </ul>

                            
                            <ul>
                                <li>Web App Development</li>
                                <li>Android Development</li>
                                <li>IOS Development</li>
                                <li>Outstaffing</li>
                            </ul>
                            <ul>
                                <li>Blockchain</li>
                                <li>Big Data</li>
                                <li>No code</li>
                                <li>Low code</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer