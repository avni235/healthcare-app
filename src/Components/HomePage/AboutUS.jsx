import React from "react";
import '../../All_Styles/AboutUS.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
// import why_choose from '../../assets/Images/why_choose.png'
// import Why_choose2 from '../../assets/Images/Why_choose2.png'
import care4 from '../../assets/Images/care4.png'


// Add the desired icons to the library
library.add(fas);



const AboutUS = () => {
  return (
    <>

        <div className="aboutUs_caregiver_container mta py-5">
          <div className="caregiver_aboutUs_container px-5">
          <div className="aboutUs_content " style={{ fontSize: '36px' }}>
  Highlights of Care24
</div>

            <div className="aboutUs_discription "style={{ fontWeight: 400 }}>
            At Care24, we believe in more than just providing a service – we believe in providing a lifeline for those in need. Our team of professional attendants and caregivers are not just trained in nursing and specialized elder care, but also in providing companionship and understanding.
            </div>

            <div className="aboutUs_discription1 mt-2"style={{ fontWeight: 400 }}>
            We understand the challenges that come with caring for the elderly, and we’re here to support you every step of the way. Our services, available in Mumbai, Delhi, and Bangalore, are designed to bring peace of mind to you and your loved ones.              </div>
          </div>
          <div className="aboutUs_caregiver_overlay_container">

            <div className="image_container_aboutUs">
             <div className="aboutUS_img"> <img src={care4} alt="care4" /></div>
            </div>

           


          </div>
        </div>

      
    </>
  )
}

export default AboutUS