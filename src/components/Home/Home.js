import './Home.css';
import Standard from '../Standard/Standard';
import VML from '../Volume,Mass,Length/VML';
import Temperature from '../Temperature/Temperature';
import Time from '../Time/Time';
import Error from '../Error/Error';
import { useState } from 'react';
import Number from '../Number Conversion/Number';
import All from '../All/All';

const Home = (props) => {

    document.title = "Calculator - Home";

    const [error, setErr] = useState(false);

    // const close = () => {
    //     setErr(false);
    // }

    // const num=()=>{
    //     props.value();
    // }

    const [al,setAl]=useState(true);
    const [num,setNum]=useState(false);

    const unlook=()=>{
        setAl(false);
        setNum(true);
    }

    const lo=()=>{
        setNum(false);
        setAl(true);
    }

    return (
        <div id="home-div">

            {/* <h1 id="home-text">Home</h1>
            <hr width="100%" color="grey"></hr> */}

            {/* <Standard />
            <VML />
            <Temperature />
            <Time />
            {error && <Error value={close} />} */}
            
            {al && <All value={unlook}/>}
            {num && <Number value={lo} />}

        </div>
    );
}
export default Home;