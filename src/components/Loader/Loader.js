import './Loader.css';
import e from '../../Images/Eduinfo.png';

const Loader = () => {
    return (
        <div id="contain">
            <img src={e} id="li" alt="Logo-image"></img>
            <svg width="100" height="200">
                <circle cx="50" cy="50" r="20" stroke="white" stroke-width="3" fill="transparent"></circle>
            </svg>
        </div>
    );
}
export default Loader;