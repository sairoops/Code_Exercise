import '@4tw/cypress-drag-drop'
import '../testData/commonData.json'

// const { longWait , minWait, maxWait} = commonData
describe('Checkers Test', () => {
    it('should check', () => {
      cy.visit('https://deckofcardsapi.com/');
      cy.contains('h1.title','Deck of Cards').should('be.visible');
    })
  })
