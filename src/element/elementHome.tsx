import NextImage from "next/image";
import HMeta from "../components/headerMeta";
import image from "../../public/image.png";
import style from "./elementHome.module.sass";
import { getWindowSize } from "../components/disSize";
import {useState} from "react";
import ResElementTest from "./res/resElementTest";
import Content from "./IndexTextContent/Content";
import {TextContent} from "./textContent";
import PrismaElement from "../components/PrismaElement";

const About =
    `
    About VARIUS?
    `;



export default function ElementHome({children}: any) {
    const {height, width} = getWindowSize();
    // must chege bg and text color then release
    const Devmode = process.env.NEXT_PUBLIC_TEST === 'DEV' ? "#000" : "#fff";
    const DevmodeBack = process.env.NEXT_PUBLIC_TEST === 'DEV' ? "#fff000" : "#000";
    const textcontent = `AWESOME METAVERSE\n team VARIUS`
    const w = 50;
    const [date]= useState({
        date: new Date().getFullYear(),
    });
    // {(date:number
    return (
        <div>
            <HMeta pageTitle={"Welcome to projectV"}/>
            {children}
            <div style={{
                backgroundColor: "#000",
                color: "#fff",
            }}>
                <div className={style.Main}>
                    <div>
                        <NextImage src={image}
                                   alt={"test image naaa"}
                                   width={900}
                                   height={500}/>
                    </div>
                    <div className={style.Inner} style={{
                        color: "#000",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        whiteSpace: "pre-wrap",
                    }}>
                        <h1>{textcontent}</h1>
                    </div>
                </div>
                <div style={{
                    height: 150
                }}>
                    {/*space*/}
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 50,
                    whiteSpace: "pre-wrap",
                }}>
                    <h1 style={{
                        margin: `0px ${w}px 0 ${w}px`,
                    }}>
                        <Content />
                    </h1>
                </div>
                <div style={{
                    height: 250
                }}>
                    {/*space*/}
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 50,
                    whiteSpace: "pre-wrap",
                }}>
                    <h1>{About}</h1>
                </div>
                <PrismaElement />
                <p>{date.date}</p>
                <div>
                    {width}px
                    {height}px
                    <p>
                    </p>
                </div>
                <div style={{
                    height: 150
                }}>
                    {/*space*/}
                </div>
            </div>
        </div>
    )
}

