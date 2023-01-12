
describe("Output data to json file",()=>{
    let jsonOutput= "cypress/fixtures/Output.json"

    beforeEach("",()=>{
        cy.visit(Cypress.env('googleBaseUrl'))
    })

    it("Search CMC in google",()=>{
        cy.writeFile(jsonOutput, { name: 'Eliza', email: 'eliza@example.com' })
        cy.readFile(jsonOutput).then((data) => {
            data.address = 'ha noi'
            data.gender = 'male'
            data.mail = 'gmail'
            cy.writeFile(jsonOutput, JSON.stringify(data))
        })
    })

    it("Search CMC in google",()=>{
    cy.readFile(jsonOutput).then((data) => {
        data.username= 'minh'
        cy.writeFile(jsonOutput, JSON.stringify(data))
        })
    })

    it("display data json file ",()=> {
        cy.readFile(jsonOutput).then((user) => {
           // cy.log(JSON.stringify(user))

            for(let i =0; i< Object.values(user).length; i++){
            cy.log(Object.keys(user)[i]+ " : " +Object.values(user)[i])
            }
        })
    })


})
