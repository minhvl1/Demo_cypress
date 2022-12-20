class PracticeFormUI {
    getPracticeForm(){
        return cy.xpath("//div[@class='element-list collapse show']")
    }

    getFistNameTextbox(){
        return cy.xpath("//input[@id='firstName']")
    }

    getLastNameTextbox(){
        return cy.xpath("//input[@id='lastName']")
    }

    getGenderRadio(gender){
        switch (gender.toLowerCase()){
            case "male":
                return cy.xpath("//label[@for='gender-radio-1']")
                break

            case "female":
                return cy.xpath("//label[@for='gender-radio-2']")
                break

            case "other":
                return cy.xpath("//label[@for='gender-radio-3']")
                break
        }

    }

    getUserNumberInput(){
        return cy.xpath("//input[@id='userNumber']")
    }

    getStateInput(){
        return cy.xpath("//div[@class=' css-yk16xz-control']")
    }

    getCityInput(){
        return cy.xpath("(//div[@class=' css-1hwfws3'])[2]")
    }

    getButtonSubmit(){
        return cy.xpath("//button[@id='submit']")
    }

    getDateOfBirthInput(){
        return cy.xpath("//input[@id='dateOfBirthInput']")
    }

    getMonthOfBirth(){
        return cy.xpath("//select[@class='react-datepicker__month-select']")
    }

    getYearOfBirth(){
        return cy.xpath("//select[@class='react-datepicker__year-select']")
    }

    getDayOfBirth(day){
        return cy.xpath("//div[@class='react-datepicker__day react-datepicker__day--0"+day+"']").click()
    }

}

export default PracticeFormUI