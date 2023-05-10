import React from "react";
import { AppProps } from "next/app"
import './globals.css'
import {ChakraProvider} from "@chakra-ui/react";

export default function App ({Component,pageProps}:AppProps) {
    return(
        <ChakraProvider>
            <Component{...pageProps}/>
        </ChakraProvider>
    )
}
