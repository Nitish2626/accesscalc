import './Navigation.css';
import logo from '../../Images/Eduinfo.png'
import arrow from '../../Images/arrow.png';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    const toggle = () => {
        if (document.getElementById("arrow-image").style.rotate == "0deg") {
            document.getElementById("arrow-image").style.rotate = "-180deg";
            document.getElementById("container").style.display = "flex";
        }
        else {
            document.getElementById("container").style.display = "none";
            document.getElementById("arrow-image").style.rotate = "0deg";
        }
    }

    const showHide = () => {
        if (document.getElementById("navigation-links").style.display == "none") {
            document.getElementById("navigation-links").style.display = "flex";
            document.getElementById("line1").style.rotate = "50deg";
            document.getElementById("line1").style.marginTop = "30%";
            document.getElementById("line2").style.opacity = 0;
            document.getElementById("line3").style.rotate = "-50deg";
            document.getElementById("line3").style.marginTop = "-30%";
        }
        else {
            document.getElementById("navigation-links").style.display = "none";
            document.getElementById("line1").style.rotate = "0deg";
            document.getElementById("line1").style.marginTop = "6%";
            document.getElementById("line2").style.opacity = 1;
            document.getElementById("line3").style.rotate = "0deg";
            document.getElementById("line3").style.marginTop = "6%";
        }
    }

    const hide = () => {
        document.getElementById("container").style.display = "none";
        document.getElementById("arrow-image").style.rotate = "0deg"
    }

    return (
        <>
            <nav id="nav-bar">
                <img src={logo} id="logo-image" alt="Logo Image"></img>
                <button id="hamburger-icon" onClick={()=>{
                    showHide();
                    hide();
                }}>
                    <span className="lines" id="line1"></span>
                    <span className="lines" id="line2"></span>
                    <span className="lines" id="line3"></span>
                </button>

                <div id="navigation-links">
                    <NavLink to="/" className="links">
                        Home
                    </NavLink>

                    <NavLink to="/about" className="links">
                        About Us
                    </NavLink>

                    <NavLink to="/contact" className="links">
                        Contact
                    </NavLink>

                    <button className='links' id="calculator" onClick={toggle}>
                        Calculators
                        <img src={arrow} id="arrow-image" alt="Dropdown Image"></img>
                    </button>
                </div>
            </nav>

            <section id="container">
                <NavLink to="/standard" className='container-links'>
                    Standard
                </NavLink>

                <NavLink to="/vml" className='container-links'>
                    Volume,Mass,Length
                </NavLink>

                <NavLink to="/temperature" className='container-links'>
                    Temperature
                </NavLink>

                <NavLink to="/Time" className='container-links'>
                    Time
                </NavLink>
            </section>

        </>
    );
}
export default Navigation;