import { useState } from 'react';
import './VML.css';
import Error from '../Error/Error';

const VML=()=>{

    document.title="Calculator";

    const [error,setErr]=useState(false);

    const [answer,setAnswer]=useState("");
    const [result,setResult]=useState("");
    let select=document.getElementById("select");
    let select2=document.getElementById("select2");

    const [kg,setKg]=useState("Kilogram (kg)");
    const [g,setG]=useState("Gram (g)");
    const [pound,setPound]=useState("Pound (lbs)");
    const [tonne,setTonne]=useState("Tonne (ton)");
    const [litre,setLitre]=useState("Litre (l)");
    const [inch,setInch]=useState("Inch (inch)");
    const [foot,setFoot]=useState("Foot (ft)");
    const [yard,setYard]=useState("Yard (yd)");
    const [km,setKm]=useState("Kilometre (km)");
    const [m,setM]=useState("Metre (m)");
    const [cm,setCm]=useState("Centimetre (cm)");
    const [mm,setMm]=useState("Milimetre (mm)");
    const [ml,setMl]=useState("Mililitre (ml)");

    const show=(event)=>{
        setAnswer(answer.concat(event.target.value));
    }

    const del=()=>{
        setAnswer(answer.slice(0,-1));
    }

    const clear=()=>{
        setAnswer("");
    }

    const close=()=>{
        setErr(false);
    }

    const calculate=()=>{

        if(select.value==kg && select2.value==kg){
            setErr(true);
        }
        if(select.value==kg && select2.value==g) {
            setResult(answer*1000);
        }
        if(select.value==kg && select2.value==pound) {
            setResult(answer*2.2);
        }
        if (select.value==kg && select2.value==tonne) {
            setResult(answer/1000);
        }

        if(select.value==g && select2.value==g){
            setErr(true);
        }
        if(select.value==g && select2.value==kg) {
            setResult(answer/1000);
        }
        if(select.value==g && select2.value==pound) {
            setResult(answer/453.6);
        }
        if (select.value==g && select2.value==tonne) {
            setResult(answer/1000000);
        }

        if(select.value==pound && select2.value==pound){
            setErr(true);
        }
        if(select.value==pound && select2.value==kg) {
            setResult(answer/2.2);
        }
        if(select.value==pound && select2.value==g){
            setResult(answer*453.6);
        }
        if (select.value==pound && select2.value==tonne) {
            setResult(answer/2205);
        }

        if(select.value==tonne && select2.value==tonne){
            setErr(true);
        }
        if(select.value==tonne && select2.value==kg) {
            setResult(answer*1000);
        }
        if(select.value==tonne && select2.value==g){
            setResult(answer*1000000);
        }
        if(select.value==tonne && select2.value==pound) {
            setResult(answer*2205);
        }

        if(select.value==litre && select2.value==litre){
            setErr(true);
        }
        if(select.value==litre && select2.value==ml){
            setResult(answer*1000);
        }

        if(select.value==ml && select2.value==ml){
            setErr(true);
        }
        if(select.value==ml && select2.value==litre){
            setResult(answer/1000);
        }

        if(select.value==inch && select2.value==inch){
            setErr(true);
        }
        if(select.value==inch && select2.value==foot){
            setResult(answer/12);
        }
        if(select.value==inch && select2.value==yard){
            setResult(answer/36);
        }
        if(select.value==inch && select2.value==m){
            setResult(answer/39.37);
        }
        if(select.value==inch && select2.value==km){
            setResult(answer/39370);
        }
        if(select.value==inch && select2.value==cm){
            setResult(answer*2.54);
        }
        if(select.value==inch && select2.value==mm){
            setResult(answer*25.4);
        }

        if(select.value==foot && select2.value==foot){
            setErr(true);
        }
        if(select.value==foot && select2.value==inch){
            setResult(answer*12);
        }
        if(select.value==foot && select2.value==yard){
            setResult(answer/3);
        }
        if(select.value==foot && select2.value==km){
            setResult(answer/3281);
        }
        if(select.value==foot && select2.value==m){
            setResult(answer/3.281);
        }
        if(select.value==foot && select2.value==cm){
            setResult(answer*30.48);
        }
        if(select.value==foot && select2.value==mm){
            setResult(answer*304.8);
        }

        if(select.value==yard && select2.value==yard){
            setErr(true);
        }
        if(select.value==yard && select2.value==inch){
            setResult(answer*36);
        }
        if(select.value==yard && select2.value==foot){
            setResult(answer*3);
        }
        if(select.value==yard && select2.value==km){
            setResult(answer/1094);
        }
        if(select.value==yard && select2.value==m){
            setResult(answer/1.094);
        }
        if(select.value==yard && select2.value==cm){
            setResult(answer*91.44);
        }
        if(select.value==yard && select2.value==mm){
            setResult(answer*914.4);
        }

        if(select.value==km && select2.value==km){
            setErr(true);
        }
        if(select.value==km && select2.value==inch){
            setResult(answer*39370);
        }
        if(select.value==km && select2.value==foot){
            setResult(answer*3281);
        }
        if(select.value==km && select2.value==yard){
            setResult(answer*1094);
        }
        if(select.value==km && select2.value==m){
            setResult(answer*1000);
        }
        if(select.value==km && select2.value==cm){
            setResult(answer*100000);
        }
        if(select.value==km && select2.value==mm){
            setResult(answer*1000000);
        }

        if(select.value==m && select2.value==m){
            setErr(true);
        }
        if(select.value==m && select2.value==inch){
            setResult(answer*39.37);
        }
        if(select.value==m && select2.value==foot){
            setResult(answer*3.281);
        }
        if(select.value==m && select2.value==yard){
            setResult(answer*1.094);
        }
        if(select.value==m && select2.value==km){
            setResult(answer/1000);
        }
        if(select.value==m && select2.value==cm){
            setResult(answer/100);
        }
        if(select.value==m && select2.value==mm){
            setResult(answer*1000);
        }

        if(select.value==cm && select2.value==cm){
            setErr(true);
        }
        if(select.value==cm && select2.value==inch){
            setResult(answer/2.54);
        }
        if(select.value==cm && select2.value==foot){
            setResult(answer/30.48);
        }
        if(select.value==cm && select2.value==yard){
            setResult(answer/91.44);
        }
        if(select.value==cm && select2.value==km){
            setResult(answer/100000);
        }
        if(select.value==cm && select2.value==m){
            setResult(answer/100);
        }
        if(select.value==cm && select2.value==mm){
            setResult(answer*10);
        }

        if(select.value==mm && select2.value==mm){
            setErr(true);
        }
        if(select.value==mm && select2.value==inch){
            setResult(answer/25.4);
        }
        if(select.value==mm && select2.value==foot){
            setResult(answer/304.8);
        }
        if(select.value==mm && select2.value==yard){
            setResult(answer/914.4);
        }
        if(select.value==mm && select2.value==km){
            setResult(answer/1000000);
        }
        if(select.value==mm && select2.value==m){
            setResult(answer/1000);
        }
        if(select.value==mm && select2.value==cm){
            setResult(answer/10);
        }
    }

    return(
        <div id="vml-div">
            <h1 id="label1">Volume,Mass,Length Calculator</h1>
            <div id="vml">
                <input type="text" id="vml-in" placeholder="0" value={answer} title="Value for Conversion"></input>
                <select id="select" title="Selected Unit Value">
                    <option value={kg}>Kilogram (kg)</option>
                    <option value={g}>Gram (g)</option>
                    <option value={pound}>Pound (lbs)</option>
                    <option value={tonne}>Tonne (ton)</option>
                    <option value={litre}>Litre (l)</option>
                    <option value={inch}>Inch (inch)</option>
                    <option value={foot}>Foot (ft)</option>
                    <option value={yard}>Yard (yd)</option>
                    <option value={km}>Kilometre (km)</option>
                    <option value={m}>Metre (m)</option>
                    <option value={cm}>Centimetre (cm)</option>
                    <option value={mm}>Milimetre (mm)</option>
                    <option value={ml}>Mililitre (ml)</option>
                </select>
                <input type="text" id="vml-in2" placeholder="0" value={result}readOnly title="Value after Conversion"></input>
                <select id="select2" title="Selected Converion Unit Value">
                        <option value={kg}>Kilogram (kg)</option>
                        <option value={g}>Gram (g)</option>
                        <option value={pound}>Pound (lbs)</option>
                        <option value={tonne}>Tonne (ton)</option>
                        <option value={litre}>Litre (l)</option>
                        <option value={inch}>Inch (inch)</option>
                        <option value={foot}>Foot (ft)</option>
                        <option value={yard}>Yard (yd)</option>
                        <option value={km}>Kilometre (km)</option>
                        <option value={m}>Metre (m)</option>
                        <option value={cm}>Centimetre (cm)</option>
                        <option value={mm}>Milimetre (mm)</option>
                        <option value={ml}>Mililitre (ml)</option>
                    </select>

                <button value="1" id="one1" onClick={show} title="1">
                    1
                </button>
                <button value="2" id="two1" onClick={show} title="2">
                    2
                </button>
                <button value="3" id="three1" onClick={show} title="3">
                    3
                </button>
                <button value="DEL" id="delete1" onClick={del} title="Delete a value">
                    DEL
                </button>


                <button value="4" id="four1" className='button' onClick={show} title="4">
                    4
                </button>
                <button value="5" id="five1" className='button' onClick={show} title="5">
                    5
                </button>
                <button value="6" id="six1" className='button' onClick={show} title="6">
                    6
                </button>
                <button value="C" id="clear1" className='clear-btn' onClick={clear} title="Clears the input field">
                    C
                </button>


                <button value="7" id="seven1" className='button' onClick={show} title="7">
                    7
                </button>
                <button value="8" id="eight1" className='button' onClick={show} title="8">
                    8
                </button>
                <button value="9" id="nine1" className='button' onClick={show} title="9">
                    9
                </button>
                <button value="=" id="equal1" className='equal-btn' onClick={calculate} title="Calculate">
                    =
                </button>

                <button value="." id="full-stop1" className='button' onClick={show} title=".">
                    .
                </button>
                <button value="0" id="zero1" className='button' onClick={show} title="0">
                    0
                </button>
                <button value="," id="comma1" className='button' onClick={show} title=",">
                    ,
                </button>
            </div>
            {error && <Error value={close} />}
        </div>
    );
}
export default VML;