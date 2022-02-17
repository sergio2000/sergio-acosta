import React from "react";
import Footer from "./footer/Footer";
import Typical from "react-typical";
import Card from "./card/card";
import data from "./card/data";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home() {
  return (
    <div className="home">
      <div className="home-top">
        <img></img>
        <h1> Hello... </h1>
        <p>My name is Sergio Acosta!</p>
        <p>
          I'm a{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={["developer", 1000, "student", 1000]}
          />
        </p>
      </div>

      <div className="about">
        <h1>About Me</h1>
        <img></img>
        <p>
          Hello, welcome to my page! My name is Sergio Acosta and I am a current
          student at
          <a className="school" href="https://www.csusm.edu/">
            {" "}
            California State University San Marcos
          </a>
          . I am currently majoring in Computer Science & Information Systems
          and plan to finish my degree very soon. My dream career is to work as
          a software engineer. I really enjoying coding because I get to
          challenge myself to solve complex problems and have fun while doing
          it. I love being able to help others, so i hope that I can accomplish
          that wherever I bring my skills.
        </p>
      </div>
      <div className="projects">
        <dl>
          {data.map((languageData) => (
            <Card
              language={languageData.language}
              icon={languageData.icon}
              description={languageData.description}
            />
          ))}
        </dl>
      </div>

      <div className="home-middle">
        <div className="links">
          <p>Looking to get in touch?</p>
          <a href="https://github.com/sergio2000">
            <GoMarkGithub size="3rem" color="#2F5D62" />
          </a>
          <a href="https://www.linkedin.com/in/sergioacosta16/">
            <FaLinkedin size="3rem" color="#2F5D62" />
          </a>
          <a href="https://github.com/sergio2000">
            <FaTwitter size="3rem" color="#2F5D62" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:sergioacosta184@gmail.com"
          >
            <SiGmail size="3rem" color="#2F5D62" />
          </a>
        </div>
      </div>
      <div className="home-middle2"></div>
      <Footer />
    </div>
  );
}

export default Home;
