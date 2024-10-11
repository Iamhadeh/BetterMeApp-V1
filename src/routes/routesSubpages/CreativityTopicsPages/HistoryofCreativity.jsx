





import Menu from "../../../components/menu";
import NavigationBar from "../../../components/HamburgerMenu";
import Footer from "../../../components/footer";
import { Link } from "react-router-dom";
import EachResourceDetail from "../../../components/mainLink";
import {HistoryOfCreativityResources} from "./WhatIsCreativity";





function CreateButtons (HistoryOfCreativityResources) {
    return (
        <EachResourceDetail
        title={HistoryOfCreativityResources.title}
        link={HistoryOfCreativityResources.link}
        authorName={HistoryOfCreativityResources.authorName}
        type={HistoryOfCreativityResources.type}
        />
    )
}


function HistoryCreativity () {
    return (
        <>
        <Menu/>
        <NavigationBar/>
        <div className="heading">
            <p>Go back to   <button> <Link to= {"/creativity"} > Creativity </Link> </button></p>
            <h1 className="subPageH1">History of Creativity</h1>
        </div> 
        <div className="searchdiv">
                 <input type="text" />
                <button className="SearchBtn">Search</button>
        </div>
       
        <div className="pageContainer">
            <div className="contentMainBox">
                {HistoryOfCreativityResources.map(CreateButtons)}
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default HistoryCreativity;