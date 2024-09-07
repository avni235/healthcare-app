import React, { useEffect, useState } from "react";
import '../../All_Styles/Search_Form.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';

// Add the desired icons to the library
library.add(fas);


const Search_Form = (props) => {

  // Form validation start

  const [index, setIndex] = useState(0);

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [formValidated, setFormValidated] = useState(false);




  // Calling on number API start


  const apiUrl = 'https://admin.care24.co.in/leadmanager/api/lead/';
  
  const headers = {
    'Authorization': 'Token 11a839fb7483b8778f14567f9e24c3ebd973af6d',
    'Cookie': 'csrftoken=EmQhD5qgJZomFzSARRsCoyJv18qWowpQu2JqF9YWEDXw4WtKX9cvZyuUCyAboeVG; sessionid=1czu79h19smorqth4umjd2qx125y6lpv',
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  
  const formData = new URLSearchParams();
  formData.append('cust_name', name);
  formData.append('phone', mobile);
  formData.append('city', '1');
  formData.append('service', '3');
  formData.append('c24service', 'A');
  formData.append('lead_type', '4');
  
  const handleClick = () => {
    axios.post(apiUrl, formData, { headers })
      .then(response => {
        // Handle successful response
        console.log(response.data);
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  };
  

  // Calling on number API end



  // Form validation start


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    console.log(form.checkValidity())


    if (form.checkValidity() === false) {
      event.stopPropagation();
      setFormValidated(true);
    }
    else{
      
      setFormValidated(true);
      handleClick()
    }
    

  };




  const handleSlideChange = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === 2 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    handleSlideChange(index);
  }, [index]);

  // Form validation end





  // Profile API call start

  const [cgsProfile, setCgsProfile] = useState([]);

  useEffect(() => {
    fetch('https://admin.care24.co.in/desertbox/api/getCGSProfile/?page=1', {
      method: 'GET',
      headers: {
        'Authorization': 'Token b22c4f7adc8ac8ea95138067bddb04b64358202c',
        'Cookie': 'csrftoken=s0ildCtQbbUhlXi5IKdYsSGJ2djUOuAXr8SrEAYheWul9tAd10YhSe78XV2DCHbz'
      }
    })
      .then(response => response.json())
      .then(data => setCgsProfile(data.data))
      .catch(error => console.error(error))
  }, []);

  // cgsProfile.map((preval) => {
  //   console.log(preval)
  // })


  // Profile API call end




  return (
    <>
      
        <div className="search_form_container py-5 px-5 ">
        <div className="search_container">
        <div className="intro_text px-5">
  <h1 style={{ color: '#003366',fontSize: '36px', fontFamily: 'Source Serif Pro,serif', fontWeight:600}}>Experience superior elderly care with Care24's 70+hrs in-house trained & verified caregivers.</h1>
  <p style={{ color: '#565656',fontSize: '20px', fontFamily: 'Source Sans Pro,sans-setif', fontWeight:400}} className="py-5">Caring for our elders is essential, as they become physically and emotionally vulnerable over time. Care 24 offers experienced Geriatric caregivers who offer the needed support and assistance to elders to lead a self-independent and healthier life.</p>
</div>


          <div className="tasklist_container mt-5 px-5">
          <h1 style={{ color: '#003366',fontSize: '30px', fontFamily: 'Source Serif Pro,serif', fontWeight:600}}>WHAT YOU CAN EXPECT IN CAREGIVER TASKLIST</h1>
            <div className="tasklist">
              <h4 style={{ color: '#00D100',fontSize: '28px', fontFamily: 'Source Serif Pro,serif', fontWeight:600}}>Do's</h4>
              <ul style={{ color: '#565656',fontSize: '18px'}}>
                <li>Oral feeding</li>
                <li>Wash the patient’s clothes</li>
                <li>Wash clothes in the machine</li>
                <li>Oral medication</li>
                <li>Assist in patient’s daily activities</li>
                <li>Light massage (10-15 mins)</li>
                <li>Maintain cleanliness in patient’s room and washroom</li>
                <li>Prepare basic food for a patient</li>
              </ul>
            </div>
            <div className="tasklist">
              <h4 style={{ color: '#FF0000',fontSize: '28px', fontFamily: 'Source Serif Pro,serif', fontWeight:600}}>Don't</h4>
              <ul style={{ color: '#565656',fontSize: '18px'}}>
                <li>Ryles or IV tube feeding</li>
                <li>Wash family’s clothes</li>
                <li>Wash clothes by hand</li>
                <li>Injection or any surgical procedures</li>
                <li>Domestic work</li>
                <li>Full body massage</li>
                <li>Cleaning house and other washrooms</li>
                <li>Prepare food for a family</li>
              </ul>
            </div>
          </div>
        </div>
          <div className="Form_main_container">
            {/* <div className="col-12 col-xxl-5 col-xl-5 col-lg-4 col-md-4 col-sm-12 mt-md-5 mt-sm-5 FormSection">
          <div className="row">
            <div className="col-12 col-md-12 col-sm-12">
              
            </div>
          </div>
        </div> */}
            <div className='from_container Vibrate_card' tabIndex='0' id={props.id}>

              <form noValidate onSubmit={handleSubmit} className={formValidated ? 'was-validated' : ''}>
                <div className="form_Heaader_content_container">
                  <div className="Have_a_query">Have a query?</div>
                  <div className="We_are_here">We’re here to help!</div>
                </div>
                <div className="form_body">
                  <div className="mb-3">
                    <input type="text" className="form-control HomePage_Form" id="exampleInputName" placeholder="Enter Your Name" pattern="[A-Za-z]{3,}" required value={name} onChange={(e) => setName(e.target.value)} autoComplete='off'/>
                    <div className="invalid-feedback">Please enter your name</div>
                  </div>
                  <div className="mb-3">
                    <input type="tel" className="form-control HomePage_Form" id="exampleInputMobile" placeholder="Enter Mobile Number" pattern="[0-9]{10}" required value={mobile} onChange={(e) => setMobile(e.target.value)} autoComplete='off' />
                    <div className="invalid-feedback">Please enter a valid 10-digit mobile number</div>
                  </div>
                  <div className="text-center">
                    <div className="buttons_container mt-5">
                      <button type="submit" className="btn btn-success callus_btn mb-3">Request a callback</button>
                    </div>
                  </div>
                </div>

              </form>




            </div>
          </div>
        </div>
      
    </>
  )
}

export default Search_Form