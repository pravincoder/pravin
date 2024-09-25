import React from "react";
import "./About.css";
import About_img from "../../assets/my_profile.jpg";
import { FaAward } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { VscFolderLibrary } from "react-icons/vsc";
export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={About_img} alt="ABOUT_ME" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about__card">
              <HiUserGroup className="about__icon" />
              <h5>Internships</h5>

              <small>1+ Internships ,
                500+Connections</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Project</small>
            </article>
          </div>
          <p>
            I am a Python geek with solid knowledge of a range of frameworks and
            modules, as well as good understanding of fundamental javascript
            with react . I am keen to learn and collaborate on real-world
            problems while having fun. I appreciate talking about emerging
            technologies, entrepreneurship, open source, new languages, and
            other topics.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
