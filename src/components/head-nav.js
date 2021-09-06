import React from "react";
import { Link } from 'react-scroll'

export default function Head(){
    return(
        <ul className="sticky">
            <li><Link to="home" smooth={true} offset={-50} duration={500}>&lt;Home /&gt;</Link></li>
            <li><Link to="about" smooth={true} offset={-50} duration={500}>&lt;About /&gt;</Link></li>
            <li><Link to="skills" smooth={true} offset={-50} duration={500}>&lt;Key Skills /&gt;</Link></li>
            <li><Link to="projects" smooth={true} offset={-50} duration={500}>&lt;My Projects /&gt;</Link></li>
            <li><Link to="contact" smooth={true} offset={-50} duration={500}>&lt;Contact /&gt;</Link></li>
        </ul>
    )
}