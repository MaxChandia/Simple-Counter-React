import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

function SimpleCounter (props) {
    return (
        <div className="container" style={{width:"100%",
        height:"150px",
        background: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"}}>
           <FontAwesomeIcon className="fa-5x" icon={faClock} style={{color: "#ffffff",  margin: "25px"}} />
           <div className="sixth" style={{fontSize: "100px",margin: "10px"}}>{props.numberSixth}</div>
            <div className="fifth" style={{fontSize: "100px",  margin: "10px"}}>{props.numberFifth}</div>
           <div className="fourth" style={{fontSize: "100px",  margin: "10px"}}>{props.numberFourth}</div>
           <div className="third" style={{fontSize: "100px",  margin: "10px"}}>{props.numberThird}</div>
           <div className="second" style={{fontSize: "100px",  margin: "10px"}}>{props.numberSecond}</div>
           <div className="first" style={{fontSize: "100px",  margin: "10px"}}>{props.numberFirst}</div>
            
        </div>
    )
};

export default SimpleCounter;