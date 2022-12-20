
describe("DatePicker",{defaultCommandTimeout:10000},()=>{
    const month = require("../../fixtures/ConvertMonth.json")

    beforeEach("",()=>{
        // cy.viewport(1920,1080)
        cy.visit("https://demo.automationtesting.in/Datepicker.html",{failOnStatusCode:false})
    })

    it("DatePicker Disabled",()=>{
        cy.xpath("//img[@class='imgdp']").scrollIntoView()
        cy.xpath("//img[@class='imgdp']").click({ force: true })


        cy.xpath("//span[@class='ui-datepicker-month']")
                .invoke('text')

        let expectYear = 2023
        let expectMonth = 6
        let expectDate = 17

        cy.xpath("//span[@class='ui-datepicker-year']")
            .invoke('text').then((currentYear) => {

            cy.xpath("//span[@class='ui-datepicker-month']")
                .invoke('text').then((currentMonth) => {

                cy.log(currentYear)
                cy.log(currentMonth)
                let convertMonth=0
                for(let i=0;i<Object.keys(month).length;i++){
                 if(currentMonth==Object.keys(month)[i]){
                     convertMonth=Object.values(month)[i]
                 }
                }

                let deviantYear=Math.abs(expectYear-currentYear)
                let deviantMonth = Math.abs(expectMonth-convertMonth)

                cy.log(deviantYear)
                cy.log(deviantMonth)


                //calculate year
                if(expectYear<currentYear){
                    for(let i=0;i<deviantYear*12;i++){
                        cy.xpath("//span[contains(text(),'Prev')]").click()
                    }

                }
                else if(expectYear>currentYear){
                    for(let i=0;i<deviantYear*12;i++) {
                        cy.xpath("//span[contains(text(),'Next')]").click()
                    }
                }


                //calculate month
                if(expectMonth<convertMonth){
                    for (let i=0;i<deviantMonth;i++){
                        cy.xpath("//span[contains(text(),'Prev')]").click()
                    }
                }

                else if(expectMonth>convertMonth){
                    for (let i=0;i<deviantMonth;i++){
                        cy.xpath("//span[contains(text(),'Next')]").click()
                    }
                }
            })
        })

        cy.xpath("//a[text()='"+expectDate+"']").click()
    })

})
