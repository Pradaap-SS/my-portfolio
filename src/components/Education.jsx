import React from 'react'
import { useTheme } from './ThemeContext';


import {
 VerticalTimeline,
 VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";


import "react-vertical-timeline-component/style.min.css";


import { styles } from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const EducationCard = ({ education }) => {
 return (
   <VerticalTimelineElement
     contentStyle={{
       background: "#1d1836",
       color: "#fff",
     }}
     contentArrowStyle={{ borderRight: "7px solid black" }}
     date={education.date}
     dateClassName="black-date-text"
     iconStyle={{ background: education.iconBg }}
     icon={
       <div className='flex justify-center items-center w-full h-full'>
         <img
           src={education.icon}
           alt={education.company_name}
           className='w-[60%] h-[60%] object-contain'
         />
       </div>
     }
   >
     <div>
       <h3 className={`${styles.sectionSubText} text-white`}>{education.title}</h3>
       <p
         className='text-secondary text-[16px] font-light sm:text-[12px] xs:text-[10px] tracking-wider'
         style={{ margin: 0 }}
       >
         {education.company_name}
       </p>
     </div>


     <ul className='mt-5 list-disc ml-5 space-y-2'>
       {education.points.map((point, index) => (
         <li
           key={`education-point-${index}`}
           className='text-black-100 text-[14px] pl-1 tracking-wider'
         >
           {point}
         </li>
       ))}
     </ul>
   </VerticalTimelineElement>
 );
};


const Education = () => {
const { theme } = useTheme();

 return (
   <>
     <motion.div variants={textVariant()}>
       {/*<p className={`${styles.sectionSubText} ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>
         What I have done so far
        </p>*/}
       <h2 className={`${styles.sectionHeadText} ${theme === 'light' ? 'text-black' : 'text-white'} text-center`}>
         Education.
       </h2>
     </motion.div>


     <div className='mt-20 flex flex-col'>
       <VerticalTimeline>
         {educations.map((education, index) => (
           <EducationCard
             key={`education-${index}`}
             education={education}
           />
         ))}
       </VerticalTimeline>
     </div>
   </>
 );
};


export default SectionWrapper(Education, "educ");