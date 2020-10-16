describe('Advance Forms', () => {
    
    beforeEach(() => cy.visit('http://localhost:3000/pizza'))

    describe('filling inputs and submit', () => {

        describe('Filling out inputs and cancelling', () => {
            it('submit button is disabled', () => {
                cy.get('#submit-btn').should('be.disabled')
            })
        })

        it('can type and see if the correct name', () => {
            cy.get('input[name=name]')
             .type('Carlos Colindres')
             .should('have.value', 'Carlos Colindres')
            
             cy.get('input[name=text]')
            .type('well done and extra sauce')

            cy.get('input[name=cheese]')
            .click()

            cy.get('select').select('large')

            cy.get('#submit-btn')
            .click()
        })
    })

    
})