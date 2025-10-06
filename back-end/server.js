import express from "express";
import sqlite3 from "sqlite3";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import dotenv from "dotenv";

//setup ตั้งต่า package
dotenv.config();
const app = express();
const PORT = 8000;
const sqlite = sqlite3.verbose();
const JWT_SECRET = process.env.JWT_SECRET;

//setup midleware
app.use(cors());
app.use(express.json());

//connect sqlite
const db = new sqlite.Database("./database.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connect to the SQLite Database. ⛓️‍💥");
});

//สร้าง database
db.run(` CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )`);

//สร้าง API Endpoints

//Register Endpoints
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "username and password are required" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const sql = `INSERT INTO users (username, password) VALUES (?, ?)`;

  db.run(sql, [username, hashedPassword], function (err) {
    if (err) {
      if (err.errno === 19) {
        return res.status(409).json({ message: "username already exists" });
      }
      return res.status(500).json({ message: "Database error" });
    }

    res
      .status(201)
      .json({ message: "user register successfully", userId: this.lastID });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is Running at http://localhost:${PORT}`);
});
