describe('Login',()=>{
    beforeEach(() =>{
    })

    before(()=> {
    })

    it('DEMO_01 Login success',() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        cy.xpath('//input[@id="txt-username"]').type('John Doe')
        cy.xpath('//input[@id="txt-password"]').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()
        cy.wait(3000)
        cy.xpath('//h1[text()="CURA Healthcare Service"]').should('be.visible')
    })

    it('DEMO_02 Login fail',() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        cy.xpath('//input[@id="txt-username"]').type('John Doe1')
        cy.xpath('//input[@id="txt-password"]').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()
        cy.wait(3000)
        cy.xpath('//p[@class="lead text-danger"]').should('be.visible')
    })


})
