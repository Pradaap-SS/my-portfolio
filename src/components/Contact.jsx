import { icons } from "../constants";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <>
    <div className='mt-2 flex flex-row justify-center gap-5'>
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