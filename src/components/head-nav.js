import React, {useEffect, useState} from "react";
import { Link } from 'react-scroll'

export default function Head(){
    const [isStuck, setStuck] = useState('')
    const [scroll, setScroll] = useState(0)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY
        setScroll(scrollCheck)
        if (scrollCheck > 300){
            setStuck('stuck')
        }
        else{
            setStuck('')
        }
    })
  })

    return(
        <ul className={`sticky ${isStuck}`}>
            <li><Link to="home" smooth={true} offset={-50} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} offset={-30} duration={500}>About</Link></li>
            <li><Link to="skills" smooth={true} offset={-50} duration={500}>Key Skills</Link></li>
            <li><Link to="projects" smooth={true} offset={-50} duration={500}>My Projects</Link></li>
            <li><Link to="contact" smooth={true} offset={-50} duration={500}>Contact</Link></li>
        </ul>
    )
}