import GoogleHomePage from "../../support/interface/google/HomePage";

describe('Google',()=>{
    const googleHomePage = new GoogleHomePage ()
    beforeEach(() =>{
    })

    before(()=> {
    })
    it('DEMO_01 Search success on Google',() => {
        cy.visit('https://www.google.com.vn/?hl=vi')
        googleHomePage.getGoogleSearchTextbox()
            .type('minh')
            .type('{enter}')
        cy.wait(3000)
        cy.url().should('contains','https://www.google.com.vn/search?q=minh&')

    })

})
