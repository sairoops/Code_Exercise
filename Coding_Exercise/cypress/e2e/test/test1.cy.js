import '@4tw/cypress-drag-drop'
import commonData from '../testData/commonData.json'

const { longWait , minWait, maxWait} = commonData
describe('Checkers Test', () => {
    it('should check', () => {
      cy.visit('https://www.gamesforthebrain.com/game/checkers/');
      cy.contains('p#message','Select an orange piece to move').should('be.visible');
      cy.get('div#board>div:nth-of-type(6)>img:nth-of-type(2)').click();
      cy.get('div#board>div:nth-of-type(5)>img:nth-of-type(3)').click();
      
      cy.wait(longWait);
      cy.get('p#message').should('be.visible');
      cy.get('div#board>div:nth-of-type(6)>img:nth-of-type(4)').click();
      cy.get('div#board>div:nth-of-type(5)>img:nth-of-type(5)').click();

      cy.wait(longWait);
      cy.get('p#message').should('be.visible');
      cy.get('div#board>div:nth-of-type(7)>img:nth-of-type(3)').click();
      cy.get('div#board>div:nth-of-type(5)>img:nth-of-type(5)').click();
      
      cy.wait(longWait);
      cy.get('p#message').should('be.visible');
      cy.get('div#board>div:nth-of-type(7)>img:nth-of-type(5)').click();
      cy.get('div#board>div:nth-of-type(6)>img:nth-of-type(4)').click();

      cy.wait(longWait);
      cy.get('p#message').should('be.visible');
      cy.get('div#board>div:nth-of-type(6)>img:nth-of-type(8)').click();
      cy.get('div#board>div:nth-of-type(5)>img:nth-of-type(7)').click();

      cy.wait(longWait);
      cy.get('body > div.all > div.page > div.content > div.gameWrapper > p.footnote > a:nth-child(1)').click();
      cy.wait(maxWait);
      cy.contains('p#message','Select an orange piece to move');
    })
  })