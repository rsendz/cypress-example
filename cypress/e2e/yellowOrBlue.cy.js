// Luis Reséndez

describe('Yellow or Blue', () => {
    it('click if its either yellow or blue', () => {
        cy.visit('https://thelab.boozang.com/yellowOrBlue')
        cy.get('.form_btn').click()

        cy.get('.color').invoke('text').then((color) => {
        if (color.trim() === 'yellow') {
            cy.get('.yellow').click()
        } else if (color.trim() === 'blue') {
            cy.get('.blue').click()
        }
        })

        cy.get('[data-testid="message"]').should('have.text', 'Success!')
    })
})