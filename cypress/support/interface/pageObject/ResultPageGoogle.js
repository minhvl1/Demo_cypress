import GoogleHomePage from "../google/HomePage";
import Commons from "./Commons";

const googleHomePage = new GoogleHomePage()
const commons = new Commons()
class ResultPageGoogle {
    verifyPageResultContainsCMC(){
        return commons.verifyElementContainsText("CMC",googleHomePage.getGoogleResult())
    }

}
export default ResultPageGoogle