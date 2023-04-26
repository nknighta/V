import {Html, Head, Main, NextScript} from 'next/document'
//import style from './docs.module.sass'
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
                    }}>
                        <h1>projectV<span> - </span> for web3 developers</h1>
                    </Link>
                </div>
                <div style={{
                    display: "flex",
                    width: "50%",
                    justifyContent: "flex-end",
                }}>
                    <h2>v - {version.version}</h2>
                    <span style={{margin: 20}}> </span>
                    <Link href={"/account/create"}
                          style={{
                              color: "#fff",
                              fontSize: 24,
                          }}
                    >JOIN NOW</Link>
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
                display: "flex",
                backgroundColor: "#fff",
                color: "#000",
                height: "auto",
            }}>
                a
            </div>
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <p>@ 2023 - {date.date} - VARIUS dev team / Nknight AMAMIYA</p>
            </div>
            </body>
        </Html>
    )
}

