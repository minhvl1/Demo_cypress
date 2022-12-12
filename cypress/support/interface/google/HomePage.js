class GoogleHomePage{
    getGoogleSearchTextbox(){
        return cy.xpath("//input[@name='q']")
    }

    getGoogleResult(){
        return  cy.xpath("//div[@id='search']")
    }
}
export default GoogleHomePage