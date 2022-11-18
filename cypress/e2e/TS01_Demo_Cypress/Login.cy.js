import CuraHomePage from "../../support/interface/login/CuraHomePage";

describe('Login',()=>{
    const curaHomePage = new CuraHomePage();

    beforeEach(() =>{
    })

    before(()=> {
    })

    it('DEMO_01 Login success',() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        curaHomePage.getUsername().type('John Doe')
        curaHomePage.getPassword().type('ThisIsNotAPassword')
        curaHomePage.getLoginButton().click()
        cy.wait(3000)
        curaHomePage.getSuccessLoginMessage().should('be.visible')
    })

    it('DEMO_02 Login fail',() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        curaHomePage.getUsername().type('John Doe')
        curaHomePage.getPassword().type('ThisIsPassword')
        curaHomePage.getLoginButton().click()
        cy.wait(3000)
        curaHomePage.getFailLoginMessage().should('be.visible')
    })


})
