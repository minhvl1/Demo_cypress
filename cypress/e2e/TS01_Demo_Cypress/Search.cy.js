describe('Google',()=>{
    beforeEach(() =>{
    })

    before(()=> {
    })
    it('DEMO_01 Search success on Google',() => {
        cy.visit('https://www.google.com.vn/?hl=vi')
        cy.xpath("//input[@name='q']")
            .type('minh')
            .type('{enter}')
        cy.wait(3000)
        cy.url().should('contains','https://www.google.com.vn/search?q=minh&')

    })

})
