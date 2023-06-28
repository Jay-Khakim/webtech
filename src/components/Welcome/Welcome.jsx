import React from "react";
import Phone1 from "../../assets/images/PhoneMockup-1.png";
import Phone2 from "../../assets/images/PhoneMockup.png";
import Laptop from "../../assets/images/PixelBook-Go.png";
import Linkedin from "../../assets/images/linkedin.png";
import Facebook from "../../assets/images/Facebook.png";
import Instagram from "../../assets/images/Instagram.png";



const Welcome = ()=>{
    return(
        <section className="welcome-part">
            <div className="wel-back-effect1"></div>
            <div className="wel-text">
                <h1>Today We Are Limited Only By Our Imagination</h1>
				<div className="underline"></div>
                <p>Turn your ideas into real results with us</p>

                <div class="social-media">
					<a href=""><img src={Instagram} alt="" /></a>
					<a href=""><img src={Facebook} alt="" /></a>
					<a href=""><img src={Linkedin} alt="" /></a>
				</div>
            </div>
            <div className="wel-back-effect2"></div>
            <div className="wel-back-effect3"></div>
            <div className="wel-img">
                

                <img src={Laptop} className="laptop" alt="" />
                <img src={Phone2} className="phone2" alt="" />
                <img src={Phone1} className="phone1" alt="" />
                <a href="#" class="scroll-down">
					<div class="scroll-down__inner"></div>
				</a>
            </div>

        </section>
    )

}

const iconContainer = document.querySelector('.welcome-part');
document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  iconContainer.style.setProperty('--mouse-x', x + 'px');
  iconContainer.style.setProperty('--mouse-y', y + 'px');
});

export default Welcome