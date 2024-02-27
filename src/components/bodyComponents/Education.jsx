import './Education.css'
import TempComp from "./TempComp.jsx";
function Education() {
    const expObject1 = {jobTitle:"Brila Institute of technology ",companyName:"M.Tech in Software Engineering",startDate:"01/2023",
        endDate:"Present",location:"Remote, IND"};

    const expObject2 = {jobTitle:"Amrita Vishwa Vidyapeetham",companyName:"B.Tech in  Electronics and Instrumentation Engineering",startDate:"06/2017",
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