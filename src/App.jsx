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
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
      </section>

      <section id="experience" class="page-section">
          <div className="center">
            <h2>Experience</h2>
            <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div id="card-grid">
              <Card title="UW Alumni Portal" body="test" img={UWAlumniPreview}/>
              <Card title="UW Alumni Park" body="test" img={AlumniParkPreview}/>
              <Card title="American Meteorological Society Member Portal" body="test" img={AMSPreview}/>
              <Card title="Cycles - 1st Playable's Cognitive Bias Training Game" body="test" img={CyclesPreview}/>
            </div>

          </div>
      </section>
    </>
  )
}

export default App
