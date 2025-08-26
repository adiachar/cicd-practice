import express from "express";
const app = express();
const PORT = 5000;
import { sum } from "./sum.js";

app.get("/home", (req, res) => {
    res.status(200).json({msg: "Everything Good!"});
});

app.get("/sum/:a/:b", (req, res) => {
    const {a, b} = req.params;
    res.status(200).json({sum: sum(a, b)});
});

app.listen(PORT, () => {
    console.log("Listening to the port :", PORT);
});