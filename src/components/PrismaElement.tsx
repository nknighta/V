import {prisma} from "./prisma";
import {useState} from "react";
import {Prisma} from "@prisma/client";

type dbq = {
    id: number,
    name: string,
    email: string,
}
export default function PrismaElement() :JSX.Element{
    async function getPosts() {
        const posts = await prisma.user.findMany({
            where: {id:3},
            select: {
                name: true,
                email: true,
            }
        })
        return posts
    }

    return (
        <div>
            <h1>Prisma</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.email}</h2>
                        <p>{post.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}