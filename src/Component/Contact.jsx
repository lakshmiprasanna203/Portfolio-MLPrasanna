import React from 'react'

import "./contact.css";
import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";


import { Box, Text,Heading } from '@chakra-ui/react'

const Contact = () => {
  const openLink = (url) => {
    window.open(url);
  };

  return (

    <Box  id = 'contact'  mb="50px">



    <div className="contact-main" id="contact">
      <div className="headingwrapper">
      <Heading mt = '150px' color = '#1A202C' fontSize={35}><Text as = 'span' color = '#1A202C'>Contact Me</Text> </Heading>
        <div className="headingwrapperDiv">
          <div className="headingwrapperDivLeft">
            <img
              src="https://www.genscript.com/gsimages/support/image-contactus.png"
              alt="contactme"
            />
          </div>
          <div className="headingwrapperDivRight">
            <div className="contact-gmail" id="contact-email">
              <SiGmail /> prasannamokara@gmail.com
            </div>
            <div className="contact-number" id="contact-phone">
              <IoMdCall /> +91-6281439385
            </div>
            <div className="contact-location">
              <MdLocationOn /> Vijayawada, Andhra Pradesh
            </div>
            <div className="contact-socialLink">
              <img
                onClick={() => openLink("https://github.com/lakshmiprasanna203")}
                src={"github1.png"}
                alt="About"
                id="contact-github"
              />
              <img
                onClick={() =>
                  openLink("https://www.linkedin.com/in/lakshmi-prasanna-mokara-68a42a31a/")
                }
                src={"linkedin1.png"}
                alt="About"
                id="contact-linkedin"
              />
             {/* <img
               onClick={() =>
                 openLink("")
               }
               src={""}
               alt=""
               id=""
              />  */}
            </div>
          </div>
        </div>
      </div>
    </div>


    </Box>
  )
}

export default Contact