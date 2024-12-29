import React, { useMemo, useReducer, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import FeaturedProjects from '../components/FeaturedProjects';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutMeSection from '../components/Aboutme';
import { projects, uxProjects, graphicProjects, skills, testimonials } from '../data/data';

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const initialState = {
  featuredProject: null,
  uxProject: null,
  graphicProject: null,
  skills: [],
  testimonials: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      return { ...state, ...action.payload };
    case 'SET_SKILLS':
      return { ...state, skills: action.payload };
    case 'SET_TESTIMONIALS':
      return { ...state, testimonials: action.payload };
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const loadData = async () => {
      const selectedProjects = {
        featuredProject: shuffleArray(projects)[0],
        uxProject: shuffleArray(uxProjects)[0],
        graphicProject: shuffleArray(graphicProjects)[0],
      };

      const selectedSkills = [...skills].sort((a, b) => b.percent - a.percent).slice(0, 4);
      const selectedTestimonials = shuffleArray(testimonials).slice(0, 4);

      dispatch({
        type: 'SET_PROJECTS',
        payload: selectedProjects,
      });

      dispatch({
        type: 'SET_SKILLS',
        payload: selectedSkills,
      });

      dispatch({
        type: 'SET_TESTIMONIALS',
        payload: selectedTestimonials,
      });
    };

    loadData();
  }, []);

  const { featuredProject, uxProject, graphicProject, skills: selectedSkills, testimonials: selectedTestimonials } = state;

  return (
    <div>
      <HeroSection />
      {featuredProject && <FeaturedProjects featuredProjects={[featuredProject, uxProject, graphicProject]} />}
      <AboutMeSection />
      {selectedSkills.length > 0 && <SkillsSection skills={selectedSkills} />}
      {selectedTestimonials.length > 0 && <TestimonialsSection testimonials={selectedTestimonials} />}
    </div>
  );
};

export default Home;
