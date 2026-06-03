import { useState } from 'react'
import UWAlumniPreview from './assets/uwalumni_preview_resize.png'
import AlumniParkPreview from './assets/alumnipark_preview_resize.png'
import AMSPreview from './assets/ams_preview_resize.png'
import CyclesPreview from './assets/cycles_preview.png'
import './App.css'
import ClickButton from './components/ClickButton';
import ContactWidget from './modules/ContactWidget';
import SkillsWidget from './modules/SkillsWidget';
import NavBar from './modules/NavBar';
import Card from './components/Card';



function App() {
  return (
    <>
    <NavBar/>
      <section id="home" className="page-section">
        <section id="hero-section">
          <div className="hero-eyebrow">
            <span className="dot"></span>
            Open to Work
          </div>
          <div>
            <h1>
              Bridging the gap 
              <br/>
              between <span id="hero-design">design</span>
              <br/> 
              and <span id="hero-dev">development</span>
            </h1>
            <p>
              Full Stack Engineer and Web Systems Developer with 8+ years 
              experience turning complex business needs
              into intuitive and accessible user experiences.
            </p>
          </div>
        </section>

        <div className="ticks"></div>

        <section id="widgets">
          <SkillsWidget/>
          <ContactWidget/>
        </section>

        <div className="ticks"></div>

     </section>
     <section id="about" class="page-section">
          <div className="center">
            <h2>About</h2>
            <p>
             I'm Anne, a Full-stack Software Engineer with 8+ years of experience designing, developing, and deploying scalable, 
             customer-centric web applications. I'm passionate about user accessibility and ensuring that UI design 
             is seamless and intuitive for all. Across my career, I've cultivated a proven track record of delivering high-quality, 
             outcome-driven solutions across React, Vue.js, C#, and modern JavaScript frameworks. 
             
             <br></br>
             <br></br>
             I'm a strong collaborator with an eye for improving internal processes in order to facilitate clear communication
             and timeline predicability. I have ample experience using Agile practices in my work and have taken multiple projects through the full development cycle, 
             from initial design to launch.

            </p>
          </div>
      </section>

      <section id="experience" class="page-section">
          <div className="center">
            <h2>Experience</h2>
            <p>
             Select examples of my previous work.
            </p>
            <div id="card-grid">
              <Card title="UW Alumni Portal" body="Full, ground up rebuild of the University of Wisconsin's Alumni Portal from initial design to launch utilizing a Headless CMS structure with Gatsby and Wordpress." img={UWAlumniPreview} skills={["Gatsby","React","Wordpress","GraphQL","Headless CMS"]}/>
              <Card title="American Meteorological Society Member Portal" body="Front end architecture modernization of several user workflows, allowing seamless integration into legacy system for phased release." img={AMSPreview} skills={["Vue.js","Coldfusion","Node.js"]}/>
              <Card title="UW Alumni Park" body="Interactive companion site for the University of Wisconsin's Alumni Park, allowing visitors to learn about the history and impact of the university and its alumni" img={AlumniParkPreview} skills={["HTML5","JavaScript"]}/>
              <Card title="Cycles - 1st Playable's Cognitive Bias Training Game" body="Port of an existing ActionScript mobile game to be able to run nativly in any modern browser using modern HTML5 tools." img={CyclesPreview} skills={["JavaScript","HTML5","AS3"]}/>
            </div>

          </div>
      </section>
    </>
  )
}

export default App
