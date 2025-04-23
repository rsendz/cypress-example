// Luis Reséndez

describe('Speed Game', () => {
    it('passes', () => {
      cy.visit('https://thelab.boozang.com/speedGame')
      cy.get('[data-testid="startBtn"]').click()
      cy.get('.delete', { timeout: 11000 }).click()
      cy.get('[data-testid="message"]').should('have.text', 'Success')
    })
})

