import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { profile } from "../assets";

const About = () => {
  return (
    <>
      
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}> Introduction </p>
        <h2 className={`${styles.sectionHeadText} flex flex-row justify-center text-center`}>About.</h2>
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
        className='m-10 text-secondary text-[17px] justify-center text-center leading-[30px]'
      >
        I'm a skilled software developer with experience in JavaScript, 
        and expertise in frameworks like React.js for front-end development, 
        and Node.js and Express.js for back-end development. I have a strong 
        aptitude for learning and a passion for crafting efficient, scalable, 
        and user-friendly solutions that effectively address real-world problems. 
        Let's work together to bring your ideas to life!
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about");