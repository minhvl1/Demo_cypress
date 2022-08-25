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

    it('DEMO_01.1 Search success on Google',() => {
        cy.visit('https://www.google.com.vn/?hl=vi')
        cy.xpath("//input[@class='gLFyf gsfi']")
            .type('minh')
            .type('{enter}')
        cy.url().should('contains','https://www.google.com.vn/search?q=minh&')
    })

    it('DEMO_02 Search fail on Google',() => {
        cy.visit('https://www.google.com.vn/?hl=vi')
        cy.xpath("//input[@class='gLFyf gsfi']")
            .type('minh')
            .type('{enter}')
        cy.url().should('contains','https://www.google.com.vn/search?q=minh&')
        cy.xpath("//input[@class='gLFyf gsfiasdasdasdassa']")
    })
})