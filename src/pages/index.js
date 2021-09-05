import * as React from "react"
import '../styles/style.css'
import Banner from '../components/main-banner.js';
import About from '../components/about-me.js';
import KeySkills from '../components/key-skills.js'
import GitProjects from '../components/projects.js'
import Contact from '../components/contact.js'
// markup
const IndexPage = () => {
  return (
    <main>
      <Banner />
      <About />
      <KeySkills />
      <GitProjects />
      <Contact />
    </main>
  )
}

export default IndexPage
