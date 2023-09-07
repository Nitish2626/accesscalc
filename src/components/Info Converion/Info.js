import { useState } from "react";
import "./Info.css";

const Info=(props)=>{

    let m,n;
    if(props.sel=="Binary"){
        m=2;
    }
    else if(props.sel=="Decimal"){
        m=10;
    }
    else if(props.sel=="Octal"){
        m=8;
    }
    else{
        m=16;
    }

    if(props.sel2=="Binary"){
        n=2;
    }
    else if(props.sel2=="Decimal"){
        n=10;
    }
    else if(props.sel2=="Octal"){
        n=8;
    }
    else{
        n=16;
    }

    const [quorem,setQuorem]=useState([]);

    return(
        <div id="info-con">
            <h2 id="h2">Explanation :</h2>
            <p>
                ( {props.val} )<sub>{m}</sub> =
                ( {props.val2} )<sub>{n}</sub>
                <br></br>
            </p>
            <table>
                <tr>
                    <th>{props.sel2} Number</th>
                    <th>Quotient</th>
                    <th>Remainder</th>
                </tr>
                {quorem.map((item)=>{
                    return <tr>
                        <th>{n}</th>
                        <th>{item.q}</th>
                        <th>{item.re}</th>
                    </tr>
                })}
            </table>
        </div>
    );
}
export default Info;