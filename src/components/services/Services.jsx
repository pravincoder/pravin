import React from "react";
import "./Services.css";
import {FaCheck} from "react-icons/fa";
import {FaCalendarAlt} from "react-icons/fa";
import {FaBriefcase} from "react-icons/fa";
export const Services = () => {
  return (
    <section id="services">
      <h5>My Work Experience</h5>
      <h2>Work & roles</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>Suvidha Foundation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FaCalendarAlt className="service__list-icon" />
              <p>Dec 2022 - Jan 2023</p>
            </li>
            <li>
              <FaBriefcase className="service__list-icon" />
              <p>Machine learning Intern</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Train & Test Basic NLP Models</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Created A Review's Sentiment Analysis(RSA) Model</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Future Easy</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FaCalendarAlt className="service__list-icon" />
              <p>Aug 2023 - Nov 2023</p>
            </li>
            <li>
              <FaBriefcase className="service__list-icon" />
              <p>Machine learning Intern(LLM's)</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Tested on various Large Language Models(LLM's)</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Fine-tuning Large Language Models</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Google Student Developer Club(GDSC)</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FaCalendarAlt className="service__list-icon" />
              <p>March 2023 - June 2024</p>
            </li>
            <li>
              <FaBriefcase className="service__list-icon" />
              <p>Machine learning Head</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Mentor Student's in ML</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Building a ML Community</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Services;
