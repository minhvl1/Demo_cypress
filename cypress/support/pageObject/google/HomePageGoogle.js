import GoogleHomePage from "../../interface/google/HomePage";
import Commons from "../Commons";

const googleHomePage = new GoogleHomePage()
const commons = new Commons()
class HomePageGoogle {
    inputCMCtoGoogle(){
        return commons.sendkeyToElement("CMC{enter}",googleHomePage.getGoogleSearchTextbox())
            }
}
export default HomePageGoogle