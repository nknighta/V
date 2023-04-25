import React, {useState,useEffect} from "react";
import {getWindowSize} from "../../components/disSize";

export default function ResElementTest ({children}:any) {
    const {width} = getWindowSize();
    const [debugColor]= useState({backcolor: ""})
    const [debugDisp]= useState({disp: ""});
    const [returnMode]= useState({p: ""});
    useEffect(() => {
        if (width >= 570) {
            // when under width of 570px
            debugColor.backcolor = "red";
            debugDisp.disp = "flex";
            returnMode.p = "PC";
        } else {
            // when over width of 570px
            debugColor.backcolor = "blue";
            debugDisp.disp = "block";
            returnMode.p = "Mobile"
        }
    }, [width]);
    return (
        <div style={{
            backgroundColor: debugColor.backcolor,
            display: debugDisp.disp,
        }}>
            <h1>{returnMode.p}</h1>
            <div style={{backgroundColor: "yellow",color: "black"}}>
                aiaia
            </div>
            <div style={{backgroundColor: "yellow",color: "black"}}>
                aiaia
            </div>
            <div style={{backgroundColor: "yellow",color: "black"}}>
                aiaia
            </div>
        </div>
    )
}

// Properties<string | number, string&{}> {
