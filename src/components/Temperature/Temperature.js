import './Temperature.css';
import {useState} from 'react';
import Error from '../Error/Error';

const Temperature=()=>{

    document.title="Calculator";

    const [error,setErr]=useState(false);

    const [solution,setSolution]=useState("");
    const [solution2,setSolution2]=useState("");
    let tempSelect=document.getElementById("temp-select");
    let tempSelect2=document.getElementById("temp-select2");

    const [celsius,setCelsius]=useState("Celsius");
    const [fahrenheit,setFahrenheit]=useState("Fahrenheit");
    const [kelvin,setKelvin]=useState("Kelvin");

    const result=(event)=>{
        setSolution(solution.concat(event.target.value));
    }

    const delet=()=>{
        setSolution(solution.slice(0,-1));
    }

    const clean=()=>{
        setSolution("");
    }

    const close=()=>{
        setErr(false);
    }

    const calc=()=>{

        let solution1=parseInt(solution);

        if(tempSelect.value==celsius && tempSelect2.value==celsius){
            setErr(true);
        }
        if(tempSelect.value==celsius && tempSelect2.value==fahrenheit){
            setSolution2((solution1*9/5) +32);
        }
        if(tempSelect.value==celsius && tempSelect2.value==kelvin){
            setSolution2(273.15 + solution1);
        }

        if(tempSelect.value==fahrenheit && tempSelect2.value==fahrenheit){
            setErr(true);
        }
        if(tempSelect.value==fahrenheit && tempSelect2.value==celsius){
            setSolution2((solution1-32)*5/9);
        }
        if(tempSelect.value==fahrenheit && tempSelect2.value==kelvin){
            setSolution2(((solution1-32)*5/9) + 273.15);
        }

        if(tempSelect.value==kelvin && tempSelect2.value==kelvin){
            setErr(true);
        }
        if(tempSelect.value==kelvin && tempSelect2.value==celsius){
            setSolution2(solution1-273.15);
        }
        if(tempSelect.value==kelvin && tempSelect2.value==fahrenheit){
            setSolution2(((solution1-273.15) *9/5) +32);
        }
    }

    return(
        <div id="temp-div">
            <h1 id="label2">Temperature Calculator</h1>
            <div id="temperature">
                <input type="text" id="temp-in" placeholder="0" value={solution} title="Value for Conversion"></input>
                <select id="temp-select">
                    <option value={celsius}>Celsius</option>
                    <option value={fahrenheit}>Fahrenheit</option>
                    <option value={kelvin}>Kelvin</option>
                </select>

                <input type="text" id="temp-in2" placeholder="0" readOnly value={solution2} title="Value after Conversion"></input>
                <select id="temp-select2">
                    <option value={celsius}>Celsius</option>
                    <option value={fahrenheit}>Fahrenheit</option>
                    <option value={kelvin}>Kelvin</option>
                </select>

                <button value="1" id="temp1" onClick={result} title="1">
                    1
                </button>
                <button value="2" id="temp2" onClick={result} title="2">
                    2
                </button>
                <button value="3" id="temp3" onClick={result} title="3">
                    3
                </button>
                <button value="DEL" id="temp-del" onClick={delet} title="Delete a value">
                    DEL
                </button>

                <button value="4" id="temp4" onClick={result} title="4">
                    4
                </button>
                <button value="5" id="temp5" onClick={result} title="5">
                    5
                </button>
                <button value="6" id="temp6" onClick={result} title="6">
                    6
                </button>
                <button value="C" id="temp-clear" onClick={clean} title="Clears the input field">
                    C
                </button>

                <button value="7" id="temp7" onClick={result} title="7">
                    7
                </button>
                <button value="8" id="temp8" onClick={result} title="8">
                    8
                </button>
                <button value="9" id="temp9" onClick={result} title="9">
                    9
                </button>
                <button value="=" id="temp-equal" onClick={calc} title="Calculate">
                    =
                </button>

                <button value="." id="temp-stop" onClick={result} title=".">
                    .
                </button>
                <button value="0" id="temp0" onClick={result} title="0">
                    0
                </button>
                <button value="," id="temp-comma" onClick={result} title=",">
                    ,
                </button>
            </div>
            {error && <Error value={close} />}
        </div>
    );
}
export default Temperature;