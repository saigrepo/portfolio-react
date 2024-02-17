import './WorkExperience.css'
import TempComp from "./TempComp.jsx";
function WorkExperience() {
    const expObject = {jobTitle:"Software Engineer",companyName:"Tata Consultancy Services",startDate:"07/2021",
        endDate:"Present",location:"Chennai, IND"};
    return (
        <div className="workExp">
            <h2>Work Experience</h2>
            <hr/>
            <TempComp requiredDetails={expObject}/>
        </div>
    )
}

export default WorkExperience;