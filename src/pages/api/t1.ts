import { NextApiHandler } from "next";
import express from "express";

const handler: NextApiHandler = async (req, res) => {
    const app = express();
    app.get("/api/t1", (req, res) => {

    });
};