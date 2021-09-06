import React, {useEffect, useState} from "react";
import axios from 'axios';

export default function GitProjects(){
    const url = "https://api.github.com/users/srinathunta/repos";
    const [projects, setProjects] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(url);
    
          setProjects(result.data);
        };
        fetchData();
      }, []);
    
    return(
        <section className="gitprojects content" id="projects">
            <h2>My Projects</h2>
            <ul className="card-wrapper">
                {projects && projects.map(project => {
                    return (
                        <li className="card">
                            <a href={project.html_url} target="_blank" rel="noreferrer">
                                <h2>{project.name}</h2>
                            </a>
                            <p className="project-description">{project.description}</p>
                            <p className="language">Language: {project.language}</p>
                            
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}