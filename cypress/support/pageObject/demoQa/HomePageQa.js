import HomePageQaUI from "../../interface/demoQa/HomePageQaUI"

const homePageQaUI = new HomePageQaUI()

class HomePageQa{
    goToPracticePage(){
        return homePageQaUI.getFormButton().click()
    }
}

export default HomePageQa