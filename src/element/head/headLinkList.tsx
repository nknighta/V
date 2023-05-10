import React from "react";
import NextLink from "next/link";

const people2 = [
    'Docs',
    'product',
    'About',
    'Events / Hackathon',
    'Contact',
];

const HeadMenuLinksLoop = (): JSX.Element => {
    const listItems: JSX.Element[] = people2.map((person: string) =>
        <button
            style={{
                backgroundColor: "",
                padding: 13,
                listStyle: "none",
            }}
        >
            <NextLink href={"/"}>
                {person}
            </NextLink>
        </button>
    );
    return <ul className={"flex"}>{listItems}</ul>;
}

export default HeadMenuLinksLoop;