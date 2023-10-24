import {
  backend,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  meta,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  tripguide,
  typescript,
  web,
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "INTERN",
      company_name: "Aptec Computer school | Abuja , Nigeria",
      icon: html,
      iconBg: "#383E56",
      date: "sept 2019 - feb 2020",
      points: [
        "Mapped my fellow intern's journey and course outline using html/css as a website to reflect on courses taken & track our level of experience.",
      "also gained insights into the software development process.",
      
      ],
    },
    {
      title: "INTERN",
      company_name: "Dialogue Computer Institute | Kaduna , Nigeria",
      icon: javascript,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - june 2021",
      points: [


       "During my intern at DCI i gained valuable hands on experience in the field of web development i had the opportunity to work with a team of experienced developers and contributed to real-world projects",

        "Developing and maintaining web applications using javascripts  &          typscripts and other related technologies.",
      "Gained exposure to web frameworks and libraries.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelance",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Nov 2021 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
       
        "Implementing responsive design and ensuring cross-browser compatibility for clients.",

        "Participating in code reviews and providing constructive feedback to other developers on twitter.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "NASARAWA STATE UNIVERSITY",
      icon: nodejs,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
       "Joined a team of 5 to develop a web site for the University to create & maintain a delightful user experience for 10k + visitors. ",

       "Design a well-polished wordpress web site which i personally maintain and upload news content for the the university.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but JAY proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like JAY does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After JAY optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "System Builders",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Javacript",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/devwithjay/systembuilders.ltd.git",
    },
    {
      name: "GPT-3",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/devwithjay/gpt-3.git",
    },
    {
      name: "WeatherAPP",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/devwithjay/WeatherAPP.git",
    },
  ];
  
  export { experiences, projects, services, technologies, testimonials };

