## QA Automation Challenge — React + Node Todo App

### 📦 Setup Instructions

#### 1️⃣ Backend (API)
```bash
cd backend
npm install
npm start      # server on http://localhost:4000
npm test       # runs Jest/Supertest API tests
```

#### 2️⃣ Frontend (React)
```bash
cd frontend
npm install
npm start      # app on http://localhost:3000
npx cypress open  # runs Cypress UI tests
```

### 🔑 Default Credentials
```
Email: user@example.com
Password: Password123!
```

### 🛠 Tools Used
- React (Frontend)
- Node.js + Express (Backend API)
- Cypress (UI Tests)
- Supertest + Jest (API Tests)

### ✅ Features Tested
- User login (valid & invalid)
- Add, view, delete todos (UI & API)

### ⚠️ Notes
- Items are **in-memory only**, so data is lost on server restart.
- Authentication is mocked with a static token.

---

Include both folders (`frontend/` and `backend/`) with these tests and submit as a single zip.
