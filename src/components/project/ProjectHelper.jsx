import './ProjectHelper.css';
import { GoPrimitiveDot } from '@react-icons/all-files/go/GoPrimitiveDot.js'

function ProjectHelper(props) {

    const {projectDetails} = props;
    const {projectTitle, projectDesc, skillsUsed, sourceCode} = projectDetails;
    return (
        <div className="ProjectHelper">
            {sourceCode ? <a href={sourceCode} className="source-code"><h4>{projectTitle} <GoPrimitiveDot size={10}/></h4></a> : <h4>{projectTitle}</h4>}
            <p className="Project-helper-p">{projectDesc}</p>
            <div className="project-skill-card">
                {skillsUsed.map( (skill,index) =>
                    <p key={skill+index}>{skill}</p>
                )}
            </div>
        </div>
    )
}

export default ProjectHelper;