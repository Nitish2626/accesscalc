import './About.css';
import std from '../../Images/std.png';
import vml from '../../Images/vml.png';
import temp from '../../Images/temp.png';
import time from '../../Images/time.png';

const About=()=>{
    document.title="Calculator - About";

    return(
        <div id="about">
            <h2>About this App</h2>
            <hr width="100%" color="grey"></hr>
            <img src={std} className="image" alt="Standard Calculator Image"></img>
            <h6>
                Standard Calculator is a Simple Calculator which is used to calculate basic arithmetic operations such as Addition, Subtraction, Multiplication and Division.   
            </h6>
            <br></br>
            <hr width="100%" color="grey"></hr>

            <img src={vml} className="image" alt="Volume, Mass, Length Calculator Image"></img>
            <h6>
                Volume, Mass, Length Calculator is a Calculator which is used to do conversion between Volume, Mass and Length to know lowest levels of each converions <strong>Kilogram (kg), Gram (g), Pound (lbs), Tonne (ton), Litre (l), Mililitre (ml), Inch (inch), Foot (ft), Yard (yd), Kilometre (km), Metre (m), Centimetre (cm), Milimetre(mm)</strong>.
            </h6>
            <br></br>
            <hr width="100%" color="grey"></hr>

            <img src={temp} className="image" alt="Temperature Calculator Image"></img>
            <h6>
                Temperature Calculator is a Calculator which is used to do conversion between various Temperature values such as <strong>Celsius, Fahrenheit and Kelvin</strong>.
            </h6>
            <br></br>
            <hr width="100%" color="grey"></hr>

            <img src={time} className="image" alt="Time Calculator Image"></img>
            <h6>
                Time Calculator is a Calculator which is used to do conversion between <strong>Year, Month, Week, Day, Hour, Minute, Second, Milisecond, Microsecond</strong>.
            </h6>
            <br></br>
            <hr width="100%" color="grey"></hr>

        </div>
    );
}
export default About;