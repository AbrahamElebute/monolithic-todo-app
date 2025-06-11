# 📝 Monolithic To-Do App — Node.js + SQLite

This is my first **fullstack to-do application**, built with a **monolithic backend** architecture using **Node.js** and **SQLite**. It features a simple yet functional to-do system where you can create, update, and delete tasks — all backed by real database logic and structured routes.

---

## 🚀 Tech Stack

- **Backend**: Node.js + Express  
- **Database**: SQLite (`better-sqlite3`)  
- **Frontend**: HTML + CSS + JavaScript  
- **Auth**: JWT (JSON Web Token) middleware  

---

## 📌 Features

- Add, update, and delete todos  
- JWT-based user authentication  
- Persistent storage with SQLite  
- RESTful API routes  
- Organized and modular file structure  


---

## 🧠 What I Learned

- Building a monolithic backend from scratch  
- Structuring an Express app with routing and middleware  
- Using SQLite for lightweight database operations  
- Implementing authentication using JWT  
- Handling CRUD operations with raw SQL  

---

## 📦 Setup Instructions

```bash
git clone https://github.com/your-username/monolithic-todo-app.git
cd monolithic-todo-app
npm install
node --env-file=.env src/server.js
