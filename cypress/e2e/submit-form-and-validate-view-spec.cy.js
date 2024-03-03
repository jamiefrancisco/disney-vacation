describe('Form Submission Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://hargrimm-wikihow-v1.p.rapidapi.com/images?count=1', { fixture: 'image.json' }).as('fetchImage');
    cy.visit('/');
    cy.wait('@fetchImage');
  });

  describe('Form Interaction and Submission', () => {
    it('displays the form elements and allows entering a caption', () => {
      cy.get('.form-image').should('be.visible');
      cy.get('#captionInput').should('be.visible').type('A funny caption for the meme').should('have.value', 'A funny caption for the meme');
      cy.get('.form-button').contains('Save and Create New').should('be.visible');
      cy.get('.form-button').contains('Save and View All').should('be.visible');
      cy.get('.form-button').contains('View Saved Cards').should('be.visible');
    });

    it('submits the form and clears the input', () => {
      const testCaption = 'A funny caption for the meme';
      cy.get('#captionInput').type(testCaption);
      cy.get('.form-button').contains('Save and Create New').click();
      cy.get('#captionInput').should('have.value', '');
    });

    it('navigates to the saved cards view on "Save and View All" submission', () => {
      const testCaption = 'Another funny caption';
      cy.get('#captionInput').type(testCaption);
      cy.get('.form-button').contains('Save and View All').click();
      cy.url().should('include', '/saved-cards');
    });
  });

  describe('Validation on New Page', () => {
    it('displays the correct content on the saved cards page', () => {
    });
  });
});
