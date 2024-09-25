import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
export const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills That I Have</h5>
      <h2>My Learnings</h2>

      <div className="container experience__container">
        <div className="experience__ai">
          <h3>Machine Learning and AI </h3>
          
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>NLP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Computer Vision</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Deep Learning</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Reinforcement Learning</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3> Generative AI/LLMs</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Local LLMs</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Fine-tune LLMs</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Multi-Agents</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Nano-GPT</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>RAG(Retieval Augment Generation)</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
          <h3> Data Analytics and Preprocessing</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Pandas</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Numpy</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Matplotlib</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Seaborn</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Power BI</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
