import './Home.css';
import Standard from '../Standard/Standard';
import VML from '../Volume,Mass,Length/VML';
import Temperature from '../Temperature/Temperature';
import Time from '../Time/Time';
import Error from '../Error/Error';
import { useState } from 'react';

const Home = () => {

    document.title = "Calculator - Home";

    const [error, setErr] = useState(false);

    const close = () => {
        setErr(false);
    }

    return (
        <div id="home-div">

            <h1 id="home-text">Home</h1>
            <hr width="100%" color="grey"></hr>

            <Standard />
            <VML />
            <Temperature />
            <Time />
            {error && <Error value={close} />}
        

        </div>
    );
}
export default Home;