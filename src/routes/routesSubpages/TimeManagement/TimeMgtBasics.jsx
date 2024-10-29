



import Menu from "../../../components/menu";
import NavigationBar from "../../../components/HamburgerMenu";
import Footer from "../../../components/footer";
import { Link } from "react-router-dom";
import EachResourceDetail from "../../../components/mainLink";
import TimeMgtBasisResources from "./TimeMgtResources";





function CreateButtons (TimeMgtBasisResources) {
    return (
        <EachResourceDetail
        title={TimeMgtBasisResources.title}
        link={TimeMgtBasisResources.link}
        authorName={TimeMgtBasisResources.authorName}
        type={TimeMgtBasisResources.type}
        key={TimeMgtBasisResources.id}
        />
    )
}


function TimeMgtBasis () {
    return (
        <>
        <Menu/>
        <NavigationBar/>
        <div className="heading">
            <div className="goBackBox"> 
                 <p>Go back to   </p>
                  <button className="goBackBtn" > <Link to= {"/time-management"} > Time Management </Link> </button>
            </div>
            <h1 className="subPageH1">Time Management Basis</h1>
        </div> 
        <div className="searchdiv">
                <input type="text" />
                <button className="SearchBtn">Search</button>
        </div>
       
        <div className="pageContainer" >
            <div className="contentMainBox">
                {TimeMgtBasisResources.map(CreateButtons)}
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default TimeMgtBasis;