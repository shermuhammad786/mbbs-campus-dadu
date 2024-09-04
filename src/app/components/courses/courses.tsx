import BechelorDegree from "../bechlorDegree/bechelorDegree";
import "./courses.css"
export default function Courses() {
    const desc = "The Bachelor of Science in Information Technology (BSIT) program prepares students to be IT professionals who are able to perform installation, operation, development, maintenance and administration of computer applications."
    const bba = "A Bachelor of Business Administration is a credential designed to provide students with a strong foundation in business fundamentals and an understanding of their application in real-world work environments.";
    const english = "Bachelor's in English: An English degree reviews literary and cultural works produced in or translated into English. This degree is ideal for students who want to teach English, pursue careers in journalism or law, or work in the publishing industry"
    return (
        <div>

            <div className="bechelorDegrees">
                <h1 className="degrees">Our Degree Programs</h1>
                <h1 className="bechelor">Bechelor Degree Programs</h1>
            </div>
            <div className="courses">
                <BechelorDegree department="English" degree="ENG" desc={english} />
                <BechelorDegree department="Information Technology" degree="IT" desc={desc} />
                <BechelorDegree department=" Bachelor of Business Administration" degree="BBA" desc={bba} />
            </div>
        </div>
    )
}
