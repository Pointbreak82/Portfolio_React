import React from "react";
import "./Experience.css";
import { experience } from "../../data/portfolio";
import ReactMarkdown from "react-markdown";
const Experience = () => {
  const { title, experiences } = experience;
  return (
    <section className="experience" id="experience">
      <h1>{title}</h1>
      <div className="experience-container-grid">
        {experiences.map((experience, index) => (
          <article className="experience-card" key={index}>
            <div className="job-title-duration-section">
              <h2 className="job-title">
                {experience.title} - <span>{experience.company}</span>
              </h2>
              <p className="duration">{experience.duration}</p>
            </div>
            <ReactMarkdown className="experience-description">
              <ul>
              <li>{experience.description[0]}</li>
               <li> {experience.description[1]}</li>
                <li>{experience.description[2]}</li>
                <li>{experience.description[3]}</li>
                </ul>
            </ReactMarkdown>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
