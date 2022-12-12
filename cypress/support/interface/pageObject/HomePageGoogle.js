import GoogleHomePage from "../google/HomePage";
import Commons from "./Commons";

const googleHomePage = new GoogleHomePage()
const commons = new Commons()
class HomePageGoogle {
    inputCMCtoGoogle(){
        return commons.sendkeyToElement("CMC",googleHomePage.getGoogleSearchTextbox())
            }

    sendKeyEnterGoogleSearch(){
        return commons.sendkeyToElement("{enter}",googleHomePage.getGoogleSearchTextbox())
    }
}
export default HomePageGoogle