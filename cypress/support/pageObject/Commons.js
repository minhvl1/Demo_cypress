class Commons{
    sendkeyToElement(value,element){
        return element
            .clear()
            .should("be.empty")
            .type(value)
    }
    verifyElementContainsText(value, element){
        return element.should("contain",value)
    }
}

export default Commons