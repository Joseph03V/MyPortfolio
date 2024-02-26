import React from "react"
import Projects from "../../components/Project"
/* TODO: import images for each project */

const Portfolio = (singleProject) => {
/* TODO: finish project array */
    const projectList = [
        {
            title:"",
            summary: "",
            image: "/* iported one */",
            technologies:"",
            deployedLink: "",
            github:"",
        },
        {
            title:"",
            summary: "",
            image: "/* iported one */",
            technologies:"",
            deployedLink: "",
            github:"",
        },
        {
            title:"",
            summary: "",
            image: "/* iported one */",
            technologies:"",
            deployedLink: "",
            github:"",
        },
        {
            title:"",
            summary: "",
            image: "/* iported one */",
            technologies:"",
            deployedLink: "",
            github:"",
        }
    ]

    return (
        <div key={singleProject.title}>
            <div className="flex-row">
                {projectList.map((singleProject)=> (
                    <Projects singleProject={singleProject}/>
                ))}
            </div>
        </div>
    )
}


export default Portfolio