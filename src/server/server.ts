import express, { Request, Response } from "express";
import next,{ NextApiHandler } from "next";
import axios from 'axios';
import {any} from "prop-types";
import bodyParser from "body-parser";
const dev = process.env.NODE_ENV === "development";
const port = 4100;
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
(async () => {
    try {
        await app.prepare();
        server.all("*", (req: Request, res: Response) => {
            return handle(req, res);
        });
        server.listen(port, () => {
            console.log(`${port}で起動中`);
        });
    } catch (e) {
        console.error(e);
    }
})();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.get(`/api/t1`, (req: Request, res: Response) => {
    res.send("Hello World!");
});

server.get(`/api/t2`, (req: Request, res: Response) => {
        res.json({"aa": "bb"});
});

server.get("/api/t3", (req: Request, res: Response) => {
    res.json({
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    });
});

