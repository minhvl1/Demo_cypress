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

    it('DEMO_02 Search on Bing',() => {
        cy.visit('https://www.bing.com/')
        cy.xpath("//input[@class='sb_form_q']")
            .type('minh')
            .type('{enter}')
        cy.url().should('contains','https://www.bing.com/search?q=minh&')
    })
})
