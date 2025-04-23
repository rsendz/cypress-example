// Luis Reséndez

describe('Wait Game', () => {
    it('wait 5 seconds to click on a button', () => {
      cy.visit('https://thelab.boozang.com/waitGame')
      cy.get('[data-testid="startBtn"]').click()
      cy.wait(5000)
      cy.get('.delete').click()
      cy.get('[data-testid="message"]').should('have.text', 'Success!')
    })
})

