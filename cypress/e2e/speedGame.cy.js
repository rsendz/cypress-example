// Luis Reséndez

describe('Speed Game', () => {
    it('how quick to click end game button', () => {
      cy.visit('https://thelab.boozang.com/speedGame')
      cy.get('[data-testid="startBtn"]').click()
      cy.get('.delete', { timeout: 11000 }).click()
      cy.get('[data-testid="message"]').should('have.text', 'Success')
    })
})

