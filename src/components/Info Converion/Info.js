import "./Info.css";
import bin from "../../Images/dec-to-bin.png";
import oct from "../../Images/octal.png";
import hex from "../../Images/hex.png";

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

    return(
        <div id="info-con">
            {m!=n ? <h2 className="h2">Explanation :</h2> : ""}
            {m!=n ?
            <p>
                ( {props.val} )<sub>{m}</sub> =
                ( {props.val2} )<sub>{n}</sub><br></br>
                {props.sel=="Decimal" ? <h2 className="h2">For Example :</h2> : ""}
                {props.sel=="Decimal" && props.sel2=="Binary" ? <img src={bin}></img> : ""}
                {props.sel=="Decimal" && props.sel2=="Octal" ? <img src={oct}></img> : ""}
                {props.sel=="Decimal" && props.sel2=="Hexadecimal" ? <img src={hex}></img> : ""}
            </p>
            : " "}
            
        </div>
    );
}
export default Info;