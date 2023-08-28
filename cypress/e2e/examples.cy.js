describe('Various examples', () => {

    beforeEach(() =>{
      cy.visit('/examples')
  
    })
    
    it('Muli-page testing', () => {
      cy.getDataTest('nav-why-cypress').click()
      cy.location("pathname").should("equal", "/")

      
    })
 
  it.only('grudges', () =>{
cy.contains(/Add Some Grudges/i)

/* cy.getDataTest('grudge-input').find('input').as('subscribe-input')
      cy.get('@subscribe-input').type('My grudge') */
cy.getDataTest('grudge-list').within(() =>{
cy.get('li').should('have.length', 0)

})
      //or do it using within
      cy.getDataTest('grudge-input').within(()=>{
        cy.get('input').type('some grudge')
        
        })
        
       


      cy.getDataTest('grudge-button').click()
      cy.getDataTest('grudge-list').within(() =>{
        cy.get('li').should('have.length', 1)
        // below wont work because an x char is also rendered to delete grudge and it will actually render as 'some grudgex'
        //cy.get('li').its(0).should('have.text', 'some grudge')
        //instead use contains
        cy.get('li').its(0).should('contains.text', 'some grudge')
        
        })
      cy.contains(/Add Some Grudges/i).should('not.exist')
      cy.contains(/Grudges/i).should('exist')


      cy.getDataTest('delete-grudge').click()
      cy.get('li').should('have.length', 0)
      

 
  })
 
  })
