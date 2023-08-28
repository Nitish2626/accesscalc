import './Error.css';
import error from '../../Images/error.jpeg';

const Error=(props)=>{

    return(
        <div id="backdrop">
            <div id="error-container">
                <img src={error} id="error-image" alt="error image"></img>
                <h4 id="invalid-text">Invalid Conversion</h4>
                <button id="err-btn" onClick={props.value}>Ok</button>
            </div>
        </div>
    );
}
export default Error;