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
            <div className="workExp-points">
                <ul>
                    <li>2+ years of experience as a Full-stack Developer developing microservices-based web applications.</li>
                    <li>Translated designs and wireframes into high-quality interface code using HTML, CSS, and TypeScript in Angular.</li>
                    <li>Developed single-page Angular applications with reactive forms and complex routing for seamless interaction.</li>
                    <li>Implemented responsive and user-friendly interfaces using Angular, resulting in a 15% improvement in overall user satisfaction.</li>
                    <li>Built RESTful APIs using the Spring Boot framework.</li>
                    <li>Integrated Apache Kafka into a file-based API, reducing data persistence time by 40%.</li>
                    <li>Wrote unit and regression tests to verify the functionality and performance quality of the APIs.</li>
                    <li>Actively participated in weekly code reviews to enhance code quality, maintain coding standards, and improve system efficiency.</li>
                    <li>Authored detailed AC documentation by meticulously recording all implemented features and thoroughly documenting the resolution of identified defects.</li>
                    <li>Collaborated with cross-functional teams, including business analysts for effectively translating given business requirements into technical solutions, and QA engineers to rapidly fix raised defects.</li>
                    <li>Worked with the DevOps team as a UAT support person to provide prompt responses for deployment-related incidents.</li>
                    <li>Recognized with the Hi-Talent Associate award and promoted to a higher grade in late 2021 based on exceptional performance and entrepreneurial competencies.</li>
                </ul>
            </div>
        </div>
    )
}

export default WorkExperience;