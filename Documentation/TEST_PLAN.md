## 1. Scope
This project tests a minimal Todo application with:
- **UI tests** (React frontend): Login and CRUD operations on todo items.
- **API tests** (Node.js backend): Login and CRUD endpoints.

## 2. Test Coverage
- **UI Automation:**
  - Login with valid credentials
  - Login with invalid credentials
  - Create a new todo
  - Edit an existing todo (could be added to UI)
  - Delete a todo
  
- **API Automation:**
  - POST /login (valid & invalid credentials)
  - GET /items (fetch items)
  - POST /items (create item)
  - PUT /items/:id (update item)
  - DELETE /items/:id (delete item)

## 3. Tools Used
- **Cypress** for UI/E2E testing (easy to configure, good for screenshots)
- **Supertest + Jest** for API testing (integrates well with Express)

## 4. How to Run Tests
### Backend API
```bash
cd backend
npm install
npm start     # starts server on http://localhost:4000
npm test      # runs API tests
```

### Frontend UI
```bash
cd frontend
npm install
npm start     # starts frontend on http://localhost:3000
npx cypress open  # runs Cypress tests interactively
```

## 5. Assumptions
- Credentials are hardcoded (`user@example.com` / `Password123!`).
- Items stored in-memory (reset on server restart).

## 6. Limitations
- No database persistence.
- No security features (fake JWT token).
- No performance/load testing.
