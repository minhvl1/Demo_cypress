class GoogleHomePage{
    getGoogleSearchTextbox(){
        return cy.xpath("//textarea[@class='gLFyf']")
    }

    getGoogleResult(){
        return  cy.xpath("//div[@id='search']")
    }
}
export default GoogleHomePage