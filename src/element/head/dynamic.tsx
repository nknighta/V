import {getWindowSize} from "../../components/dispSIze";
import NextLink from "next/link";
import React,{useState,useEffect} from "react";
import {width} from "@mui/system";


export default  class DynamicElement extends React.Component {
    render() {
        const Dynamics = () => {}
        const dynamicElementDesktop = () => {
            return (
                <>
                    <h1></h1>
                </>
            )
        }
        const dynamicElementMobile = () => {

        }
        return (
            <>
                <h1>Test</h1>
            </>
        )
    }
}

function DynamicSubFunction () {
    let heightc:number = 24;
    let widthc:number = 24;
    const width = widthc = null ? 0 : widthc;
    const height = widthc = null ? 0 : heightc;
    const text:string = "";
    return (
        <div style={{
            width: `${width}px`,
            height: `${height}px`,
        }}>
            <p>{text}</p>
        </div>
    )
}

function DynamicSubFuctionStyled () {}