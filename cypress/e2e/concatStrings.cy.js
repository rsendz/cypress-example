describe('Concatenate strings', () => {
    it('concatenates two given strings', () => {
      cy.visit('https://thelab.boozang.com/concatStrings')
      cy.get('.strings_section > :nth-child(2)').click()
  
      cy.get('.string1').invoke('text').then((text1) => {
        cy.get('.string2').invoke('text').then((text2) => {
          const result = text1.trim() + text2.trim()
          cy.get('input').type(result)
          cy.wait(1000)
          cy.get('.text-center > .form_btn').click()
          cy.get('[data-testid="message"]').contains('Success!')
        })
      })
    })
})