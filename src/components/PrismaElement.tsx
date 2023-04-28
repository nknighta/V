import React, {useState} from "react";
// import Layout from "../components/layout";
import {useRouter} from "next/router";

export default function PrismaElementIndex () {

}

const PrismaSendData = () => {
    const [data, setData] = useState({});
    //const [loading, setLoading] = useState(false);
    const [error ,setError] = useState(false);
    const Router = useRouter();
    const sendData = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try{
            const res = await fetch('/api/prisma', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            await Router.push('/api/prisma');
        }
        catch (err) {
            setError(err);
        }
    };
}

// fix git commiting source code.
