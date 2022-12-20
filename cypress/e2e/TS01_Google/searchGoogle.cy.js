import HomePageGoogle from "../../support/pageObject/google/HomePageGoogle";
import ResultPageGoogle from "../../support/pageObject/google/ResultPageGoogle";
describe("Google",()=>{
    const homePageGoogle = new HomePageGoogle()
    const resultPageGoogle = new ResultPageGoogle()

    beforeEach("",()=>{
        cy.visit(Cypress.env('googleBaseUrl'))
    })

    it("Search CMC in google",()=>{
        homePageGoogle.inputCMCtoGoogle()
        resultPageGoogle.verifyPageResultContainsCMC()
    })
})