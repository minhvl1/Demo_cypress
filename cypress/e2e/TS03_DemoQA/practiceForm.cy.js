describe("Practice Form",{defaultCommandTimeout:15000},()=>{
    const inputValue = require("../../fixtures/inputValue.json")
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
            .type(inputValue.firstName)
        cy.xpath("//input[@id='lastName']")
            .clear()
            .should("be.empty")
            .type(inputValue.lastName)
        cy.xpath("//label[@for='gender-radio-3']").click()

        cy.xpath("//input[@id='userNumber']")
            .clear()
            .should("be.empty")
            .type(inputValue.phoneNumber)

        cy.xpath("//div[@class=' css-yk16xz-control']").type(inputValue.state+"{enter}")
        cy.xpath("(//div[@class=' css-1hwfws3'])[2]").type(inputValue.city+"{enter}")

        cy.xpath("//button[@id='submit']").click()

        cy.xpath("//div[contains(text(),'Thanks for submitting the form')]")
            .should("be.visible")

        cy.xpath("//td[text()='Student Name']/following-sibling::td")
            .invoke('text')
            .then((text) => {
                assert.equal(text,inputValue.firstName+" "+inputValue.lastName,"equal input name")
      })

        cy.xpath("//td[text()='Mobile']/following-sibling::td")
            .invoke('text')
            .then((text) => {
                assert.equal(text,inputValue.phoneNumber,"equal number")
            })

        cy.xpath("//td[text()='State and City']/following-sibling::td")
            .invoke('text')
            .then((text) => {
                assert.equal(text,inputValue.state+" "+inputValue.city,"equal country")
            })
    })

    })
