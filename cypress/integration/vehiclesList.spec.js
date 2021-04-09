describe('List Initialization', ()=> {
    it('Shows List', () => {
        cy.intercept('http://localhost:3001/vehicles/vehicles', { fixture: 'vehicles.json' })
        cy.visit('/');
        cy.get('#grid-container>div').eq(6).should('be.visible')
    });
    it('Filter Customers', () => {
      cy.get('#tags-standard').click().type("Johans {downarrow}{enter}")
      cy.get('#grid-container>div').eq(1).should('be.visible')
      cy.get('#grid-container>div').eq(2).should('not.exist')
    });
    it('Filter Status', () => {
      cy.get('#simple-select').click()
      cy.get('[data-value="Connected"]').click()
    });
    it('Changes Language to Swedish', () => {
      cy.get('[data-test-id="change_language"]').click()
      cy.get('[data-test-id="swedish"]').click()
      cy.get('[data-test-id="newsletterId"]').should('have.text', 'Nyhetsbrev');
    });
})