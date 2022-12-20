import HomePageQa from "../../support/pageObject/demoQa/HomePageQa";
import PracticeForm from "../../support/pageObject/demoQa/PracticeForm";
describe("Practice Form",{defaultCommandTimeout:15000},()=>{
    const homePageQa = new HomePageQa()
    const practiceForm = new PracticeForm()
    const inputValue = require("../../fixtures/inputValue.json")
    beforeEach("",()=>{
        cy.viewport(1920,1080)
        cy.visit("https://demoqa.com",{failOnStatusCode:false})
    })

    it("Submit practice form",()=>{

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

    })
