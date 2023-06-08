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
      link: 'https://drive.google.com/file/d/1kOiDVPf6o9smbokk_JtZz4-o82-oIZwA/view?usp=drive_link',
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
        "Designed and developed innovative solutions, including wristbands, requisitions, medical reports, smart-templates, and pharmacy labels, using company tools and JavaScript.",
        "Collaborated closely with cross-functional teams and clients to gather requirements, analyze user needs, and develop effective solutions.",
        "Worked with databases (e.g. Oracle,  MySQL) for efficient data storage, retrieval, and ensuring data integrity and security.",
        "Automated reports to save ~ 50% of workload for clients.",
        "Conducted code reviews, identified bugs, and implemented necessary fixes for high-quality, maintainable software.",
        "Utilized JavaScript to create interactive and dynamic features, improving application functionality and usability.",
        "Actively participated in Agile development processes (daily stand-ups, sprint planning, retrospectives) for timely feature delivery and continuous improvement.",
        "Assisted in troubleshooting and resolving user-reported issues, providing timely support for smooth application operation.",
      ],
    },
    {
      title: "Programmer Analyst Trainee",
      company_name: "Cognizant",
      icon: cognizant,
      iconBg: "#E6DEDD",
      date: "Sept 2020 - Apr 2021",
      points: [
        "Designed and developed responsive web applications using Spring Boot, React.js, and Node.js.",
        "Collaborated with cross-functional teams for requirements gathering and translating them into technical specifications.",
        "Implemented RESTful APIs to enable seamless communication between front-end and back-end systems.",
        "Utilized Spring Framework to implement various modules, such as dependency injection, transaction management, and security.",
        "Developed and maintained database schemas using technologies like MySQL and MongoDB.",
        "Integrated third-party APIs and services to enhance application functionality.",
        "Conducted code reviews to ensure adherence to coding standards and best practices.",
        "Performed unit testing resulting in an improvement of test coverage by approximately 2% and debugging to identify and resolve software defects.",
        "Actively participated in Agile development processes, including sprint planning, daily stand-ups, and retrospective meetings.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Infosys",
      icon: infosys,
      iconBg: "#383E56",
      date: "Feb 2020 - Mar 2020",
      points: [
        "Completed Generic training (Java programming and SQL) and Stream Training in Web Application Development.",
        "Developed proficiency in designing and developing web applications by utilizing HTML, CSS, and JavaScript to create intuitive user interfaces.",
        "Executed unit tests that significantly enhanced test coverage and ensured robust code quality.",
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
        "A Modern Next 13 Website With Framer Motion & Tailwind CSS.",
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
      ],
      image: metaverse,
      source_code_link: "https://github.com/Pradaap-SS/metaverse-website",
      source_url: "https://metaverse-website-pradaap-ss.vercel.app/",
    },
    {
      name: "SummarAIze: Article Summarizer",
      description:
        "A ReactJS-based web application developed for learning purposes, with optimized performance using Vite and a sleek interface styled with Tailwind CSS and powered by OpenAI's GPT model.",
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
      source_code_link: "https://github.com/Pradaap-SS/SummarAIze-The-Intelligent-Article-Summarizer",
      source_url: "https://summar-a-ize-the-intelligent-article-summarizer-pradaap-ss.vercel.app/",
    },
    {
      name: "ChatGPT clone",
      description:
        "Seamless and interactive AI-powered Chat bot developed with React, Next.js, Firebase, Tailwind CSS, and TypeScript.",
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
      source_code_link: "https://github.com/Pradaap-SS/chatgpt-messenger-app",
      source_url: "https://chatgpt-messenger-app-pradaap-ss.vercel.app/",
    },
  ];
  
  export { navLinks, icons, technologies, experiences, educations, projects};