import React from "react";
import TopHeader from "./Components/HomePage/TopHeader";
import BannerSection from "./Components/HomePage/BannerSection";
import Search_Form from "./Components/HomePage/Search_Form";
import Clients_have_to_say from "./Components/HomePage/Clients_have_to_say";
import AboutUS from "./Components/HomePage/AboutUS";
//import Get_in_touch from "./Components/HomePage/Get_in_touch";
import FooterSection from "./Components/HomePage/FooterSection";
import { useParams } from 'react-router-dom';

const Main_component = () => {

  // scrolling id start and passing in comp

  let Scroll_ID ='Scroll'

  // scrolling id end

  let { userId } = useParams();

  if (userId === undefined) {
    userId="page1"

  }

  else {
    userId 
  }

  // console.log(userId)

  return (
    <>
      <TopHeader />
      <BannerSection Param={userId} id={Scroll_ID}/>
      {/* <Features/> */}
      <AboutUS />
      <Search_Form id={Scroll_ID}/>
      <Clients_have_to_say/>
      <FooterSection/>
      {/* <Checking/> */}
    </>
  )
}

export default Main_component