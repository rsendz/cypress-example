// Luis Reséndez

describe('Cat shelter', () => {
    it('adds two cats from fixture', () => {
      cy.fixture('cats').then((cats) => {
        cy.visit('https://thelab.boozang.com/catshelter')
  
        cats.forEach((cat) => {
          cy.get('.cat_shelter_header > .link_btn').click()
  
          cy.get('.list_form > :nth-child(1) > input').type(cat.name)
          cy.get('textarea').type(cat.description)
  
          cy.contains('label', cat.goesOutside).click()
  
          cy.get('.text-center > .form_btn').click()
          cy.wait(1000)
        })
  
      })
    })
  })
  