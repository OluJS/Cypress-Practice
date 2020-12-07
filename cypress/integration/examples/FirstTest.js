describe('MyTestSuite', function(){

    it('Verify Title Of The Page - positive', function(){
        
        // Go to webpage
        cy.visit('https://demo.nopcommerce.com/')
        
        // Verify title, eq = equal to
        cy.title().should('eq', 'nopCommerce demo store')

    })

    it('Verify Title Of The Page - negative', function(){
        
        // Go to webpage
        cy.visit('https://demo.nopcommerce.com/')
        
        // Verify title, eq = equal to
        cy.title().should('eq', 'nopCommerce store')

    })
})