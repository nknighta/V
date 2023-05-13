import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import useWindowSize from "../../components/dispSIze";
import {
    Text,
    Box,
} from "@chakra-ui/react";
import linkstyle from "./link.module.sass";

export default function LinkList() {
    const links = [
        {id: 1, href: '/', label: 'Home'},
        {id: 1, href: '/', label: 'Product / Apps'},
        {id: 1, href: '/', label: 'Events / Hackathons'},
        {id: 1, href: '/', label: 'About / IR'},
    ]
    return (
        <div className={linkstyle.Main}>
            <Text fontSize={20}>
                {links.map((link) => (
                    <Box p={10}>
                        <Link href={link.href} key={link.id}>{link.label}</Link>
                    </Box>
                ))}
            </Text>
        </div>
    )
}