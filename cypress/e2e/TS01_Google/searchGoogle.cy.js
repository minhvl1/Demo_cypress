import HomePageGoogle from "../../support/interface/pageObject/HomePageGoogle";
import ResultPageGoogle from "../../support/interface/pageObject/ResultPageGoogle";
describe("Google",()=>{
    const homePageGoogle = new HomePageGoogle()
    const resultPageGoogle = new ResultPageGoogle()

    beforeEach("",()=>{
        cy.visit(Cypress.env('googleBaseUrl'))
    })

    it("Search CMC in google",()=>{
        homePageGoogle.inputCMCtoGoogle()
        homePageGoogle.sendKeyEnterGoogleSearch()
        resultPageGoogle.verifyPageResultContainsCMC()
    })
})