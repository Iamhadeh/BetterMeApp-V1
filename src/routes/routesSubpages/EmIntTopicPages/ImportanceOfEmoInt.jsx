




import Menu from "../../../components/menu";
import NavigationBar from "../../../components/HamburgerMenu";
import Footer from "../../../components/footer";
import { Link } from "react-router-dom";
import EachResourceDetail from "../../../components/mainLink";
import {ImportanceOfEmtIntResource} from "./EmtIntResources";





function CreateButtons (ImportanceOfEmtIntResource) {
    return (
        <EachResourceDetail
        title={ImportanceOfEmtIntResource.title}
        link={ImportanceOfEmtIntResource.link}
        authorName={ImportanceOfEmtIntResource.authorName}
        type={ImportanceOfEmtIntResource.type}
        key={ImportanceOfEmtIntResource.id}
        />
    )
}


function ImpEmoIntPage () {
    return (
        <>
        <Menu/>
        <NavigationBar/>
        <div className="heading">
            <div className="goBackBox"> 
                 <p>Go back to   </p>
                  <button className="goBackBtn" > <Link to= {"/emotional-intelligence"} > Emotional Intelligence </Link> </button>
            </div>
            <h1 className="subPageH1">Importance of Emotional Intelliegence</h1>
        </div> 
        <div className="searchdiv">
                 <input type="text" />
                <button className="SearchBtn">Search</button>
        </div>
       
        <div className="pageContainer">
            <div className="contentMainBox">
                {ImportanceOfEmtIntResource.map(CreateButtons)}
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default ImpEmoIntPage;