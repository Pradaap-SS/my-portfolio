import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { icons } from "../constants";

const Hero = () => {

  const handleClick = () => {
    window.location.href = './About.jsx';
  };

  {/*useEffect(() => {
    const iconContainer = document.getElementById("icon-container");

    icons.forEach((icon) => {
      const iconElement = document.createElement("a");
      iconElement.href = icon.link;
      iconElement.target = "_blank";
      iconElement.rel = "noopener noreferrer";

      const iconClass = document.createElement("i");
      iconClass.className = icon.iconClass;

      iconElement.appendChild(iconClass);
      iconContainer.appendChild(iconElement);
    });
  }, []);*/}

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Pradaap</span>
          </h1>
          <p className={`${styles.heroSubText} mt-1 text-white-100`}>
            Software Engineer | Graduate Student
          <br/> 

            <p className='font-normal sm:text-[16px] xs:text-[14px] text-[18px] text-secondary mt-1'> 
                I develop 3D visuals, user interfaces and web applications!
            </p>

            <div className='mt-2 flex flex-row gap-5'>
                {icons.map((icon) => (
                  <a
                    key={icon.name}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                <img src={icon.iconClass} alt='icons' className='w-12 h-12 object-contain bg-white rounded-full' /> 
                  </a>
                ))}
            </div>

           <button
            className=' mt-2 font-normal sm:text-[16px] xs:text-[14px] text-[18px] rounded-full border-[#f9f8fa] w-auto
            duration-300 text-center text-secondary hover:text-white underline'
            onClick={handleClick}
           >
            Schedule a meeting..
          </button>

          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;