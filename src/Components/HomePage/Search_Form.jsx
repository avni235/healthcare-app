import React, { useEffect, useState } from "react";
import '../../All_Styles/Search_Form.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';

// Add the desired icons to the library
library.add(fas);

const Search_Form = (props) => {
  // Form validation start
  const [index, setIndex] = useState(0);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [formValidated, setFormValidated] = useState(false);

  // Form validation start
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setFormValidated(true);
    } else {
      setFormValidated(true);
      // Handle form submission logic here (e.g., show a success message or store the input locally)
      console.log("Form Submitted:", { name, mobile });
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

  return (
    <>
      <div className="search_form_container py-5 px-5">
        <div className="search_container">
          <div className="intro_text px-5">
            <h1 style={{ color: '#003366', fontSize: '36px', fontFamily: 'Source Serif Pro, serif', fontWeight: 600 }}>
              Experience superior elderly care with Care24's 70+hrs in-house trained & verified caregivers.
            </h1>
            <p style={{ color: '#565656', fontSize: '20px', fontFamily: 'Source Sans Pro, sans-setif', fontWeight: 400 }} className="py-5">
              Caring for our elders is essential, as they become physically and emotionally vulnerable over time. Care 24 offers experienced Geriatric caregivers who offer the needed support and assistance to elders to lead a self-independent and healthier life.
            </p>
          </div>

          <div className="tasklist_container mt-5 px-5">
            <h1 style={{ color: '#003366', fontSize: '30px', fontFamily: 'Source Serif Pro, serif', fontWeight: 600 }}>
              WHAT YOU CAN EXPECT IN CAREGIVER TASKLIST
            </h1>
            <div className="tasklist">
              <h4 style={{ color: '#00D100', fontSize: '28px', fontFamily: 'Source Serif Pro, serif', fontWeight: 600 }}>Do's</h4>
              <ul style={{ color: '#565656', fontSize: '18px' }}>
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
              <h4 style={{ color: '#FF0000', fontSize: '28px', fontFamily: 'Source Serif Pro, serif', fontWeight: 600 }}>Don't</h4>
              <ul style={{ color: '#565656', fontSize: '18px' }}>
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

export default Search_Form;
