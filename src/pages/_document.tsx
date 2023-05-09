import {Html, Head, Main, NextScript} from 'next/document'
//import style from './docs.module.sass'
import NextLink from "next/link";
import {useState} from "react";
import NavVar from "../components/navber";
import StyledNextLink from "../components/styledNextLink"

export default function Document({title = "| roject V", description = "This is Photo Application!!!!"}) {
    const [date] = useState({
        date: new Date().getFullYear(),
    });
    return (
        <Html>
            <Head>
                <StyledNextLink url="/" textcolor="#fff" text="aaa" fontsizenum={22} />
            </Head>
            <body style={{backgroundColor: "#000",color: "#fff"}}>
                <Main/>
                <NextScript />
            </body>
            <NextLink href={"/"}>
                a
            </NextLink>
        </Html>
    )
}

