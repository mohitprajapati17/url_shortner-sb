import React from 'react'
import ThemeToggle from './ThemeToggle'
import NavBar from './NavBar'
import { StarBackground } from './StarBackground'
import HeroSection from './HeroSection'
import { AboutSection } from './AboutSection'
import { SkillsSection } from './SkillsSection'
import { ProjectsSection } from './ProjectSection'
import { ContactSection } from './ContactSection'

function Home() {
  return (
    <div>
        <ThemeToggle/>
        <StarBackground/>
        <NavBar/>
        <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
        </main>
         
    </div>
  )
}

export default Home