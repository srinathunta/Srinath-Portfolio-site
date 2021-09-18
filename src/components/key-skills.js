import React, { useEffect, useState } from "react";
import Python from '../images/skills/python-1.png'
import Html from '../images/skills/html.png'
import Css from '../images/skills/css.png'
import Javascript from '../images/skills/JavaScript.png'
import Api from '../images/skills/api.png'
import Wordpress from '../images/skills/wordpress.png'
import Php from '../images/skills/php.png'
import ReactImg from '../images/skills/react.png'
import NodeImg from '../images/skills/node.png'
import { useInView } from 'react-intersection-observer';
export default function KeySkills(){

    const [isvisible, setVisible] = useState('not-visible');
    const { ref, inView } = useInView();
    useEffect(() =>{
        if(inView){
            setVisible('visible');
            console.log(isvisible);
        }
    },[inView])

    return(
        <section ref={ref} className={`key-skills main bg-mint ${isvisible}`} id="skills">
            <div className="content">
            <h2 className="skills-head main-title">Key Skills</h2>
            <div className="all-skills">
                <div className="skills-row">
                    <div className="skill"><div className="skill-image"><img src={Python} alt="python"/></div>Python</div>
                    <div className="skill"><div className="skill-image"><img src={Html} alt="HTML"/></div>HTML</div>
                    <div className="skill"><div className="skill-image"><img src={Css} alt="CSS"/></div>CSS</div>
                    <div className="skill"><div className="skill-image"><img src={Javascript} alt="Javascript"/></div>Javascript</div>
                    <div className="skill"><div className="skill-image"><img src={Api} alt="API"/></div>API</div>
                    <div className="skill"><div className="skill-image"><img src={Wordpress} alt="Wordpress"/></div>Wordpress</div>
                </div>
                <div className="skills-row">
                    <div className="skill"><div className="skill-image"><img src={Php} alt="python"/></div>PHP</div>
                    <div className="skill"><div className="skill-image"><img src={ReactImg} alt="HTML"/></div>React</div>
                    <div className="skill"><div className="skill-image"><img src={NodeImg} alt="CSS"/></div>NodeJs</div>
                </div>
            </div>
            </div>
        </section>
    )
}