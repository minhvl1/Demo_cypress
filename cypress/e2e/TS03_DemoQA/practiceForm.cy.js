describe("Practice Form",{defaultCommandTimeout:5000},()=>{

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
            .type("123123123123")

        cy.xpath("//div[@class=' css-yk16xz-control']").type("NCR{enter}")
        cy.xpath("(//div[@class=' css-1hwfws3'])[2]").type("Delhi{enter}")

        cy.xpath("//button[@id='submit']").click()

        cy.xpath("//div[contains(text(),'Thanks for submitting the form')]")
            .should("be.visible")
    })

    })
