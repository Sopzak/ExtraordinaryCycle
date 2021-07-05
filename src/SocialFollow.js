import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import './SocialFollow.css'

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Create by Jesiel Sopzak Campos</h3>
      <a href="https://www.youtube.com/c/UCltmGwbi67ESMSejVFIDuyg"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://www.facebook.com/je.sopzak/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/jesopzak"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
    </div>
  );
}