import express, { json } from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { dirname } from "path";
import * as path from 'path';
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", (req,res)=>{
    res.render("index.ejs");
});

app.get("/aboutme", (req,res)=>{
    res.render("aboutme.ejs");
});

app.get("/contactme", (req,res)=>{
    res.render("contactme.ejs");
});

app.get("/projects", (req,res)=>{
    res.render("projects.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });