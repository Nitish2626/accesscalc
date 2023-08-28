import { useState } from 'react';
import './Time.css';
import Error from '../Error/Error';

const Time=()=>{

    document.title="Calculator";

    const [error,setErr]=useState(false);

    const [ans,setAns]=useState("");
    const [res,setRes]=useState("");
    let tselect=document.getElementById("time-select");
    let tselect2=document.getElementById("time-select2");

    const [y,setY]=useState("Year");
    const [m,setM]=useState("Month");
    const [w,setW]=useState("Week");
    const [d,setD]=useState("Day");
    const [h,setH]=useState("Hour");
    const [mi,setMi]=useState("Minute");
    const [s,setS]=useState("Second");
    const [mili,setMili]=useState("Milisecond");
    const [micro,setMicro]=useState("Microsecond");

    const sol=(event)=>{
        setAns(ans.concat(event.target.value));
    }

    const remove=()=>{
        setAns(ans.slice(0,-1));
    }

    const clean1=()=>{
        setAns("");
    }

    const close=()=>{
        setErr(false);
    }

    const equ=()=>{

        if(tselect.value==y && tselect2.value==y){
            setErr(true);
        }
        if(tselect.value==y && tselect2.value==m){
            setRes(ans*12);
        }
        if(tselect.value==y && tselect2.value==w){
            setRes(ans*52.143);
        }
        if(tselect.value==y && tselect2.value==d){
            setRes(ans*365);
        }
        if(tselect.value==y && tselect2.value==h){
            setRes(ans*8760);
        }
        if(tselect.value==y && tselect2.value==mi){
            setRes(ans*525600);
        }
        if(tselect.value==y && tselect2.value==s){
            setRes(ans*31557600);
        }
        if(tselect.value==y && tselect2.value==mili){
            setRes(ans*31557600000);
        }
        if(tselect.value==y && tselect2.value==micro){
            setRes(ans*31557600000000);
        }

        if(tselect.value==m && tselect2.value==m){
            setErr(true);
        }
        if(tselect.value==m && tselect2.value==y){
            setRes(ans/12);
        }
        if(tselect.value==m && tselect2.value==w){
            setRes(ans*4.345);
        }
        if(tselect.value==m && tselect2.value==d){
            setRes(ans*30.417);
        }
        if(tselect.value==m && tselect2.value==h){
            setRes(ans*730);
        }
        if(tselect.value==m && tselect2.value==mi){
            setRes(ans*43800);
        }
        if(tselect.value==m && tselect2.value==s){
            setRes(ans*2628000);
        }
        if(tselect.value==m && tselect2.value==mili){
            setRes(ans*2628000000);
        }
        if(tselect.value==m && tselect2.value==micro){
            setRes(ans*2628000000000);
        }

        if(tselect.value==w && tselect2.value==w){
            setErr(true);
        } 
        if(tselect.value==w && tselect2.value==y){
            setRes(ans/52.143);
        } 
        if(tselect.value==w && tselect2.value==m){
            setRes(ans/4.345);
        } 
        if(tselect.value==w && tselect2.value==d){
            setRes(ans*7);
        } 
        if(tselect.value==w && tselect2.value==h){
            setRes(ans*168);
        } 
        if(tselect.value==w && tselect2.value==mi){
            setRes(ans*10080);
        }
        if(tselect.value==w && tselect2.value==s){
            setRes(ans*604800);
        }
        if(tselect.value==w && tselect2.value==mili){
            setRes(ans*604800000);
        }
        if(tselect.value==w && tselect2.value==micro){
            setRes(ans*604800000000);
        }
        
        if(tselect.value==d && tselect2.value==d){
            setErr(true);
        }
        if(tselect.value==d && tselect2.value==y){
            setRes(ans/365);
        }
        if(tselect.value==d && tselect2.value==m){
            setRes(ans/30.417);
        }
        if(tselect.value==d && tselect2.value==w){
            setRes(ans/7);
        } 
        if(tselect.value==d && tselect2.value==h){
            setRes(ans*24);
        }
        if(tselect.value==d && tselect2.value==mi){
            setRes(ans*1440);
        }
        if(tselect.value==d && tselect2.value==s){
            setRes(ans*86400);
        }
        if(tselect.value==d && tselect2.value==mili){
            setRes(ans*86400000);
        }
        if(tselect.value==d && tselect2.value==micro){
            setRes(ans*86400000000);
        }

        if(tselect.value==h && tselect2.value==h){
            setErr(true);
        }
        if(tselect.value==h && tselect2.value==y){
            setRes(ans/8670);
        }
        if(tselect.value==h && tselect2.value==m){
            setRes(ans/730);
        }
        if(tselect.value==h && tselect2.value==w){
            setRes(ans/168);
        }
        if(tselect.value==h && tselect2.value==d){
            setRes(ans/24);
        }
        if(tselect.value==h && tselect2.value==mi){
            setRes(ans*60);
        }
        if(tselect.value==h && tselect2.value==s){
            setRes(ans*3600);
        }
        if(tselect.value==h && tselect2.value==mili){
            setRes(ans*3600000);
        }
        if(tselect.value==h && tselect2.value==micro){
            setRes(ans*3600000000);
        }

        if(tselect.value==mi && tselect2.value==mi){
            setErr(true);
        }
        if(tselect.value==mi && tselect2.value==y){
            setRes(ans/525600);
        }
        if(tselect.value==mi && tselect2.value==m){
            setRes(ans/43800);
        }
        if(tselect.value==mi && tselect2.value==w){
            setRes(ans/10080);
        }
        if(tselect.value==mi && tselect2.value==d){
            setRes(ans/1440);
        }
        if(tselect.value==mi && tselect2.value==h){
            setRes(ans/60);
        }
        if(tselect.value==mi && tselect2.value==s){
            setRes(ans*60);
        }
        if(tselect.value==mi && tselect2.value==mili){
            setRes(ans*60000);
        }
        if(tselect.value==mi && tselect2.value==micro){
            setRes(ans*60000000);
        }

        if(tselect.value==s && tselect2.value==s){
            setErr(true);
        }
        if(tselect.value==s && tselect2.value==y){
            setRes(ans/31557600);
        }
        if(tselect.value==s && tselect2.value==m){
            setRes(ans/2628000);
        }
        if(tselect.value==s && tselect2.value==w){
            setRes(ans/604800);
        }
        if(tselect.value==s && tselect2.value==d){
            setRes(ans/86400);
        }
        if(tselect.value==s && tselect2.value==h){
            setRes(ans/3600);
        }
        if(tselect.value==s && tselect2.value==mi){
            setRes(ans/60);
        }
        if(tselect.value==s && tselect2.value==mili){
            setRes(ans*1000);
        }
        if(tselect.value==s && tselect2.value==micro){
            setRes(ans*1000000);
        }

        if(tselect.value==mili && tselect2.value==mili){
            setErr(true);
        }
        if(tselect.value==mili && tselect2.value==y){
            setRes(ans/31557600000);
        }
        if(tselect.value==mili && tselect2.value==m){
            setRes(ans/2628000000);
        }
        if(tselect.value==mili && tselect2.value==w){
            setRes(ans/604800000);
        }
        if(tselect.value==mili && tselect2.value==d){
            setRes(ans/86400000);
        }
        if(tselect.value==mili && tselect2.value==h){
            setRes(ans/3600000);
        }
        if(tselect.value==mili && tselect2.value==mi){
            setRes(ans/60000);
        }
        if(tselect.value==mili && tselect2.value==s){
            setRes(ans/1000);
        }
        if(tselect.value==mili && tselect2.value==micro){
            setRes(ans*1000);
        }

        if(tselect.value==micro && tselect2.value==micro){
            setErr(true);
        }
        if(tselect.value==micro && tselect2.value==y){
            setRes(ans/31557600000000);
        }
        if(tselect.value==micro && tselect2.value==m){
            setRes(ans/2628000000000);
        }
        if(tselect.value==micro && tselect2.value==w){
            setRes(ans/604800000000);
        }
        if(tselect.value==micro && tselect2.value==d){
            setRes(ans/86400000000);
        }
        if(tselect.value==micro && tselect2.value==h){
            setRes(ans/3600000000);
        }
        if(tselect.value==micro && tselect2.value==mi){
            setRes(ans/60000000);
        }
        if(tselect.value==micro && tselect2.value==s){
            setRes(ans/1000000);
        }
        if(tselect.value==micro && tselect2.value==mili){
            setRes(ans/1000);
        }
    }

    return(
        <div id="time-div">
            <h1 id="label3">Time Calculator</h1>
            <div id="time">
                <input type="text" id="time-in" placeholder="0" value={ans} title="Value for Conversion"></input>
                <select id="time-select" title="Selected Unit Value">
                    <option value={y}>Year</option>
                    <option value={m}>Month</option>
                    <option value={w}>Week</option>
                    <option value={d}>Day</option>
                    <option value={h}>Hour</option>
                    <option value={mi}>Minute</option>
                    <option value={s}>Second</option>
                    <option value={mili}>Milisecond</option>
                    <option value={micro}>Microsecond</option>
                </select>

                <input type="text" id="time-in2" placeholder="0" value={res} title="Value after Conversion"></input>
                <select id="time-select2" title="Selected Converion Unit Value">
                    <option value={y}>Year</option>
                    <option value={m}>Month</option>
                    <option value={w}>Week</option>
                    <option value={d}>Day</option>
                    <option value={h}>Hour</option>
                    <option value={mi}>Minute</option>
                    <option value={s}>Second</option>
                    <option value={mili}>Milisecond</option>
                    <option value={micro}>Microsecond</option>
                </select>

                <button value="1" id="time1" onClick={sol} title="1">
                    1
                </button>
                <button value="2" id="time2" onClick={sol} title="2">
                    2
                </button>
                <button value="3" id="time3" onClick={sol} title="3">
                    3
                </button>
                <button value="DEL" id="time-del" onClick={remove} title="Delete a value">
                    DEL
                </button>

                <button value="4" id="time4" onClick={sol} title="4">
                    4
                </button>
                <button value="5" id="time5" onClick={sol} title="5">
                    5
                </button>
                <button value="6" id="time6" onClick={sol} title="6">
                    6
                </button>
                <button value="C" id="time-clear" onClick={clean1} title="Clears the input field">
                    C
                </button>

                <button value="7" id="time7" onClick={sol} title="7">
                    7
                </button>
                <button value="8" id="time8" onClick={sol} title="8">
                    8
                </button>
                <button value="9" id="time9" onClick={sol} title="9">
                    9
                </button>
                <button value="=" id="time-equal" onClick={equ} title="Calculate">
                    =
                </button>

                <button value="." id="time-stop" onClick={sol} title=".">
                    .
                </button>
                <button value="0" id="time0" onClick={sol} title="0">
                    0
                </button>
                <button value="," id="time-comma" onClick={sol} title=",">
                    ,
                </button>
            </div>
            {error && <Error value={close} />}
        </div>
    );
}
export default Time;