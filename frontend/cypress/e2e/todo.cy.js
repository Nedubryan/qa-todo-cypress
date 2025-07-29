describe("Todo CRUD Operations", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");

    // ✅ Login
    cy.get("input[type='email']").should("be.visible").type("user@example.com");
    cy.get("input[type='password']").should("be.visible").type("Password123!");
    cy.contains("Login").click();

    // ✅ Wait for redirect to /todos
    cy.url({ timeout: 10000 }).should("include", "/todos");

    // ✅ Ensure Add button is visible
    cy.contains("Add", { timeout: 10000 }).should("be.visible");
  });

  it("should create a new todo", () => {
    cy.get("input[placeholder='Add new todo']").type("Buy Milk");
    cy.contains("Add").click();
    cy.contains("Buy Milk").should("exist");
  });

  it("should delete a todo", () => {
    cy.get("input[placeholder='Add new todo']").type("Go Shopping");
    cy.contains("Add").click();

    // Delete the todo
    cy.contains("Go Shopping")
      .parent()
      .find("button")
      .contains("Delete")
      .click();

    cy.contains("Go Shopping").should("not.exist");
  });
});
