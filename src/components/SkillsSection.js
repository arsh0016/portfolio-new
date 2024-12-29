import React, { useState, useEffect } from 'react';
import './SkillsSection.css';

const SkillsSection = ({ skills }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [progressWidth, setProgressWidth] = useState({}); 

  useEffect(() => {
    const initialProgress = skills.reduce((acc, skill) => {
      acc[skill.name] = skill.percent; 
      return acc;
    }, {});
    setProgressWidth(initialProgress);
  }, [skills]);

  const handleMouseEnter = (skillName) => {
    setHoveredSkill(skillName);

    setProgressWidth((prev) => ({
      ...prev,
      [skillName]: 0,
    }));

    setTimeout(() => {
      setProgressWidth((prev) => ({
        ...prev,
        [skillName]: skills.find(skill => skill.name === skillName).percent,
      }));
    }, 100); 
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 section-heading text-white">My Skills</h2>
      <div className="row">
        {skills.map((skill) => {
          const isJavaScriptOrReact = skill.name === "JavaScript" || skill.name === "React";
          return (
            <div key={skill.name} className={`col-md-6 col-sm-12 mb-4 ${isJavaScriptOrReact ? 'd-inline-block' : ''}`}>
              <div
                className="skill-card p-3 shadow-sm"
                onMouseEnter={() => handleMouseEnter(skill.name)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="skill-name mb-0">{skill.name}</h5>
                  <span className="skill-percentage">{skill.percent}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${progressWidth[skill.name] || skill.percent}%`, // Default to the skill's percentage
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
