import conn from "../database.js";

export  async function login (req, res) {
    const rows = await conn.query(
      `SELECT * FROM akun WHERE username = '${req.body.username}'&& password='${req.body.password}'`
    );
    if (rows.length > 0) {
      if (req.body.password === rows[0].password && req.body.username === rows[0].username) {
        res.send("berhasil");
      } else {
        res.status(401).send("user atau Kata sandi salah.");
      }
    } else {
      res.status(401).send("Nama pengguna tidak ditemukan.");
    }
}