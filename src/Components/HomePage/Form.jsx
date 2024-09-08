import React, { useState, useEffect } from "react";
import '../../All_Styles/Form.css';
import 'bootstrap/dist/css/bootstrap.css';

const Form = (props) => {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [requirement, setRequirement] = useState('');
  const [formValidated, setFormValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setFormValidated(true);
    } else {
      setFormValidated(true);
      // Form submission logic can be added here if needed in the future
      console.log("Form Submitted Successfully!");
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
      <div className="Max_width80 myMT">
        <div className="search_form_container sm_M_auto">
          <div className='from_container Vibrate_card' tabIndex='0' id={props.id}>
            <form noValidate onSubmit={handleSubmit} className={formValidated ? 'was-validated' : ''}>
              <div className="form_Heaader_content_container">
                <div className="Have_a_query">Have a query?</div>
                <div className="We are_here">We’re here to help!</div>
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
                    <button type="submit" className="btn btn-success callus_btn mb-3">Submit</button>
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
