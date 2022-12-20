import PracticeFormUI from "../../interface/demoQa/PracticeFormUI";
import Commons from "../Commons";

const commons= new Commons()
const practiceFromUI = new PracticeFormUI()
const inputValue = require("../../../fixtures/inputValue.json")
class PracticeForm{
    getPracticeForm(){
        return practiceFromUI.getPracticeForm().click()
    }

    inputFirstName(){
        return commons.sendkeyToElement(inputValue.firstName,practiceFromUI.getFistNameTextbox())
    }

    inputLastName(){
        return commons.sendkeyToElement(inputValue.lastName,practiceFromUI.getLastNameTextbox())
    }

    selectGender(){
        return practiceFromUI.getGenderRadio(inputValue.gender).click()
    }

    inputUserNumber(){
        return practiceFromUI.getUserNumberInput().type(inputValue.phoneNumber)
    }

    selectState(){
        return practiceFromUI.getStateInput().type(inputValue.state+"{enter}")
    }

    selectCity(){
        return practiceFromUI.getCityInput().type(inputValue.city+"{enter}")
    }

    clickDateOfBirthTextbox(){
        return practiceFromUI.getDateOfBirthInput().click()
    }

    selectYearOfBirth(){
        return practiceFromUI.getYearOfBirth().select(inputValue.yearOfBirth)
    }

    selectMonthOfBirth(){
        return practiceFromUI.getMonthOfBirth().select(inputValue.monthOfBirth)
    }

    selectDayOfBirth(){
        return practiceFromUI.getDayOfBirth(inputValue.dayOfBirth)
    }

    clickSubmitButton(){
        return practiceFromUI.getButtonSubmit().click()
    }
}

export default PracticeForm
