import './Projects.css'
import ProjectHelper from "./ProjectHelper.jsx";

function Projects() {
    const todoProject= {
        projectTitle: "Task Planner App",
        projectDesc: "A modern intuitive UI using Figma and translated to high quality flutter interface code",
        skillsUsed: ["Flutter","Dart","Back4App","Figma"],
        sourceCode: "https://github.com/saigrepo/todo_flutter_app"
    }
    const lidarProject= {
        projectTitle: "Autonomous Robot with LIDAR",
        projectDesc: "An autonomous environment mapping prototype using 2D Lidar which is powered by Raspberry PI 4 and trained by ML data.",
        skillsUsed: ["Python","Raspberry Pi","Robot Operating System","Machine learning"]
    }
    return (
        <div className="Projects">
            <h2>Projects</h2>
            <hr/>
            <div className="projects-container">
                <ProjectHelper projectDetails={todoProject}/>
                <ProjectHelper projectDetails={lidarProject}/>
            </div>
        </div>
    )
}

export default Projects;