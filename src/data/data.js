// Import images for the projects
import g1 from '../assets/images/g1.jpg';
import g2 from '../assets/images/g2.jpg';
import g3 from '../assets/images/g3.jpg';
import logo from '../assets/images/logo.png';

import ux1 from '../assets/images/ux1.jpg';
import ux2 from '../assets/images/ux2.jpg';
import ux3 from '../assets/images/ux3.jpg';

import portfolioImage from '../assets/images/pro1.PNG';
import ecommerceImage from '../assets/images/pro2.PNG';
import socialMediaImage from '../assets/images/pro3.PNG';

// Skills data
export const skills = [ 
  { name: "JavaScript", percent: 70 },
  { name: "React", percent: 80 },
  { name: "CSS", percent: 85 },
  { name: "Node.js", percent: 75 },
];

// Testimonials data
export const testimonials = [
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

// Projects data
export const projects = [
  {
    id: 1,
    title: 'THE ARTHOUSE',
    description: 'An immersive website designed to highlight artistic creations and design projects. Built with Vue.js and Tailwind CSS for a sleek, modern look.',
    image: portfolioImage,
    link: 'project/1',
  },
  {
    id: 2,
    title: 'CAPSTONE PROJECT',
    description: 'On our Capstone website, we showcase the Astronomy Picture of the Day (APOD). In addition to this, we also feature top stories related to astronomy.',
    image: ecommerceImage,
    link: 'project/2',
  },
  {
    id: 3,
    title: 'GALLERY',
    description: 'A gallery website where users can view pictures from the last 9 days, showcasing Astronomy Picture of the Day (APOD).',
    image: socialMediaImage,
    link: 'project/3',
  },
];

// Graphic Projects data
export const graphicProjects = [
  {
    id: 7,
    title: 'Graphic Design One',
    description: 'A modern showcase of artistic excellence, blending creativity with clean and innovative design to deliver a visually stunning experience.',
    image: g1,
    link: 'project/7',
  },
  {
    id: 8,
    title: 'Graphic Design Two',
    description: 'An elegant design project combining bold visuals and seamless navigation, tailored for a professional yet artistic audience.',
    image: g2,
    link: 'project/8',
  },
  {
    id: 9,
    title: 'Graphic Design Three',
    description: 'A project crafted to highlight creativity and precision in graphic design.',
    image: g3,
    link: 'project/9',
  },
  {
    id: 13,
    title: 'logo',
    description: 'A project crafted to highlight creativity and precision in graphic design.',
    image: logo,
    link: 'project/13',
  },
];

// UX Projects data
export const uxProjects = [
  {
    id: 10,
    title: 'UX Project One',
    description: 'Focused on enhancing user experiences through thoughtful wireframes and prototypes, showcasing functionality and user-centered design.',
    image: ux1,
    link: 'project/10',
  },
  {
    id: 11,
    title: 'UX Project Two',
    description: 'Delivering seamless user interfaces and intuitive workflows to improve user satisfaction in digital applications.',
    image: ux2,
    link: 'project/11',
  },
  {
    id: 12,
    title: 'UX Project Three',
    description: 'A collaborative UX design project combining usability research and modern design principles.',
    image: ux3,
    link: 'project/12',
  },
];
