// Luis Reséndez

describe('Sorted list', () => {
    it('adds information to a list', () => {
        cy.visit('https://thelab.boozang.com/sortedList')
        cy.get('input').type('hola')
        cy.get('.form_btn').click()

        cy.wait(1000)
        
        cy.get('input').type('mundo')
        cy.get('.form_btn').click()

    })
})