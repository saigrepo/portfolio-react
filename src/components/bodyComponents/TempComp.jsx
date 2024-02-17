import './TempComp.css';
function  TempComp(props) {
    // eslint-disable-next-line react/prop-types
    const {jobTitle, companyName, startDate, endDate, location} = props.requiredDetails;

    return (
        <div className="temp-container">
            <h3>{jobTitle}</h3>
            <p>{companyName}</p>
            <div>
                <p>{startDate} - {endDate}</p>
                <p>{location}</p>
            </div>

        </div>
    )
}

export default TempComp;