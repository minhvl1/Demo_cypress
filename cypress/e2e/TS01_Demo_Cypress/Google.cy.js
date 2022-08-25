describe('google',()=>{
    beforeEach(() =>{
    })

    before(()=> {
    })
    it('DEMO_01 Search success on Google',() => {
        cy.visit('https://www.google.com.vn/?hl=vi')
        cy.xpath("//input[@class='gLFyf gsfi']")
            .type('minh')
            .type('{enter}')
        cy.url().should('contains','https://www.google.com.vn/search?q=minh&')
    })

    it('DEMO_02 Search on Yahoo',() => {
        cy.visit('https://vn.yahoo.com/')
        cy.xpath("//input[@class='_yb_1w9gc']")
            .type('minh')
            .type('{enter}')
        cy.url().should('contains','https://vn.search.yahoo.com/search?p=minh&')
    })
})
