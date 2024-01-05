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
    product,
    python,
    java
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
      link: 'https://docs.google.com/document/d/1bhUmSmADHX9t_StG33WePg3dLUV4uiTuOCjOQ59mmL4/edit?usp=sharing',
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
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
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
        "Designed and developed progressive solutions, including wristbands, requisitions, medical reports, smart-templates, and pharmacy labels, using CCL, SQL, JavaScript and company tools (Egs. PowerChart, Discern Visual Developer etc).",
        "Implemented reusable Java functions, optimizing Data Migration Export tool by 30%, conducting code reviews, bug fixes, and proficiently using Jira, GitHub, TortoiseCVS for version control.",
        "Established data import/export solutions within Cerner systems, achieving a 10% improvement in code efficiency and automated reports, resulting in a 95% client satisfaction rate and ~ 50% workload reduction.",
        "Facilitated seamless collaboration with stakeholders and Software Architect in Agile development setting, translating requirements into technical specifications, emphasizing teamwork, email etiquette, and effective communication.",
],
    },
    {
      title: "Programmer Analyst Trainee",
      company_name: "Cognizant",
      icon: cognizant,
      iconBg: "#E6DEDD",
      date: "Sept 2020 - Apr 2021",
      points: [
        "Designed and developed responsive web apps with Spring Boot, React.js, and Node.js, showcasing strong problem-solving skills and JavaScript expertise.",
        "Implemented robust RESTful APIs, seamlessly connecting front-end and back-end systems, leveraging Spring Framework for dependency injection, transaction management, and security implementation.",
        "Managed database schemas using MySQL and MongoDB, conducted code reviews, increased unit test coverage by 2%, and maintained version control on GitHub, enhancing overall software quality.",
        "Actively engaged in Scrum processes, participating in sprint planning, stand-up meetings, and retrospectives, showcasing strong problem-solving, time management, and collaboration skills.",
        ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Infosys",
      icon: infosys,
      iconBg: "#383E56",
      date: "Feb 2020 - Mar 2020",
      points: [
        "Accomplished training in Python, SQL, and Open Source, focusing on web app development, Linux systems, and databases.",
        "Contributed to web app development, and gained hands-on experience with front-end and back-end technologies, creating responsive pages with HTML, CSS, and JavaScript.",
        "Collaborated on Open Source projects, to develop and test RESTful APIs and database queries, honing problem-solving skills, and mastering version control with Git for effective development.]",
      ]
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
    {
      name: "AI-Powered 3D Product Website ",
      description:
        "Developed an AI-powered 3D graphics project using React and Three.js to enhance product website visuals.",
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
      image: product,
      source_code_link: "https://github.com/Pradaap-SS/ThreeJS-3D-product-website",
      source_url: "https://three-js-3-d-product-website-pradaap-ss.vercel.app/",
    },
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
    
  ];
  
  export { navLinks, icons, technologies, experiences, educations, projects};