import HomePageQa from "../../support/pageObject/demoQa/HomePageQa";
import PracticeForm from "../../support/pageObject/demoQa/PracticeForm";
describe("Practice Form",{defaultCommandTimeout:15000},()=>{
    const homePageQa = new HomePageQa()
    const practiceForm = new PracticeForm()
    const inputValue = require("../../fixtures/inputValue.json")
    beforeEach("",()=>{
        cy.viewport(1920,1080)
        cy.visit(Cypress.env("qaBaseUrl"),{failOnStatusCode:false})
    })

    it("Submit practice form",()=>{
        cy.FillAndSubmitPracticeForm()
        cy.VerifyPracticeForm()
    })

})
