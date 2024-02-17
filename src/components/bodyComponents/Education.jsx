import './Education.css'
import TempComp from "./TempComp.jsx";
function Education() {
    const expObject1 = {jobTitle:"Software Engineering",companyName:"Brila Institute of technology",startDate:"01/2023",
        endDate:"Present",location:"Chennai, IND"};

    const expObject2 = {jobTitle:"Electronics and Instrumentation Engineering",companyName:"Amrita Vishwa Vidyapeetham",startDate:"06/2017",
        endDate:"06/2021",location:"Chennai, IND"};
    return (
        <div className="education">
            <h2>Education</h2>
            <hr/>
            <TempComp requiredDetails={expObject1}/>
            <TempComp requiredDetails={expObject2}/>
        </div>
    )
}

export default Education;