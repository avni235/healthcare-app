import React from "react";
import '../../All_Styles/FooterSection.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';

// import Blue_Banner from '../../assets/Images/Blue_Banner.png'
import Blue_Banner from '../../assets/Images/footer_bg.png'
import logo from '../../assets/Images/logo.png'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


// Add the desired icons to the library
library.add(fas);


const FooterSection = () => {
  return (
    <>
      <footer className="Footer_main_container">

        <div class="image_container_footer">
          <img src={Blue_Banner} alt="Footer_bg" />
          <div class="overlay_footer">


            <div className="Footer_container">
              <div className="footerLeft_section">
                <div className="log">
                  <img src={logo} alt="logo" />
                </div>
                <div className="footer_left_content1 mt-2">World Class Cares at Home</div>

                <div className="footer_left_content2">Now be stress-free. Care24 is here to take care of your loved ones.</div>

                <div className="my-4">
                  <div className="contact_us">Contact Us</div>

                  <div className="Number_email_section"><span>+91 8069048802 |</span> <span className="maito"><a href="mailto:support@care24.co.in">support@care24.co.in</a></span></div>
                </div>

                <div className="Social_apps_icons">
                 <a href="https://www.instagram.com/care24athome/" target="_blank">
                 <button> <FontAwesomeIcon icon={faInstagram} /></button> 
                 </a>
                 <a href="https://www.facebook.com/Care24athome/" target="_blank">
                  <button><FontAwesomeIcon icon={faFacebook} /></button> 
                 </a>
                 <a href="https://twitter.com/care24athome" target="_blank">
                  <button><FontAwesomeIcon icon={faTwitter} /></button>
                  </a>
                  </div>
              </div>
              <div className="footerRight_section">

                <div class="grid-container_footer">
                  <div class="grid-item_footer">

                    <div className="footer_Right_content_container">
                      <div className="footer_Right_content_heading1">Company</div>
                      <div className="Links">
                        <a href="" target="_blank">About Us</a>
                      </div>
                      <div className="Links">
                      <a href="" target="_blank">Blogs</a>
                        </div>
                      <div className="Links">
                        <a href="" target="_blank">News</a>
                        </div >
                      <div className="Links">
                        <a href="" target="_blank">Careers</a>
                        </div>
                      <div className="Links">
                        <a href="" target="_blank">FAQs</a>
                        </div>
                    </div>

                  </div>
                  <div class="grid-item_footer">

                    <div className="footer_Right_content_container">
                      <div className="footer_Right_content_heading1">Our Services</div>
                      {/* <div>
                        <a href="https://care24.co.in/caregivers" target="_blank">
                        Our Caregivers
                        </a>
                        </div> */}
                      <div className="Links">
                        <a href="https://care24.co.in/attendant/" target="_blank">Attendant Services</a>
                      </div>
                      <div className="Links">
                        <a href="https://care24.co.in/nursing/" target="_blank">Nursing Services</a>
                        </div>
                      <div className="Links"><a href="https://care24.co.in/elder-care/" target="_blank">Elderly Care</a>
                      </div>
                      <div className="Links"><a href="https://care24.co.in/cm/doctor-at-home/" target="_blank">Doctor At Home</a>
                      </div>
                      <div className="Links"><a href="https://care24.co.in/physiotherapy/" target="_blank">Physiotherapist</a>
                      </div>
                      <div className="Links"><a href="https://care24.co.in/rehabilitation/" target="_blank">Rehabilitation at Home</a>
                      </div>
                    </div>

                  </div>
                  <div class="grid-item_footer">

                    <div className="footer_Right_content_container">
                      <div className="footer_Right_content_heading1">Location</div>
                      <div>Mumbai</div>
                      <div>Delhi</div>
                      <div>Bangalore</div>
                      <div>Chennai</div>
                      <div>Pune</div>
                      <div>Hyderabad</div>
                      <div>Kolkata</div>
                      <div>Ahmedabad</div>
                    </div>
                  </div>
                  <div class="grid-item_footer">

                    <div className="footer_Right_content_container">
                      <div className="footer_Right_content_heading1">Care for</div>
                      <div>Arthritis</div>
                      <div>Cancer</div>
                      <div>Dementia</div>
                      <div>Diabetes</div>
                      <div>Stroke</div>
                      <div>Alzheimer's disease</div>
                      <div>Cardiovascular disease</div>
                      <div>Traumatic brain injury</div>
                      <div>Parkinson's disease</div>
                    </div>
                  </div>
                  <div class="grid-item_footer">

                    <div className="footer_Right_content_container">
                      <div className="footer_Right_content_heading1">Helpful Links</div>
                      <div className="Links">
                        <a href="https://care24.co.in/company/terms-conditions/" target="_blank">Terms & Conditions</a>
                        </div>
                      <div className="Links">
                        <a href="https://care24.co.in/company/privacy/" target="_blank">Privacy Policy</a>
                        </div>
                      <div className="Links">
                        <a href="https://care24.co.in/company/payment-policy/" target="_blank">Payment Policy</a>
                        </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            <hr className="footer_horizontal_line text-light" />
            <div className="d-flex justify-content-between">
              <div className="terms">Terms and conditions</div>
              <div className="rights_reserved">© 2023 Care24 Pvt Ltd. All rights reserved</div>
            </div>
          </div>



        </div>



      </footer>
    </>
  )
}

export default FooterSection