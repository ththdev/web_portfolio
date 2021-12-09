import { Text } from "@mantine/core";
import React from "react";
import Facebook from "../images/facebook-logo.png";
import Kakaotalk from "../images/kakaotalk-logo.png";
import Instagram from "../images/instagram-logo.jpg";
import Email from "../images/email-logo.svg";

function ContactPage() {
  return (
    <div className="contact-wrapper">
      <Text style={{ fontSize: 32 }}>연락처</Text>
      <a href="https://www.facebook.com/profile.php?id=100004700710917">
        <img src={Facebook} alt="facebook" />
      </a>
      <a href="https://www.instagram.com/thth_ooo/">
        <img src={Instagram} alt="instagram" />
      </a>
      <a href="https://open.kakao.com/o/sTCYGY8c">
        <img src={Kakaotalk} alt="kakaotalk" />
      </a>
      <a href="mailto:dooboocs@gmail.com">
        <img src={Email} alt="email" />
      </a>
    </div>
  );
}

export default ContactPage;
