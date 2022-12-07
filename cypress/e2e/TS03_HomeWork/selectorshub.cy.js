describe("Selectorhub",()=>{

    it("Close Shadow-root popup",{includeShadowDom: true},()=>{

        cy.visit("https://selectorshub.com/xpath-practice-page/")
        cy.xpath("//div[@id='userName']").scrollIntoView()
        cy.wait(3000)


        // Method A

        // single shadow
        cy.get('input#kils').type("minh")

        //multiple shadow
        cy.get('input#pizza').type("PIZZZA")


        // Method B
        // cy.get('div#userName').shadow()
        //     .find('input#kils')
        //     .type("minh")
        //
        // cy.get('div#userName').shadow()
        //     .find('div#app2').shadow()
        //     .find('input#pizza')
        //     .type("PIZZA")
    })
})
