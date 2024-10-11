



import Menu from "../../../components/menu";
import NavigationBar from "../../../components/HamburgerMenu";
import Footer from "../../../components/footer";
import { Link } from "react-router-dom";
import EachResourceDetail from "../../../components/mainLink";
import {CreativeMythsNFacts} from "./WhatIsCreativity";





function CreateButtons (CreativeMythsNFacts) {
    return (
        <EachResourceDetail
        title={CreativeMythsNFacts.title}
        link={CreativeMythsNFacts.link}
        authorName={CreativeMythsNFacts.authorName}
        type={CreativeMythsNFacts.type}
        />
    )
}


function CreativeMythsNFactsPage () {
    return (
        <>
        <Menu/>
        <NavigationBar/>
        <div className="heading">
            <p>Go back to   <button> <Link to= {"/creativity"} > Creativity </Link> </button></p>
            <h1 className="subPageH1">Creative Myths And Facts</h1>
        </div> 
        <div className="searchdiv">
                 <input type="text" />
                <button className="SearchBtn">Search</button>
        </div>
       
        <div className="pageContainer">
            <div className="contentMainBox">
                {CreativeMythsNFacts.map(CreateButtons)}
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default CreativeMythsNFactsPage;