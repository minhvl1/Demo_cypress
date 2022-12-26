describe('Visuals', () => {
    it('Take screenshot and compare the whole page', () => {
        cy.viewport(1920,1080)
        cy.visit('https://wall.alphacoders.com/big.php?i=402929')
        const retryOptions = {
            limit: 5, // max number of retries
            delay: 500 // delay before next iteration, ms
        }
        cy.xpath("//img[@class='main-content']")
        cy.compareSnapshot("image",0.5,retryOptions)
    })

    it('Take screenshot and compare an element', () => {
        cy.viewport(1920,1080)
        cy.visit('https://www.google.com/')
        cy.xpath("//img[@class='lnXdpd']")
            .compareSnapshot('google-logo',0.1)
    })
})