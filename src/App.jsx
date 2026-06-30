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
              Technical Project Lead and Senior Full-Stack Engineer with 8+ years 
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
     <section id="about" className="page-section">
          <div className="center">
            <h2>About</h2>
            <p>
             I’m Anne, a Technical Project Lead and Senior Full-Stack Engineer with 8+ years of experience designing, 
             developing, and deploying scalable, customer-centric web applications. 
             I have built my career at the crossroads of technical execution and process governance, and I delight in
             engineering robust software while simultaneously spearheading operational efficiency. 
             I have a proven track record of taking complex digital implementations through 
             the full product development lifecycle, from initial requirement scoping and architecture 
             design to QA and launch.
             
             <br></br>
             <br></br>
             As an engineer, I am highly proficient across React, Vue.js, C#, and modern frameworks, with a deep 
             passion for user accessibility and intuitive UI design. 
             Simultaneously, I serve as a vital bridge between engineering teams and business stakeholders, with a natural talent for 
             translating complex technical concepts into clear, actionable business insights. 
             I excel at championing Agile methodologies, restructuring project workflows to maximize team efficiency, 
             and removing development bottlenecks to ensure strict timeline predictability.

             <br></br>
             <br></br>
              Whether I am architecting a scalable codebase or managing the delivery path of a multi-faceted project, 
              I bring a unique blend of technical insight and structured governance to ensure high-quality, 
              outcome-driven solutions. Reach out today, and let's chat about how I can help your team drive its next initiative to success.

            </p>
          </div>
      </section>

      <section id="experience" className="page-section">
          <div className="center">
            <h2>Experience</h2>
            <p>
             Select examples of my previous work.
            </p>
            <div id="card-grid">
              <Card title="UW Alumni Portal" body="Facilitated end to end redesign of the University of Wisconsin's Alumni Portal from initial design to launch, utilizing a Headless CMS structure with Gatsby and Wordpress." img={UWAlumniPreview} skills={["Technical Design Translation","Sprint Planning","Cross-Functional Collaboration","Gatsby","React","Wordpress","GraphQL","Headless CMS"]} link="https://www.uwalumni.com/"/>
              <Card title="American Meteorological Society Member Portal" body="Spearheaded the front end architecture modernization of several user workflows, allowing seamless integration into legacy systems for phased release." img={AMSPreview} skills={["Stakeholder Communication","Vue.js","Coldfusion","Node.js"]}/>
              <Card title="UW Alumni Park" body="Collaborated with 3rd party studio, Filament Games, to produce an interactive companion site for the University of Wisconsin's Alumni Park, allowing visitors to learn about the history and impact of the university and its alumni through physical and digital exhibits." img={AlumniParkPreview} skills={["Third Party Collaboration","HTML5","JavaScript"]} link="https://www.alumnipark.com/"/>
              <Card title="Cycles - 1st Playable's Cognitive Bias Training Game" body="Researched and architected the port of an existing ActionScript mobile game to be able to run nativly in any modern browser using modern HTML5 tools." img={CyclesPreview} skills={["Technical Research","JavaScript","HTML5","AS3"]}/>
            </div>

          </div>
      </section>
    </>
  )
}

export default App
