



import Menu from "../../../components/menu";
import NavigationBar from "../../../components/HamburgerMenu";
import Footer from "../../../components/footer";
import { Link } from "react-router-dom";
import EachResourceDetail from "../../../components/mainLink";
import { ScienceOfEmotionsResources } from "./EmtIntResources";





function CreateButtons (ScienceOfEmotionsResources) {
    return (
        <EachResourceDetail
        title={ScienceOfEmotionsResources.title}
        link={ScienceOfEmotionsResources.link}
        authorName={ScienceOfEmotionsResources.authorName}
        type={ScienceOfEmotionsResources.type}
        key={ScienceOfEmotionsResources.id}
        />
    )
}


function ScieneceofEmotionPage () {
    return (
        <>
        <Menu/>
        <NavigationBar/>
        <div className="heading">
            <div className="goBackBox"> 
                 <p>Go back to   </p>
                  <button className="goBackBtn" > <Link to= {"/emotional-intelligence"} > Emotional Intelligence </Link> </button>
            </div>
            <h1 className="subPageH1">Science of Emotions</h1>
        </div> 
        <div className="searchdiv">
                 <input type="text" />
                <button className="SearchBtn">Search</button>
        </div>
       
        <div className="pageContainer">
            <div className="contentMainBox">
                {ScienceOfEmotionsResources.map(CreateButtons)}
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default ScieneceofEmotionPage;