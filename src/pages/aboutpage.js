import React, { useMemo, useState, useEffect } from 'react';
import About from '../components/About';

const AboutPage = () => {
  const [skillsList, setSkillsList] = useState([
    { name: 'HTML5', level: 'Expert', percent: 90 },
    { name: 'CSS3', level: 'Advanced', percent: 85 },
    { name: 'JavaScript', level: 'Advanced', percent: 80 },
    { name: 'React', level: 'Intermediate', percent: 75 },
    { name: 'Graphic Design', level: 'Advanced', percent: 80 },
    { name: 'UX Design', level: 'Advanced', percent: 85 },
  ]);

  const backgroundText = useMemo(() => `
    My journey into web development started with a fascination for how websites are built and how they function behind the scenes.
    With a strong foundation in computer science, I began developing websites that were not only functional but also user-centric.
    As I delved deeper into the world of web development, I discovered the importance of design principles and the user experience (UX).
    From building business websites to interactive applications, each project has been an opportunity to improve my technical skills while also embracing creative aspects of graphic design and UX.
  `, []);

  const hobbiesText = useMemo(() => `
    Outside of work, I have a variety of creative and adventurous hobbies. Whether it's exploring new design trends, experimenting with graphic design tools like Photoshop or Illustrator, or hiking to get fresh inspiration, I enjoy activities that balance my technical skills with my creative interests.
    I am also passionate about photography, which allows me to observe and capture visual aesthetics that inform my design approach.
  `, []);

  const visionText = useMemo(() => `
    I believe that web development goes beyond just creating websites—it’s about creating meaningful experiences. By combining my technical expertise in web development with my passion for graphic design and UX design, I aim to build websites and applications that don’t just function but engage users in a memorable way.
    My vision is to contribute to projects that are user-centered, visually appealing, and built with the latest technologies, always with a focus on making the web more accessible and enjoyable for everyone.
  `, []);

  useEffect(() => {
    const sortedSkills = [...skillsList].sort((a, b) => b.percent - a.percent);
    setSkillsList(sortedSkills);
  }, []); 

  return (
    <div className="about-page-container">
      <About
        skills={skillsList}
        backgroundText={backgroundText}
        hobbiesText={hobbiesText}
        visionText={visionText}
      />
    </div>
  );
};

export default AboutPage;
