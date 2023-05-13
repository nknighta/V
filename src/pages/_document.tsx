import {Html, Head, Main, NextScript} from 'next/document'
//import style from './docs.module.sass'
import NextLink from "next/link";
import {useState} from "react";
import HeaderElement from "../element/head/default";

export default function Document({title = "| roject V", description = "This is Photo Application!!!!"}) {
    const [date] = useState({
        date: new Date().getFullYear(),
    });
    return (
        <Html>
            <Head/>
            <body style={{backgroundColor: "#000",color: "#fff"}}>
                <HeaderElement/>
                <Main/>
                <NextScript />
            </body>
        </Html>
    )
}

