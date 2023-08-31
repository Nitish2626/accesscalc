import { useState } from "react";
import "./Number.css";
import Error from "../Error/Error";
import Table from "../Table Converion/Table";

const Number = (props) => {

    const [error, setErr] = useState(false);
    const close = () => {
        setErr(false);
    }

    const cli = () => {
        props.value();
    }

    const [svalue, setSvalue] = useState("Binary");
    const [s2value, setS2value] = useState("Binary");

    const changeValue = (events) => {
        setSvalue(events.target.value);
    }

    const changeValue2 = (events) => {
        setS2value(events.target.value);
    }

    const [ivalue, setIvalue] = useState();
    const [ivalue2, setIvalue2] = useState();

    const changeIvalue = (events) => {
        setIvalue(events.target.value);
    }

    const dec_to_bdoh = (value,n) => {
        let quo = value;
        let rem = [];
        let r;

        while (quo > 1) {
            r = quo % n;
            if(r==10){
                r="A";
            }
            else if(r==11){
                r="B";
            }
            else if(r==12){
                r="C";
            }
            else if(r==13){
                r="D";
            }
            else if(r==14){
                r="E";
            }
            else if(r==15){
                r="F";
            }
            quo = Math.floor(quo / n);
            rem.push(r);
        }
        let y=rem.reverse();
        if(quo==1){
            y.unshift(1);
        }
        let x=y.toString();
        return x;
    }

    const bin_to_bdoh=(n)=>{
        let bin=[];
        let pow=[];
        let dec=0;
        for(let i=0;i<ivalue.length;i++){
            if(ivalue[i]=="A"){
                bin[i]=ivalue[i].replaceAll("A",10);
            }
            else if(ivalue[i]=="B"){
                bin[i]=ivalue[i].replaceAll("B",11);
            }
            else if(ivalue[i]=="C"){
                bin[i]=ivalue[i].replaceAll("C",12);
            }
            else if(ivalue[i]=="D"){
                bin[i]=ivalue[i].replaceAll("D",13);
            }
            else if(ivalue[i]=="E"){
                bin[i]=ivalue[i].replaceAll("E",14);
            }
            else if(ivalue[i]=="F"){
                bin[i]=ivalue[i].replaceAll("F",15);
            }
            else{
                bin[i]=ivalue[i];
            }
        }
        for(let j=bin.length-1;j>0;j--){
            pow.push(Math.pow(n,j));
        }
        pow.push(1);
        for(let k=0;k<bin.length;k++){
            dec+=bin[k]*pow[k];
        }
        let d=dec.toString();
        return d;
    }

    const convert=()=>{
        if(svalue=="Binary" && s2value=="Binary"){
            setErr(true);
            setIvalue2(" ");
        }
        else if(svalue=="Binary" && s2value=="Decimal"){
            setIvalue2(bin_to_bdoh(2).replaceAll(",",""));
        }
        else if(svalue=="Binary" && s2value=="Octal"){
            setIvalue2(dec_to_bdoh(bin_to_bdoh(2),8).replaceAll(",",""));
        }
        else if(svalue=="Binary" && s2value=="Hexadecimal"){
            setIvalue2(dec_to_bdoh(bin_to_bdoh(2),16).replaceAll(",",""));
        }

        else if(svalue=="Decimal" && s2value=="Binary"){
            setIvalue2(dec_to_bdoh(ivalue,2).replaceAll(",",""));
        }
        else if(svalue=="Decimal" && s2value=="Decimal"){
            setErr(true);
            setIvalue2(" ");
        }
        else if(svalue=="Decimal" && s2value=="Octal"){
            setIvalue2(dec_to_bdoh(ivalue,8).replaceAll(",",""));
        }
        else if(svalue=="Decimal" && s2value=="Hexadecimal"){
            setIvalue2(dec_to_bdoh(ivalue,16).replaceAll(",",""));
        }

        else if(svalue=="Octal" && s2value=="Binary"){
            setIvalue2(dec_to_bdoh(bin_to_bdoh(8),2).replaceAll(",",""));
        }
        else if(svalue=="Octal" && s2value=="Decimal"){
            setIvalue2(bin_to_bdoh(8).replaceAll(",",""));
        }
        else if(svalue=="Octal" && s2value=="Octal"){
            setErr(true);
            setIvalue2(" ");
        }
        else if(svalue=="Octal" && s2value=="Hexadecimal"){
            setIvalue2(dec_to_bdoh(bin_to_bdoh(8),16).replaceAll(",",""));
        }

        else if(svalue=="Hexadecimal" && s2value=="Binary"){
            setIvalue2(dec_to_bdoh(bin_to_bdoh(16),2).replaceAll(",",""));
        }
        else if(svalue=="Hexadecimal" && s2value=="Decimal"){
            setIvalue2(bin_to_bdoh(16).replaceAll(",",""));
        }
        else if(svalue=="Hexadecimal" && s2value=="Octal"){
            setIvalue2(dec_to_bdoh(bin_to_bdoh(16),8).replaceAll(",",""));
        }
        else if(svalue=="Hexadecimal" && s2value=="Hexadecimal"){
            setErr(true);
            setIvalue2(" ");
        }
    }

    return (
        <div id="num">
            <div id="head">
                <button onClick={cli} title="Back">⇦</button>
                <h1>Number System</h1>
            </div>

            <div id="box">
                <select className="box-select" onChange={changeValue}>
                    <option>Binary</option>
                    <option>Decimal</option>
                    <option>Octal</option>
                    <option>Hexadecimal</option>
                </select>

                <label className="label">{svalue} Number</label>
                <input type="text" className="in-field" onChange={changeIvalue}></input>

                <span>To</span>

                <select className="box-select" onChange={changeValue2}>
                    <option>Binary</option>
                    <option>Decimal</option>
                    <option>Octal</option>
                    <option>Hexadecimal</option>
                </select>

                <label className="label">{s2value} Number</label>
                <input type="text" className="in-field" id="in-field" readOnly value={ivalue2}></input>

                <button id="con-btn" onClick={convert}>Convert</button>
            </div>
            <Table />
            {error && <Error value={close} />}
        </div>
    );
}

export default Number;