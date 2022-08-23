import React from "react";
import icon from "../img/Icon.png";

export default function Card() {
  return (
    <div className="Business__info">
      <div className="Business__about">
        <p className="Business__name">Boluwatife</p>
        <p className="Business__role">Front End Developer</p>
        <a
          href="https://portfoliodoc.netlify.app/"
          className="Business__portfolio"
          target="_blank"
        >
          Website
        </a>
        <div className="Business__button">
          <a
            href="mailto:enitanboluwatife5@gmail.com"
            className="Business__link"
          >
            {" "}
            <img src={icon} alt="" className="mail" />
            Email
          </a>
        </div>
      </div>
      <div className="Business__goal">
        <div className="Business__aim">
          <p className="Business__title">About</p>
          <p className="Business__text">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className="Business__aim">
          <p className="Business__title">Interests</p>
          <p className="Business__text">
            Food junkie. Music lover. Reader. Internet fanatic. Song writing.
            Entrepreneur. Travel geek. Gaming(football games mostly). Football.
          </p>
        </div>
      </div>
    </div>
  );
}
