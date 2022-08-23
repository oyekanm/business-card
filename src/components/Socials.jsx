import React from "react";
import Twitter from "../img/Twitter Icon.png";
import Instagram from "../img/Instagram Icon.png";
import Facebook from "../img/Facebook Icon.png";
import Github from "../img/GitHub Icon.png";
import Linkedin from "../img/Linkedin Icon.png";

export default function Socials() {
  return (
    <div className="social">
      <div className="social__media">
        <a href="https://twitter.com/Zayb_" target="_blank" rel="noreferrer">
          <img src={Twitter} alt="social media" />
        </a>
      </div>
      <div className="social__media">
        <a
          href="https://web.facebook.com/boluwatife.oyekanmi.94"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Facebook} alt="social media" />
        </a>
      </div>
      <div className="social__media">
        <a>
          <img src={Instagram} alt="social media" />
        </a>
      </div>
      <div className="social__media">
        <a
          href="https://www.linkedin.com/in/oyekanmi-boluwatife-1b3329226/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="social media" />
        </a>
      </div>
      <div className="social__media">
        <a href="https://github.com/oyekanm" target="_blank" rel="noreferrer">
          <img src={Github} alt="social media" />
        </a>
      </div>
    </div>
  );
}
