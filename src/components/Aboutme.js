import React from 'react';
import './Aboutme.css'; // Import custom CSS if needed

const AboutMeSection = () => {
  return (
    <div className="about-me-section">
      <h2 className="section-heading text-white">About Me</h2>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="about-me-card">
              <h3>About Me</h3>
              <p>
                I am a passionate web developer with a strong background in
                creating interactive, user-friendly websites. I specialize in
                HTML  , CSS  , and JavaScript  , with a particular interest
                in React.js  . I’m always eager to learn new frameworks and
                tools to keep improving my skills and delivering modern web
                solutions.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="hobbies-card">
              <h3>Hobbies</h3>
              <p>
                In my free time, I enjoy experimenting with graphic design  ,
                exploring creative projects through tools like Adobe Photoshop  
                and Illustrator  . I'm also passionate about photography and
                outdoor activities like hiking and traveling, which inspire my
                designs and projects.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="interests-card">
              <h3>Interests</h3>
              <p>
                I have a deep interest in UX design  , ensuring that digital
                products are both visually appealing and easy to use. I focus on
                crafting intuitive interfaces, conducting user research, and
                applying design principles to create seamless user experiences.
                Additionally, I’m always exploring the latest trends in web
                technologies and user-centered design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
