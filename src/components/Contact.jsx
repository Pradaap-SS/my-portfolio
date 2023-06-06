import { icons } from "../constants";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import React, { useRef, useState } from "react";
import { slideIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
 
const Contact = () => {
  
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

  emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Pradaap Shobha",
          from_email: form.email,
          to_email: "pradaap.shobha@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  

  const year = new Date().getFullYear();
  return (
    <>
    <div className={`overflow-hidden`}>
      
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Get in touch</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Contact.</h2>
       </motion.div>
     
     <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className=' mt-4 flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-4 w-full justify-center'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      </div>

    <div className='mt-6 flex flex-row justify-center gap-5'>
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
        <div className='mt-4 flex flex-row text-xs font-light justify-center'> &copy; {year} Pradaap Shobha  
        </div>
      </>
  )
}

export default SectionWrapper(Contact, "contact");