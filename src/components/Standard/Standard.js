import { useState } from 'react';
import './Standard.css';
import Error from '../Error/Error';

const Standard=()=>{

    document.title="Calculator";

    const [error,setErr]=useState(false);

    const [result,setResult]=useState("");
    const display=(event)=>{
        setResult(result.concat(event.target.value));
    }

    const del=()=>{
        setResult(result.slice(0,-1));
    }

    const clear=()=>{
        setResult("");
    }

    const equal=()=>{
        try{
            setResult(eval(result).toString());
        }
        catch(err){
            setErr(true)
        }
    }

    const close=()=>{
        setErr(false);
    }

    return(
        <div id="std-div">
            <h1 id="standard-label">Standard Calculator</h1>
            <div id="standard">
                <input type="text" id="standard-in" placeholder='0' value={result} title=" Calculation Display box"></input>

                <button value="+" id="plus" onClick={display} title="Addition">
                    +
                </button>
                <button value="-" id="minus" onClick={display} title="Subtraction">
                    -
                </button>
                <button value="*" id="multiply" onClick={display} title="Multiplication">
                    ×
                </button>
                <button value="/" id="divide" onClick={display} title="Division">
                    ÷
                </button>

                <button value="1" id="one" onClick={display} title="1">
                    1
                </button>
                <button value="2" id="two" onClick={display} title="2">
                    2
                </button>
                <button value="3" id="three" onClick={display} title="3">
                    3
                </button>
                <button value="DEL" id="delete" onClick={del} title="Delete a value">
                    DEL
                </button>

                <button value="4" id="four" onClick={display} title="4">
                    4
                </button>
                <button value="5" id="five" onClick={display} title="5">
                    5
                </button>
                <button value="6" id="six" onClick={display} title="6">
                    6
                </button>
                <button value="C" id="clear" onClick={clear} title="Clears the input field">
                    C
                </button>

                <button value="7" id="seven" onClick={display} title="7">
                    7
                </button>
                <button value="8" id="eight" onClick={display} title="8">
                    8
                </button>
                <button value="9" id="nine" onClick={display} title="9">
                    9
                </button>
                <button value="=" id="equal" onClick={equal} title="Calculate">
                    =
                </button>

                <button value="." id="full-stop" onClick={display} title=".">
                    .
                </button>
                <button value="0" id="zero" onClick={display} title="0">
                    0
                </button>
                <button value="," id="comma" onClick={display} title=",">
                    ,
                </button>
            </div>
            {error && <Error value={close}/>}
        </div>    
    );
}
export default Standard;
