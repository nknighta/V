import React, {useState,useEffect} from "react";
import {getWindowSize} from "../../components/disSize";

export default function ResElement ({children}:any) {
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
            whiteSpace: "pre-wrap",
        }}>
            <h1 style={{
                margin: `0px`,
            }}>
                projectV<wbr/>
            </h1>
        </div>
    )
}

// Properties<string | number, string&{}> {
