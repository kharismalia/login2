import express from "express";
import conn from "./database.js";
import { addUser } from "./route/regist.js";
//LOGIN
import { login } from "./route/login.js";


const app = express();
app.use(express.static("public"));
app.use(express.json());

app.post("/api/login",addUser);
app.post("/api/daftar",addUser);
app.listen(3001,()=>{
    console.log(`port telah berjalan di 3000`);
})