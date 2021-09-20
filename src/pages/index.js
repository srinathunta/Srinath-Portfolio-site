import * as React from "react"
import '../styles/style.css'
import '../styles/boxicons.min.css'
import "../styles/slick.css"; 
import { Helmet } from "react-helmet";
import Banner from '../components/main-banner.js';
import About from '../components/about-me.js';
import KeySkills from '../components/key-skills.js'
import GitProjects from '../components/projects.js'
import Contact from '../components/contact.js'
import Head from '../components/head-nav.js'
import favic from '../images/small-img.png'
// markup
const IndexPage = () => {
  return (
    <layout>
      <Helmet>
        <title>Srinath Unta | Full-Stack Developer</title>
        <link rel="icon" href={favic} type="image/x-icon" />
        <meta name="title" content="Srinath Unta" />
        <meta name="description" content="Srinath Unta, Full-Stack developer, working at Infozzle. Experienced in creating interactive websites using Wordpress, PHP and react. Knowledge in Python, Java and other programming languages." />
        <meta name="keywords" content="Srinath Unta, Srinat, Unta, wordpress, php, react, gatsby, node, full-Stack, full stack, developer, software engineer" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta property="og:title" content="Srinath Unta | Full-Stack Developer" />
        <meta property="og:site_name" content="Srinath Unta" />
        <meta property="og:description" content="Srinath Unta, Full-Stack developer, working at Infozzle. Experienced in creating interactive websites using Wordpress, PHP and react. Knowledge in Python, Java and other programming languages." />
        <meta property="og:type" content="article" />
      </Helmet>
      <main>
        <Head />
        <Banner />
        <About />
        <KeySkills />
        <GitProjects />
        <Contact />
      </main>
    </layout>
  )
}

export default IndexPage
