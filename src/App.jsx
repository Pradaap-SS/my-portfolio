import { BrowserRouter } from "react-router-dom";
import { useTheme } from './components/ThemeContext';
import { About, Contact, Education, Experience, Hero, Navbar, Tech, Projects} from "./components";


const App = () => {
  
  const { theme } = useTheme();

  return (
    <BrowserRouter>
      {/*<div className='relative z-0 bg-white'>*/}
      <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}> 
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Tech />
        <Projects />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;