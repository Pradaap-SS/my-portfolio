import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    framermotion,
    oraclecerner,
    cognizant,
    infosys,
    threejs,
    iit,
    vtu,
    linkedln,
    gmail,
    gitHub,
    doc,
    catgpt,
    sumz,
    metaverse,
  } from "../assets";

  const icons = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/pradaap-shobha/',
      iconClass: linkedln,
    },
    {
      name: 'Gmail',
      link: 'mailto:pradaap.shobha@gmail.com',
      iconClass: gmail,
    },
    {
      name: 'GitHub',
      link: 'https://github.com/Pradaap-SS',
      iconClass: gitHub,
    },
    {
      name: 'Resume',
      link: 'https://example.com/your-resume.pdf',
      iconClass: doc,
    },
  ];
  
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "educ",
      title: "Education",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "tech",
      title: "Tech",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Framer Motion",
      icon: framermotion
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer 1",
      company_name: "Oracle Cerner",
      icon: oraclecerner,
      iconBg: "#383E56",
      date: "Apr 2021 - Aug 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Programmer Analyst Trainee",
      company_name: "Cognizant",
      icon: cognizant,
      iconBg: "#E6DEDD",
      date: "Sept 2020 - Apr 2021",
      points: [
        "",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Infosys",
      icon: infosys,
      iconBg: "#383E56",
      date: "Feb 2020 - Mar 2020",
      points: [
        "",
      ],
    },
  ];

  const educations = [
    {
      title: "Master of Computer Science",
      company_name: "Illinois Institute of Technology",
      icon: iit,
      iconBg: "#383E56",
      date: "Aug 2022 - May 2024",
      points: [],
    },
    {
      title: "Bachelor of Engineering",
      company_name: "Visvesvaraya Technological University",
      icon: vtu,
      iconBg: "#E6DEDD",
      date: "Aug 2016 -  Aug 2020",
      points: [],
    },
  ];
  
  const projects = [
    {
      name: "Metaverse Website",
      description:
        "A Modern Next 13 Website With Framer Motion & Tailwind CSS",
      tags: [
        {
          name: "Next.js 13",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindCSS",
          color: "pink-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "green-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
      ],
      image: metaverse,
      source_code_link: "https://github.com/",
    },
    {
      name: "SummarAIze: Article Summarizer",
      description:
        "A ReactJS project utilizing OpenAI's GPT model, developed with Vite and styled with Tailwind CSS. ",
      tags: [
        {
          name: "Vite.js",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
        {
          name: "Redux Toolkit",
          color: "blue-text-gradient",
        },
      ],
      image: sumz,
      source_code_link: "https://github.com/",
    },
    {
      name: "ChatGPT: AI chat bot",
      description:
        "Seamless and interactive AI-powered ChatGPT clone developed with React, Next.js, Firebase, Tailwind CSS, and TypeScript.",
      tags: [
        {
          name: "Next.js 13",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "blue-text-gradient",
        },
        {
          name: "NextAuth",
          color: "green-text-gradient",
        },
      ],
      image: catgpt,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { navLinks, icons, technologies, experiences, educations, projects};