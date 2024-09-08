import React, { useState, useEffect } from "react";
import '../../All_Styles/BannerSection.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import care1_overlay from '../../assets/Images/care1_overlay.png';
import care2_overlay from '../../assets/Images/care2_overlay.jpeg';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, animateScroll as scroll } from "react-scroll";
import { Modal } from 'react-bootstrap';
import Form from "./Form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Add the desired icons to the library
library.add(fas);

const BannerSection = (props) => {
  // Modal
  const [showModal, setShowModal] = useState(false);

  // Data fetching removed. You can use static content or other methods if needed.
  const [data, setData] = useState({
    pg_content: {
      pg_name: 'page1',
      pg_content: {
        pg_hdr: [
          {
            title: {
              title_1: "Reliable Care",
              title_2: "Quality Care at Your Doorstep",
            },
            content: "We provide professional and reliable care services.",
          },
        ],
      },
    },
  });

  // Scrolling effect
  const scrollToTop = () => {
    scroll.scrollToTop();
    PhoneCall();
  };

  // Toast notifications
  const PhoneCall = () => {
    toast.info('CLICK ON PHONE/ICON ABOVE');
  };
  const FormFill = () => {
    toast.info('FILL THE FORM');
  };

  return (
    <>
      <ToastContainer />
      <div className="Max_width80 myMT ">
        <div className="BannerSection_container py-5">
          <div className="container">
            <div className="Content_container">
              <div className="rating_container"></div>

              <div className="get_reliable_container mt-4">
                <div className="get_reliable" id={(data.pg_content.pg_name === 'page2' ? 'get_reliable2' : "get_reliable")}>
                  {(data.pg_content.pg_name === 'page1' || data.pg_content.pg_name === 'page2') &&
                    (data.pg_content.pg_content.pg_hdr[0].title.title_1 || data.pg_content.pg_content.pg_hdr[0].title)}
                </div>
              </div>

              <div className="Quality_container">
                <div className="Quality">
                  {(data.pg_content.pg_name === 'page1' || data.pg_content.pg_name === 'page2') &&
                    data.pg_content.pg_content.pg_hdr[0].title.title_2}
                </div>
              </div>

              <div className="doorstep_container">
                {(data.pg_content.pg_name === 'page1' || data.pg_content.pg_name === 'page2') && (
                  <div className="doorstep">at your doorstep</div>
                )}
              </div>

              <div className="care_description_container">
                <div className="care_description">
                  {(data.pg_content.pg_name === 'page1' || data.pg_content.pg_name === 'page2') &&
                    data.pg_content.pg_content.pg_hdr[0].content}
                </div>
              </div>

              <div className="buttons_container">
                <Link to={props.id} smooth={true} duration={500} className="Desktop_ON">
                  <button type="button" className="btn btn-success px-4 py-3" onClick={FormFill}>
                    Request a callback
                  </button>
                </Link>
              </div>
            </div>

            <div className="img_container">
              <div className="image_container_bannerSection">
                {data.pg_content.pg_name === 'page1' ? (
                  <img src={care1_overlay} alt="care1_img" />
                ) : (
                  <img src={care2_overlay} alt="care2_img" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modal start */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default BannerSection;
