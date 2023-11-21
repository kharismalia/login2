import conn from "../database.js";

export async function addUser(req, res) {
   const rows= await conn.query(
      `INSERT INTO akun VALUES (NULL,'${req.body.username}','${req.body.password}')`
    );
    res.send("pengguna telah ditambahkan.");


    }

    