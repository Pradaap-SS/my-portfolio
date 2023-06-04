import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { profile } from "../assets";

/*const ServiceCard = ({ index, title, icon }) => {
  return (
      <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >

      <div
         options={{
           max: 45,
           scale: 1,
           speed: 450,
         }}
         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col'>

         <img
           src={icon}
           alt={title}
           className='w-16 h-16 object-contain'
         />

          <h3 className='text-white text-[20px] font-noemal text-center'>
           {title}
          </h3>

      </div>

      </motion.div>
     </Tilt>

  )
 }*/
 


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
     
     {/*
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
        </div> */}

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='m-10 text-secondary text-[17px] justify-center text-center leading-[30px]'
      >
        I'm a skilled software developer with experience in JavaScript, 
        and expertise in frameworks like React, Node.js, and Three.js. 
        I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about");