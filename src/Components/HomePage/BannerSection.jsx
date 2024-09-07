import React, { useState, useEffect } from "react";
import '../../All_Styles/BannerSection.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import care1_overlay from '../../assets/Images/care1_overlay.png'
import care2_overlay from '../../assets/Images/care2_overlay.jpeg'
import axios from 'axios';

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

  // Modal



  // const [Header_title1, setHeader_title1] = useState()

  const [data, setData] = useState(null);

  useEffect(() => {


    const fetchData = async () => {
      try {
        const response = await axios.get(
          // 'https://admin.care24.co.in/c24web/content?name=page1'
          `https://admin.care24.co.in/c24web/content?name=${props.Param}`
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching API:', error);
      }
    };

    fetchData();
  }, []);

  // console.log(props.Param)

  // if (data === null) {
  //   console.log('data is loading...')
  // }
  // else {
  //   console.log(data.data.link_name)
  // }
  // console.log(data.data.link_name)
  // console.log(data.data.pg_content.pg_content.pg_hdr[0].title.title_1)
  // console.log(data.data.pg_content.pg_content.pg_hdr[0].content)



  // Scrolling effect start

  const scrollToTop = () => {
    scroll.scrollToTop();
    PhoneCall()

  };

  
  // Scrolling effect end


  // toast start

  const PhoneCall = () => {
    toast.info('CLICK ON PHONE/ICON ABOVE'); // Display a success toast
  };
  const FormFill = () => {
    toast.info('FILL THE FORM'); // Display a success toast
  };

  // toast end






  return (
    <>

<ToastContainer />

      <div className="Max_width80 myMT ">
        <div className="BannerSection_container py-5">
          <div className="container">
            <div className="Content_container">
              <div className="rating_container">
                
              </div>

              <div className="get_reliable_container mt-4">
                {
                  (data === null) ?
                  <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
                    :

                    <div className="get_reliable" id={(data.data.pg_content.pg_name==='page2'? 'get_reliable2': "get_reliable")}>
                      {(data.data.pg_content.pg_name === 'page1' || data.data.pg_content.pg_name === 'page2') ?
                       
                        data?.data?.pg_content?.pg_content?.pg_hdr[0]?.title?.title_1 || data?.data?.pg_content?.pg_content?.pg_hdr[0]?.title
                        :
                        null
                      }

                    </div>


                }
              </div>

              <div className="Quality_container">

                {
                  (data === null) ?
                  <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
                    :

                    <div className="Quality">
                      {(data.data.pg_content.pg_name === 'page1' || data.data.pg_content.pg_name === 'page2') ?
                        data.data.pg_content.pg_content.pg_hdr[0].title.title_2
                        :
                        null
                      }
                    </div>
                }

              </div>

              <div className="doorstep_container">

                {

                  (data === null) ?
                  <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
                    :

                    (data.data.pg_content.pg_name === 'page1' || data.data.pg_content.pg_name === 'page2') ?
                      <div className="doorstep">
                        at your doorstep
                      </div>
                      :
                      null
                }



              </div>

              <div className="care_description_container">

              {
                  (data === null) ?
                  <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
                    :

                    <div className="care_description">
                {(data.data.pg_content.pg_name === 'page1' || data.data.pg_content.pg_name === 'page2') ?
                        data.data.pg_content.pg_content.pg_hdr[0].content
                        :
                        null
                      }
                </div>
                }


              </div>

              <div className="buttons_container">
                
                <Link to={props.id} smooth={true} duration={500} className="Desktop_ON">
                <button type="button" className="btn btn-success px-4 py-3" onClick={FormFill}>Request a callback</button>
                </Link>

              </div>

            </div>
            <div className="img_container">
              
              <div className="image_container_bannerSection">


{
                  (data === null) ?
                  <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
                    :

                    (data.data.pg_content.pg_name === 'page1')?
                
                    <img src={care1_overlay} alt="care1_img" />
                    :
            
                <img src={care2_overlay} alt="care2_img" />


                }
              



                {/* <div class="overlay_bannerSection">
                 <img src={BannerSection_img} alt="bannerSection_img" />
                </div> */}
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
            <Form/>
          </Modal.Body>
          <Modal.Footer>
            {/* <button onClick={() => setShowModal(false)}>Close</button> */}
          </Modal.Footer>
        </Modal>



      </div>
    </>
  )
}

export default BannerSection