
describe('Google',()=>{
    // const test = require('cypress/fixtures/test.json');

    beforeEach(() =>{
    })

    before(()=> {
    })

    it('DEMO_01 Search success on Google',() => {
        cy.readFile('cypress/fixtures/test.json').then((obj) => {
            obj.listedDate = '10/12/2022'
            cy.writeFile('cypress/fixtures/test.json', obj)
        })
        cy.readFile('cypress/fixtures/test.json').then((obj) => {
            obj.uuid = '23423423432423432'
            cy.writeFile('cypress/fixtures/test.json', obj)
        })
        cy.log("test")
    })
})
