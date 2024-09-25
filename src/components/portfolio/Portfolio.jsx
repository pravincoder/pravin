import React from "react";
import "./portfolio.css";
import IMG2 from "../../assets/tf.png";
import IMG3 from "../../assets/agents.png"
import IMG4 from "../../assets/llm.png"
export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Artifical Agent Systems</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com/pravincoder/Stock_investment_Analysis_Crew" className="btn">
              Github
            </a>
            <a href="https://youtu.be/V_CisIPGA-g?si=e08MTOXONlbuYLa-" className="btn btn-primary">
              Demo Video
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Tensorflow IMG" />
          </div>
          <h3>Tensorflow Vision (Sign Language)</h3>
          <div className="portfolio-item-cta">
            <a href="https://drive.google.com/file/d/1fF8srWvb_FsjixAm7deg3iQQ9fCYv65X/view" className="btn btn-primary">
              Demo Video-1
            </a>
            <a href="https://drive.google.com/file/d/1f-cj7QS6AQ8YDI1dqhkQNBvvPiY8FmvD/view" className="btn btn-primary">
              Demo-2
            </a>
          </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Large Language Models</h3>
          <div className="portfolio-item-cta">
            <a href="https://huggingface.co/Pravincoder/Pythia-legal-finetuned-llm" className="btn btn-primary">
              Legal Finetuned Model 
            </a>
            <a href="https://colab.research.google.com/drive/1JMLa53HDuA-i7ZBmqV7ZnA3c_fvtXnx-?usp=sharing" className="btn btn-primary">
              Nano-Gpt 
            </a>
          </div>
          <div> 
            <a href="https://huggingface.co/Pravincoder/pythia-Medical_model" className="btn btn-primary">
              Medical Finetuned Model 
          </a>
          </div>
        </article>
        
      </div>
    </section>
  );
};
export default Portfolio;
