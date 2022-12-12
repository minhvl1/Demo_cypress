describe("Google",()=>{

    beforeEach("",()=>{
        cy.visit(Cypress.env('googleBaseUrl'))
    })

    it("Search CMC in google",()=>{
        cy.xpath("//input[@name='q']")
            .should("be.empty")
            .type("CMC{enter}")
        cy.xpath("//div[@id='search']")
            .should("contain","CMC")
    })
})