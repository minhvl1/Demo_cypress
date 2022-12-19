describe("Practice Form",{defaultCommandTimeout:15000},()=>{

    beforeEach("",()=>{
        cy.viewport(1920,1080)
        cy.visit("https://demoqa.com",{failOnStatusCode:false})
    })

    it("Submit practice form",()=>{
        cy.xpath("//div[@class='card mt-4 top-card'][2]").click()
        cy.xpath("//div[@class='element-list collapse show']").click()

        cy.xpath("//input[@id='firstName']")
            .clear()
            .should("be.empty")
            .type("minh")
        cy.xpath("//input[@id='lastName']")
            .clear()
            .should("be.empty")
            .type("vu")
        cy.xpath("//label[@for='gender-radio-3']").click()

        cy.xpath("//input[@id='userNumber']")
            .clear()
            .should("be.empty")
            .type("1231231231")

        cy.xpath("//div[@class=' css-yk16xz-control']").type("NCR{enter}")
        cy.xpath("(//div[@class=' css-1hwfws3'])[2]").type("Delhi{enter}")

        cy.xpath("//button[@id='submit']").click()

        cy.xpath("//div[contains(text(),'Thanks for submitting the form')]")
            .should("be.visible")

        cy.xpath("//td[text()='Student Name']/following-sibling::td")
            .invoke('text')
            .then((text) => {
                assert.equal(text,"minh vu","equal input name")
      })

        cy.xpath("//td[text()='Mobile']/following-sibling::td")
            .invoke('text')
            .then((text) => {
                assert.equal(text,"1231231231","equal number")
            })

        cy.xpath("//td[text()='State and City']/following-sibling::td")
            .invoke('text')
            .then((text) => {
                assert.equal(text,"NCR Delhi","equal country")
            })
    })

    })
