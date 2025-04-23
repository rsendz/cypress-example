describe('Form Fill', () => {
    it('adds information to a form', () => {
        cy.visit('https://thelab.boozang.com/formFill')
        cy.get(':nth-child(1) > input').type('Luis')
        cy.get(':nth-child(2) > input').type('R1')
        cy.get(':nth-child(3) > input').type('luis1@gmail.com')
        cy.get(':nth-child(4) > input').type('123456')
        cy.get('.btn_section > .form_btn').click()

        cy.wait(1000)

        cy.get(':nth-child(1) > input').type('Luis')
        cy.get(':nth-child(2) > input').type('R2')
        cy.get(':nth-child(3) > input').type('luis2@gmail.com')
        cy.get(':nth-child(4) > input').type('123456')
        cy.get('.btn_section > .form_btn').click()

        cy.wait(1000)

        cy.get('.orange').click()

        cy.get('.print_form').should('contain.text', 'Luis')
        cy.get('.print_form').should('contain.text', 'R1')
        cy.get('.print_form').should('contain.text', 'luis1@gmail.com')

        cy.get('.print_form').should('contain.text', 'Luis')
        cy.get('.print_form').should('contain.text', 'R2')
        cy.get('.print_form').should('contain.text', 'luis2@gmail.com')
    })
})