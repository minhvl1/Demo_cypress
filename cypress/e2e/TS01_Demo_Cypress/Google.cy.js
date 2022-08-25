describe('google',()=>{
    beforeEach(() =>{
    })

    before(function() {
    })

    it('DEMO_01 Search on Google',() => {
        cy.visit('https://www.google.com.vn/?hl=vi')
        cy.log('111111111111111111111111111111111111')
        cy.xpath("//input[@class='gLFyf gsfi']")
            .type('minh')
            .type('{enter}')
        cy.url().should('contains','https://www.google.com.vn/search?q=minh&')

    })
})