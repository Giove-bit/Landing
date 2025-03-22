describe('Login Test', () => {
  it('Login con utente giove', () => {
    cy.visit('http://localhost:4200');

    cy.get('[data-cy="username"]').type('user');
    cy.get('[data-cy="password"]').type('pass');
    cy.get('[data-cy="login-btn"]').click();
    cy.wait(1000);

    cy.url().should('include', '/home');
    cy.contains('Benvenuto in TechSolutions');
  });
});
