![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![SQLite](https://img.shields.io/badge/SQLite-3.x-blue?logo=sqlite)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?logo=jsonwebtokens)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

# REACT-NODE-SQLITE-JWT
โปรเจกต์ตัวอย่างระบบเว็บแอปที่ใช้ React (frontend) + Node.js (backend) + SQLite เป็นฐานข้อมูล พร้อมระบบรับรองตัวตนด้วย JWT (JSON Web Token)

REACT-NODE-SQLITE-JWT/
├── back-end/ # โค้ดฝั่งเซิร์ฟเวอร์ (Node.js / Express)

├── front-end/ # โค้ดฝั่งไคลเอนต์ (React)

├── .gitattributes

├── LICENSE

└── README.md
---

## 🛠️ คุณสมบัติหลัก

- ระบบลงชื่อเข้าใช้งาน (login) / ลงทะเบียน (register) ด้วย JWT  
- ตรวจสอบ **Authentication / Authorization** บางเส้นทาง (routes)  
- ใช้ SQLite เป็นฐานข้อมูลเบา ๆ สำหรับเก็บผู้ใช้ ข้อมูล session หรือตารางอื่น ๆ  
- โครงสร้างแยก front-end / back-end ทำให้แยกพัฒนาได้ง่าย  

---

## 🚀 การติดตั้ง & เริ่มใช้งาน (Local)

1️⃣ Clone โปรเจกต์

```bash
git clone https://github.com/phichaiyut001/REACT-NODE-SQLITE-JWT.git
cd REACT-NODE-SQLITE-JWT
```
2️⃣ ติดตั้งและรัน Backend
```bash
cd back-end
npm install
```
สร้างไฟล์ .env แล้วใส่ค่า:
```bash
PORT=4000
JWT_SECRET=your_jwt_secret
DB_FILE=./data/database.sqlite
```
รันเซิร์ฟเวอร์:
```bash
npm start
```
3️⃣ ติดตั้งและรัน Frontend
```bash
cd ../front-end
npm install
npm start
```

| Method | Endpoint         | Description                     | Auth |
| ------ | ---------------- | ------------------------------- | ---- |
| POST   | `/api/register`  | สมัครสมาชิก                     | ❌    |
| POST   | `/api/login`     | เข้าสู่ระบบ                     | ❌    |
| GET    | `/api/profile`   | ดึงข้อมูลผู้ใช้                 | ✅    |
| GET    | `/api/protected` | ตัวอย่าง route ที่ต้องใช้ token | ✅    |
