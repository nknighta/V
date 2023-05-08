import HMeta from "../components/headerMeta";
//import { getWindowSize } from "../components/disSize";
import {useState} from "react";
import NextLink from "next/link";
const About =
    `
    About VARIUS?
    `;

export default function ElementHome({children}: any) {
    const [date]= useState({
        date: new Date().getFullYear(),
    });
    // {(date:number
    return (
        <div>
            <HMeta pageTitle={"Home"}/>
            {children}
            <div
                style={{
                    display: "flex",
                    height: "35em",
                    backgroundColor: "#fff",
                    color: "#000",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "50px",
                }}
            >
                <h1 style={{
                    fontSize: "2.61em",
                }}>Released projectV Beta 1 !!</h1>
            </div>
            <div
                style={{
                    display: "flex",
                    height: "1em",
                    backgroundColor: "#fff",
                    color: "#000",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                }}
            >
                <h2 style={{
                    fontSize: "1.5em",
                    paddingBottom: 50
                }}>Join the Beta Program</h2>
            </div>
            <div>
                <NextLink href={"/test"}>
                    Test Page here
                </NextLink>
            </div>
        </div>
    )
}

