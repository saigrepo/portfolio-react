import './ProjectHelper.css'

function ProjectHelper(props) {

    const {projectTitle, projectDesc, skillsUsed} = props.projectDetails;
    return (
        <div className="ProjectHelper">
            <h4>{projectTitle}</h4>
            <p className="Project-helper-p">{projectDesc}</p>
            <div className="project-skill-card">
                {skillsUsed.map( skill =>
                    <p>{skill}</p>
                )}
            </div>
        </div>
    )
}

export default ProjectHelper;