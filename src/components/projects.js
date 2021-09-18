import React, {useEffect, useState, useCallback} from "react";
import Slider from "react-slick";
import axios from 'axios';


export default function GitProjects(){
    const url = "https://api.github.com/users/srinathunta/repos";
    const [projects, setProjects] = useState(null);
    const [isSlider, setSlider] = useState(null);
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(url);
    
          setProjects(result.data);
        };
        fetchData();

      }, []);

    const handleWindowResize = useCallback(event => {

        setWindowSize(window.innerWidth);
  
    }, []); 
  
  
    useEffect(() => {
    //   window.addEventListener('resize', handleWindowResize);
        if(windowSize < 767){
            setSlider('projects-slider');
        }
    //   return () => {
    //     window.removeEventListener('resize', handleWindowResize);
    //   };
    }, [handleWindowResize]);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows : false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
            },
            {
              breakpoint: 10000, // a unrealistically big number to cover up greatest screen resolution
              settings: 'unslick'
            }
          ]
      };
    return(
        <section className={`gitprojects main ${isSlider}`} id="projects">
            <div className="content">
            <h2 className="main-title">My Projects</h2>
            <Slider className="card-wrapper" {...settings}>
                {projects && projects.map(project => {
                    return (
                        <li className="card" key={project.name}>
                            <a href={project.html_url} target="_blank" rel="noreferrer">
                                <h2>{project.name}</h2>
                            </a>
                            <p className="project-description">{project.description}</p>
                            <p className="language">Language: {project.language}</p>
                            
                        </li>
                    )
                })}
            </Slider>
            </div>
        </section>
    )
}