import './Contact.css';
import gmail from '../../Images/gmail.png';
import linkedin from '../../Images/linkedin.png';

const Feedback=()=>{

    document.title="Calculator - Contact";

    return(
        <>
            <h3 id="cont-text">Contact</h3>
            <hr width="100%" color="grey"></hr>

            <h5 id="query">For any <strong>Feedback, Queries, Suggestions and Report Bugs</strong>, please contact us on following links.</h5>

            <a id="gmail" href='mailto:rajusony8884@gmail.com' target="_blank"><img id="gmail-image" src={gmail} alt="gmail image"></img> eduinfo@gmail.com</a>

            <a id="linkedin" href="https://linkedin.com/in/nitish-sharma-9465ab252" target='_blank'><img src={linkedin} id="linkedin-image"></img>nitish sharma</a>
        </>
    );
}
export default Feedback;