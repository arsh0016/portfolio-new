import React from 'react';
import SkillsSection from './SkillsSection'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './About.css'; 

const About = ({ skills, backgroundText, hobbiesText, visionText }) => {
  return (
    <div className="about-container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4  section-heading text-white">About Me</h1>
          <p className="lead text-white subtitle">
  Hello! I'm a passionate web developer dedicated to bringing creative ideas to life through seamless, interactive digital experiences. 
  Whether it's building intuitive user interfaces, crafting responsive designs, or optimizing performance, I love turning concepts into functional, engaging websites.
</p>

          <hr className="separator" />
        </div>
      </div>

      <section className="background-section mb-5">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Background</h2>
            <p className="section-text">{backgroundText}</p>
          </div>
        </div>
      </section>

      <section className="skills-section mb-5">
        <div className="row">
          <div className="col-12">

            <SkillsSection skills={skills} />
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;
