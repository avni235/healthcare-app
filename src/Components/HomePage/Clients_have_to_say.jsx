import React from "react";
import '../../All_Styles/Clients_have_to_say.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import Testimonial_Blob from '../../assets/Images/Testimonial_Blob.png'
import client_1 from '../../assets/Images/client_1.png'
import qout1 from '../../assets/Images/qout1.png'
import qout2 from '../../assets/Images/qout2.png'
import qout3 from '../../assets/Images/qout3.png'
import Slider from "react-slick";




// Add the desired icons to the library
library.add(fas);


const Clients_have_to_say = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };





  return (
    <>



        <div className="Flex_container_client px-5">
          <div className="Hear_what py-4">Hear What Our Clients Have to Say</div>
        </div>

        <div className="clients_cards_main_container mt-5 px-5 m-5">
  <div className="clients_cards_flex_container flex flex-col md:flex-row">
    {/* Card 1 */}
    <div className="mx-3 mb-5 md:mb-0 w-full md:w-auto">
      <div className="image-container_clients_have_to_say relative">
        <img src={Testimonial_Blob} alt="Testimonial_Blob" className="w-full" />
        <div className="overlay_clients_have_to_say absolute inset-0 flex items-center justify-center bg-opacity-50">
          <div className="clients_have_to_say_content p-4">
            Needed an attendant for a week for post-surgical assistance (ward boy type work). The person allocated was punctual, polite, and generally did the job well. Quite happy with the services provided.
          </div>
        </div>
        <div className="overlay_clients_have_to_say_img absolute bottom-4 left-4">
          <img src={client_1} alt="client-1" className="rounded-full" />
        </div>
        <div className="overlay_clients_have_to_say_icon absolute top-4 right-4">
          <img src={qout1} alt="qout1" />
        </div>
        <div className="overlay_clients_have_to_say_name absolute bottom-4 right-4 text-right">
          <div className="client_name">Swati Saxena</div>
          <div className="client_location">Mumbai</div>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="mx-3 mb-5 md:mb-0 w-full md:w-auto">
      <div className="image-container_clients_have_to_say relative">
        <img src={Testimonial_Blob} alt="Testimonial_Blob" className="w-full" />
        <div className="overlay_clients_have_to_say absolute inset-0 flex items-center justify-center bg-opacity-50">
          <div className="clients_have_to_say_content p-4">
            Needed an attendant for a week for post-surgical assistance (ward boy type work). The person allocated was punctual, polite, and generally did the job well. Quite happy with the services provided.
          </div>
        </div>
        <div className="overlay_clients_have_to_say_img absolute bottom-4 left-4">
          <img src={client_1} alt="client-1" className="rounded-full" />
        </div>
        <div className="overlay_clients_have_to_say_icon absolute top-4 right-4">
          <img src={qout2} alt="qout1" />
        </div>
        <div className="overlay_clients_have_to_say_name absolute bottom-4 right-4 text-right">
          <div className="client_name" style={{ color: '#A6B72E' }}>Swati Saxena</div>
          <div className="client_location">Mumbai</div>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="mx-3 mb-5 md:mb-0 w-full md:w-auto">
      <div className="image-container_clients_have_to_say relative">
        <img src={Testimonial_Blob} alt="Testimonial_Blob" className="w-full" />
        <div className="overlay_clients_have_to_say absolute inset-0 flex items-center justify-center bg-opacity-50">
          <div className="clients_have_to_say_content p-4">
            Needed an attendant for a week for post-surgical assistance (ward boy type work). The person allocated was punctual, polite, and generally did the job well. Quite happy with the services provided.
          </div>
        </div>
        <div className="overlay_clients_have_to_say_img absolute bottom-4 left-4">
          <img src={client_1} alt="client-1" className="rounded-full" />
        </div>
        <div className="overlay_clients_have_to_say_icon absolute top-4 right-4">
          <img src={qout3} alt="qout1" />
        </div>
        <div className="overlay_clients_have_to_say_name absolute bottom-4 right-4 text-right">
          <div className="client_name" style={{ color: '#CC8600' }}>Swati Saxena</div>
          <div className="client_location">Mumbai</div>
        </div>
      </div>
    </div>
  </div>

  {/* Fourth Card */}
  <div className="Third_card1 mt-5 mx-auto w-full md:w-auto flex justify-center">
    <div className="image-container_clients_have_to_say relative">
      <img src={Testimonial_Blob} alt="Testimonial_Blob" className="w-full" />
      <div className="overlay_clients_have_to_say absolute inset-0 flex items-center justify-center bg-opacity-50">
        <div className="clients_have_to_say_content p-4">
          Needed an attendant for a week for post-surgical assistance (ward boy type work). The person allocated was punctual, polite, and generally did the job well. Quite happy with the services provided.
        </div>
      </div>
      <div className="overlay_clients_have_to_say_img absolute bottom-4 left-4">
        <img src={client_1} alt="client-1" className="rounded-full" />
      </div>
      <div className="overlay_clients_have_to_say_icon absolute top-4 right-4">
        <img src={qout1} alt="qout1" />
      </div>
      <div className="overlay_clients_have_to_say_name absolute bottom-4 right-4 text-right">
        <div className="client_name">Swati Saxena</div>
        <div className="client_location">Mumbai</div>
      </div>
    </div>
  </div>
</div>

          
          







        



    
    </>
  )
}

export default Clients_have_to_say