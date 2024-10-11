


import Menu from "../../../components/menu";
import NavigationBar from "../../../components/HamburgerMenu";
import Footer from "../../../components/footer";
import { Link } from "react-router-dom";
import EachResourceDetail from "../../../components/mainLink";
import {WhyDoesItMatter} from "./WhatIsCreativity";





function CreateButtons (WhyDoesItMatter) {
    return (
        <EachResourceDetail
        title={WhyDoesItMatter.title}
        link={WhyDoesItMatter.link}
        authorName={WhyDoesItMatter.authorName}
        type={WhyDoesItMatter.type}
        />
    )
}


function WhyItMatters () {
    return (
        <>
        <Menu/>
        <NavigationBar/>
        <div className="heading">
            <p>Go back to   <button> <Link to= {"/creativity"} > Creativity </Link> </button></p>
            <h1 className="subPageH1">Why Does Creativity Matter?</h1>
        </div> 
        <div className="searchdiv">
                 <input type="text" />
                <button className="SearchBtn">Search</button>
        </div>
       
        <div className="pageContainer">
            <div className="contentMainBox">
                {WhyDoesItMatter.map(CreateButtons)}
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default WhyItMatters;