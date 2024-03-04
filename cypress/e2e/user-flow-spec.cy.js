describe('User Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://hargrimm-wikihow-v1.p.rapidapi.com/images?count=1', { fixture: 'image.json' }).as('fetchImage');
    cy.visit('/');
    cy.wait('@fetchImage');
  });

  describe('Form Interaction and Submission', () => {
    it('verifies the presence of the title, instructions, image, and buttons', () => {
      cy.get('.form-title').should('be.visible').and('contain', 'DisneyVacation');
      cy.get('.form-instructions').should('be.visible').and('contain', 'This app allows you to generate random wikiHow illustrations');
      cy.get('.form-image').should('be.visible').and('have.attr', 'src', 'https://www.wikihow.com/images/thumb/e/e1/Confront-Someone-Who-Has-Been-Gossiping-About-You-Step-9-Version-2.jpg/aid85591-v4-728px-Confront-Someone-Who-Has-Been-Gossiping-About-You-Step-9-Version-2.jpg.webp');
      cy.get('.form-button').contains('View Saved Captions').should('be.visible');
      cy.get('#captionInput').should('be.visible');
      cy.get('.form-button').contains('Save and Create New').should('be.visible');
      cy.get('.form-button').contains('Save and View All').should('be.visible');
    });

    it('navigates to the Saved Cards page and verifies the no saved captions message', () => {
      cy.get('.form-button').contains('View Saved Captions').click();
      cy.url().should('include', '/saved-cards');
      cy.get('.form-title').should('be.visible').and('contain', 'DisneyVacation');
      cy.get('.form-instructions').should('be.visible').and('contain', 'Manage your saved captions here');
      cy.get('.back-to-home-button').should('be.visible').and('contain', 'Back to Home');
      cy.get('.no-saved-cards-message').should('be.visible').and('contain', 'You have no saved captions.');
    });

    it('allows the user to type into the caption input field', () => {
      const typedText = 'A hilarious caption';
      cy.get('#captionInput').type(typedText);
      cy.get('#captionInput').should('have.value', typedText);
    });

    it('fetches a new image and clears the input field when "Save and Create New" is clicked', () => {
      cy.intercept('GET', 'https://hargrimm-wikihow-v1.p.rapidapi.com/images?count=1', { fixture: 'image2.json' }).as('fetchNewImage');
      const typedText = 'A hilarious caption';
      cy.get('#captionInput').type(typedText);
      cy.get('.form-button').contains('Save and Create New').click();
      cy.wait('@fetchNewImage');
      cy.get('.form-image').should('have.attr', 'src', 'https://www.wikihow.com/images/thumb/e/e3/Answer-%22What-Do-You-Like-About-Me%22-Step-6.jpg/aid85591-v4-728px-Answer-%22What-Do-You-Like-About-Me%22-Step-6.jpg.webp');
      cy.get('#captionInput').should('have.value', '');
    });

    it('saves captions and verifies two saved captions on the Saved Cards page', () => {
      cy.intercept('GET', 'https://hargrimm-wikihow-v1.p.rapidapi.com/images?count=1', { fixture: 'image2.json' }).as('fetchNewImage');
      const firstCaption = 'First hilarious caption';
      cy.get('#captionInput').type(firstCaption);
      cy.get('.form-button').contains('Save and Create New').click();
      cy.wait('@fetchNewImage');
      const secondCaption = 'Second hilarious caption';
      cy.get('#captionInput').clear().type(secondCaption);
      cy.get('.form-button').contains('Save and View All').click();
      cy.url().should('include', '/saved-cards');
      cy.get('.saved-cards').children().should('have.length', 2);
      cy.get('.saved-cards').children().eq(0).as('firstCard');
      cy.get('@firstCard').find('img').should('have.attr', 'src').and('include', 'Confront-Someone-Who-Has-Been-Gossiping-About-You-Step-9-Version-2');
      cy.get('@firstCard').find('p').should('contain', firstCaption);
      cy.get('.saved-cards').children().eq(1).as('secondCard');
      cy.get('@secondCard').find('img').should('have.attr', 'src').and('include', 'Answer-%22What-Do-You-Like-About-Me%22-Step-6');
      cy.get('@secondCard').find('p').should('contain', secondCaption);
    });
  });
});

describe('Error Handling', () => {
  it('displays an error message when the image fetch fails with a 500 error', () => {
    cy.intercept('GET', 'https://hargrimm-wikihow-v1.p.rapidapi.com/images?count=1', {
      statusCode: 500,
      body: 'Internal Server Error',
    }).as('fetchImageFail');
    cy.visit('/');
    cy.wait('@fetchImageFail');
    cy.contains('Failed to fetch new image. Please try again.').should('be.visible');
  });
});




