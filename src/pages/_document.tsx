import {Html, Head, Main, NextScript} from 'next/document'
//import style from './docs.module.sass'
import NextLink from "next/link";
import version from '../../package.json'
import Link from "next/link";
import {useState} from "react";

function DocumentLink(props: any) {
    let subprops = props.color;
    return <Link href={props.href} style={{textDecoration: "none", color: subprops}}>{props.text}</Link>
}

export default function Document({title = "| project V", description = "This is Photo Application!!!!"}) {
    const [date] = useState({
        date: new Date().getFullYear(),
    });
    return (
        <Html>
            <Head/>
            <div style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: 20,
                display: "flex",
                alignItems: "center"
            }}>
                <div style={{
                    width: "50%",
                }}>
                    <Link href="/" style={{
                        textDecoration: "none",
                        color: "#fff",
                        fontSize: 28
                    }}>
                        <h1>projectV<span> - </span> for web3 developers</h1>
                    </Link>
                </div>
                <div style={{
                    display: "flex",
                    width: "50%",
                    justifyContent: "flex-end",
                    fontSize: 26
                }}>
                    <h2>v - {version.version}</h2>
                    <span style={{margin: 20}}> </span>
                    <p
                          style={{
                              color: "#fff",
                              fontSize: 24,
                          }}
                    >JOIN NOW</p>
                </div>
            </div>
            <header>
            </header>
            <body style={{backgroundColor: "#000", color: "#fff"}}>
            {/*there is Main content*/}
            <Main/>
            <NextScript/>
            {/*there is footer*/}
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>

            </div>
            <div className={"text-white"}>
                <div className={"flex align-middle justify-center p-4"}>
                    <NextLink href={"https://twitter.com/ama_dev_1"} color={"#fff"}>twitter</NextLink>
                </div>
                <div className={"flex align-middle justify-center p-4"}>
                    <NextLink href={"https://youtube.com/@ama_p213"} color={"#fff"}>My Vlog (JP)</NextLink>
                </div>
                <div className={"flex align-middle justify-center p-4"}>
                    <NextLink href={"https://github.com/nknighta"} color={"#fff"}>GitHub</NextLink>
                </div>
            </div>
            <div className={"flex align-middle justify-center p-14"}>
                <p>@ 2023 - {date.date} - VARIUS dev team / Nknight AMAMIYA</p>
            </div>
            </body>
        </Html>
    )
}

