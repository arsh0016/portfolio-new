import React from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import FeaturedProjects from '../components/FeaturedProjects';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutMeSection from '../components/Aboutme';

import portfolioImage from '../assets/images/pro1.PNG';
import ecommerceImage from '../assets/images/pro2.PNG';
import socialMediaImage from '../assets/images/pro3.PNG';

const Home = () => {
  const skills = [
    { name: "JavaScript", percent: 70 },
    { name: "React", percent: 80 },
    { name: "CSS", percent: 85 },
    { name: "Node.js", percent: 75 },
  ];

  const testimonials = [
    {
      text: "Their professionalism and creativity truly stand out. They understood our needs and delivered beyond expectations.",
      author: "Liam O'Connor",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
      text: "Working with them was an amazing experience. They captured the essence of my project and brought it to life in ways I didn't expect.",
      author: "Ava Green",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg"
    },
    {
      text: "A pleasure to work with! They are highly skilled and always ready to take on new challenges with enthusiasm.",
      author: "Noah Harris",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      text: "Their attention to detail and commitment to quality is unmatched. They made our project a success with their expert work.",
      author: "Sophia Lee",
      avatar: "https://randomuser.me/api/portraits/women/20.jpg"
    }
    
  ];
  
  const featuredProjects = [
    {
      id: 1,
      title: 'THE ARTHOUSE',
      description: 'An immersive website designed to highlight artistic creations and design projects. Built with Vue.js and Tailwind CSS for a sleek, modern look.',
      image: portfolioImage,
      link: '/project/1',
    },    
    {
      id: 2,
      title: 'CAPSTONE PROJECT',
      description: 'On our Capstone website, we showcase the Astronomy Picture of the Day (APOD). In addition to this, we also feature top stories related to astronomy. This allows users to stay updated with the latest developments and discoveries in the field of astronomy, while enjoying stunning space images.',
      image: ecommerceImage,
      link: '/project/2',
    },
    {
      id: 3,
      title: 'GALLERY',
      description: 'I have created a gallery website where users can view pictures from the last 9 days. It is related to the Astronomy Picture of the Day (APOD), allowing visitors to explore images from the past 10 days of APOD.',
  
      image: socialMediaImage,
      link: '/project/3',
    },
  ];

  return (
    <div>
      <HeroSection />
      <FeaturedProjects featuredProjects={featuredProjects} />
      <AboutMeSection />
      <SkillsSection skills={skills} />
      <TestimonialsSection testimonials={testimonials} /> 
   
    </div>
  );
};

export default Home;
