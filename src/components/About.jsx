import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { profile } from "../assets";
import { useTheme } from './ThemeContext';

const About = () => {

  const { theme } = useTheme();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center ${theme === 'light' ? 'text-black' : 'text-white'}`}> Introduction </p>
        <h2 className={`${styles.sectionHeadText} flex flex-row justify-center text-center ${theme === 'light' ? 'text-black' : 'text-white'}`}>About.</h2>
      </motion.div>

      <div className='mt-4 flex flex-wrap justify-center gap-10'>
      <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-full shadow-card'
        >
          <img
            src={profile}
            alt="profile"
            className='w-50 h-50 object-contain rounded-full'
          />
      
      </motion.div>

      </Tilt>
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`m-10 text-[17px] md:text-[17px] sm:text-[14px] xs:text-[12px] justify-center text-justify leading-[30px] ${theme === 'light' ? 'text-black' : 'text-white'}`}
      >
        {/*I'm a skilled software developer with experience in Java, Python, JavaScript, 
        and expertise in frameworks like React.js for front-end development, 
        and Node.js for back-end development. I have a strong 
        aptitude for learning and a passion for crafting efficient, scalable, 
        and user-friendly solutions that effectively address real-world problems. 
  Let's work together to bring ideas to life!*/}

        <br/>
          <b>🚀 Passionate Full Stack Developer | Backend Engineer</b>
        <br/>
          Welcome! I'm <b>Pradaap</b>, a dedicated Full Stack Developer with a relentless passion for crafting robust backend solutions. 
          With a solid foundation in computer science and extensive hands-on experience, I thrive on transforming innovative ideas 
          into scalable, high-performance applications.

        <br/><br/>
          <b>💻 Tech Stack Mastery</b>
        <br/>
          My expertise lies in backend technologies, where I excel in designing and implementing scalable architectures. 
          Proficient in languages such as e.g., Python, Java, Node.js, I am adept at building APIs, 
          optimizing databases, and ensuring seamless integration with frontend frameworks.

        <br/><br/>
          <b>🌐 Full Stack Prowess</b>
        <br/>
          While backend development is my forte, I'm no stranger to the entire development stack. From crafting responsive and intuitive 
          user interfaces with Frontend technologies, e.g., React, Angular, to orchestrating seamless communication between frontend 
          and backend, I bring a holistic approach to application development.

        <br/><br/>
          <b>🔍 Problem Solver</b>
        <br/>
          I go beyond mere coding; I am a dedicated problem solver. Leveraging my analytical mindset and meticulous attention to 
          detail, I can identify challenges, formulate effective solutions, and enhance existing systems for optimal performance. 
          My commitment lies in delivering code that not only meets but surpasses expectations.

        <br/><br/>
          <b>🌐 Collaborative Team Player</b>
        <br/>
          I thrive in collaborative environments where creativity and innovation flourish. Whether working with cross-functional teams 
          or independently, I bring a positive attitude, excellent communication skills, and a commitment to achieving project goals 
          efficiently.
        <br/><br/>
          Let's connect and discuss how I can contribute to your next project! Feel free to reach out for opportunities to collaborate 
          on exciting ventures.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about");