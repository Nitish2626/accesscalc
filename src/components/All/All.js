import "./All.css";
import Number from "../Number Conversion/Number";

const All = (props) => {

    const num=()=>{
        props.value();
    }

    return (
        <div id="home-con">
            <button id="nc" onClick={num}>
                <h4>Number Conversion</h4>
            </button>
        </div>
    );
}
export default All;