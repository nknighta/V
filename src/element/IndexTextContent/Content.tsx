import React, {useState,useEffect} from "react";
import {getWindowSize} from "../../components/disSize";

export default function Content ({children}:any) {
    const {width} = getWindowSize();
    const [debugColor]= useState({backcolor: ""})
    const [debugDisp]= useState({disp: ""});
    const [Stylem]= useState({mm: 0});
    const [returnMode]= useState({p: ""});
    useEffect(() => {
        if (width >= 1060) {
            // when under width of 570px
            debugColor.backcolor = "#000";
            debugDisp.disp = "flex";
            returnMode.p = "PC";
            Stylem.mm = 190;
        } else {
            // when over width of 570px
            debugColor.backcolor = "#000";
            debugDisp.disp = "block";
            returnMode.p = "Mobile"
            Stylem.mm = 20;
        }
    }, [width]);
    return (
        <div style={{
            backgroundColor: debugColor.backcolor,
            display: debugDisp.disp,
            marginLeft: Stylem.mm,
            marginRight: Stylem.mm,
        }}>
            projectV is a metaverse & web3 project that aims to create a new world through<wbr/>
            the fusion of the real and virtual worlds <wbr/>
            by VARIUS<wbr/>
        </div>
    )
}

// Properties<string | number, string&{}> {
