

import Menu from "../../../components/menu";
import NavigationBar from "../../../components/HamburgerMenu";
import Footer from "../../../components/footer";
import { Link } from "react-router-dom";
import EachResourceDetail from "../../../components/mainLink";
import ComponentsOfEmotionalIntelligence from "./EmtIntResources";





function CreateButtons (ComponentsOfEmotionalIntelligence) {
    return (
        <EachResourceDetail
        title={ComponentsOfEmotionalIntelligence.title}
        link={ComponentsOfEmotionalIntelligence.link}
        authorName={ComponentsOfEmotionalIntelligence.authorName}
        type={ComponentsOfEmotionalIntelligence.type}
        key={ComponentsOfEmotionalIntelligence.id}
        />
    )
}


function ComEmoInt () {
    return (
        <>
        <Menu/>
        <NavigationBar/>
        <div className="heading">
            <div className="goBackBox"> 
                 <p>Go back to   </p>
                  <button className="goBackBtn" > <Link to= {"/emotional-intelligence"} > Emotional Intelligence </Link> </button>
            </div>
            <h1 className="subPageH1">Components of Emotional Intelliegence</h1>
        </div> 
        <div className="searchdiv">
                 <input type="text" />
                <button className="SearchBtn">Search</button>
        </div>
       
        <div className="pageContainer">
            <div className="contentMainBox">
                {ComponentsOfEmotionalIntelligence.map(CreateButtons)}
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default ComEmoInt;