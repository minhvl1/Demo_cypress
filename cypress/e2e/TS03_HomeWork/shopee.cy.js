describe("Shopee",()=>{

it("Close Shadow-root popup",{includeShadowDom: true},()=>{

cy.visit("https://shopee.vn/")

    // cy.xpath('//body').then($body => {
    //     if($body.find('.shopee-popup__close-btn').length){
    //         cy.log("1")
    //         cy.get(".shopee-popup__close-btn").click()
    //     }
    // })

    cy.wait(2000)

    //Method A
    // cy.get('div.shopee-popup__close-btn').click()

    // Method B
    cy.xpath('//shopee-banner-popup-stateful').shadow()
        .find('.home-popup')
        .find('.home-popup__background')
        .find('.home-popup__content')
        .find('div.shopee-popup__close-btn')
        .click()

    // cy.xpath("//a[@class='navbar__link navbar__link--account navbar__link--signup navbar__link--tappable navbar__link--hoverable navbar__link-text navbar__link-text--medium navbar__link-text--normal-case']")
    //     .click()

    })
})
