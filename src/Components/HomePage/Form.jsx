import React, { useEffect, useState } from "react";
import '../../All_Styles/Form.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

library.add(fas);

const Form = (props) => {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [requirement, setRequirement] = useState('');
  const [formValidated, setFormValidated] = useState(false);

  const apiUrl = 'https://admin.care24.co.in/leadmanager/api/lead/';
  const headers = {
    'Authorization': 'Token 11a839fb7483b8778f14567f9e24c3ebd973af6d',
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const formData = new URLSearchParams();
  formData.append('cust_name', name);
  formData.append('phone', mobile);
  formData.append('city', city);
  formData.append('requirement', requirement);
  formData.append('service', '3');
  formData.append('c24service', 'A');
  formData.append('lead_type', '4');

  const handleClick = () => {
    axios.post(apiUrl, formData, { headers })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setFormValidated(true);
    } else {
      setFormValidated(true);
      handleClick();
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

  const [cgsProfile, setCgsProfile] = useState([]);

  useEffect(() => {
    fetch('https://admin.care24.co.in/desertbox/api/getCGSProfile/?page=1', {
      method: 'GET',
      headers: {
        'Authorization': 'Token b22c4f7adc8ac8ea95138067bddb04b64358202c',
      }
    })
      .then(response => response.json())
      .then(data => setCgsProfile(data.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <div className="Max_width80 myMT">
        <div className="search_form_container sm_M_auto">
          <div className='from_container Vibrate_card' tabIndex='0' id={props.id}>
            <form noValidate onSubmit={handleSubmit} className={formValidated ? 'was-validated' : ''}>
              <div className="form_Heaader_content_container">
                <div className="Have_a_query">Have a query?</div>
                <div className="We_are_here">We’re here to help!</div>
              </div>
              <div className="form_body">
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control HomePage_Form" 
                    id="exampleInputName" 
                    placeholder="Enter Your Name" 
                    pattern="[A-Za-z]{3,}" 
                    required 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    autoComplete='off' 
                  />
                  <div className="invalid-feedback">Please enter your name</div>
                </div>
                <div className="mb-3">
                  <input 
                    type="tel" 
                    className="form-control HomePage_Form" 
                    id="exampleInputMobile" 
                    placeholder="Enter Mobile Number" 
                    pattern="[0-9]{10}" 
                    required 
                    value={mobile} 
                    onChange={(e) => setMobile(e.target.value)} 
                    autoComplete='off' 
                  />
                  <div className="invalid-feedback">Please enter a valid 10-digit mobile number</div>
                </div>
                <div className="mb-3">
                  <select 
                    className="form-select HomePage_Form" 
                    id="exampleInputCity" 
                    required 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="">Select Your City</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                    {/* Add more options as needed */}
                  </select>
                  <div className="invalid-feedback">Please select your city</div>
                </div>
                <div className="mb-3">
                  <textarea 
                    className="form-control HomePage_Form" 
                    id="exampleInputRequirement" 
                    rows="3" 
                    placeholder="Enter Your Requirement" 
                    required 
                    value={requirement} 
                    onChange={(e) => setRequirement(e.target.value)}
                  ></textarea>
                  <div className="invalid-feedback">Please describe your requirement</div>
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
  );
}

export default Form;
