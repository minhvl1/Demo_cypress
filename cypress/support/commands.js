import HomePageQa from "../support/pageObject/demoQa/HomePageQa";
import PracticeForm from "../support/pageObject/demoQa/PracticeForm";
import inputValue from "../fixtures/inputValue.json";

const homePageQa = new HomePageQa()
const practiceForm = new PracticeForm()
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/**
 * @memberOf cy
 * @method FillAndSubmitPracticeForm
 */

Cypress.Commands.add("FillAndSubmitPracticeForm",()=>{
    homePageQa.goToPracticePage()
    practiceForm.getPracticeForm()
    practiceForm.inputFirstName()
    practiceForm.inputLastName()
    practiceForm.selectGender()
    practiceForm.inputUserNumber()

    practiceForm.clickDateOfBirthTextbox()
    practiceForm.selectYearOfBirth()
    practiceForm.selectMonthOfBirth()
    practiceForm.selectDayOfBirth()

    practiceForm.selectState()
    practiceForm.selectCity()

    practiceForm.clickSubmitButton()

})

/**
 * @memberOf cy
 * @method VerifyPracticeForm
 */

Cypress.Commands.add("VerifyPracticeForm",()=>{
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