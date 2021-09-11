import React, { useEffect, useState } from "react";
import Python from '../images/skills/python.png'
import Html from '../images/skills/html.png'
import Css from '../images/skills/css.png'
import Javascript from '../images/skills/JavaScript.png'
import Api from '../images/skills/api.png'
import Wordpress from '../images/skills/wordpress.png'
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
            <h2 className="skills-head">Key Skills</h2>
            <div className="all-skills">
                <div className="skill"><img src={Python} alt="python"/>Python</div>
                <div className="skill"><img src={Html} alt="HTML"/>HTML</div>
                <div className="skill"><img src={Css} alt="CSS"/>CSS</div>
                <div className="skill"><img src={Javascript} alt="Javascript"/>Javascript</div>
                <div className="skill"><img src={Api} alt="API"/>API</div>
                <div className="skill"><img src={Wordpress} alt="Wordpress"/>Wordpress</div>
            </div>
            </div>
        </section>
    )
}