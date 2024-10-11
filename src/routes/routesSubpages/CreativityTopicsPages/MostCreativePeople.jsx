

import Menu from "../../../components/menu";
import NavigationBar from "../../../components/HamburgerMenu";
import Footer from "../../../components/footer";
import { Link } from "react-router-dom";
import EachResourceDetail from "../../../components/mainLink";
import { MostCreativePeople } from "./WhatIsCreativity";





function CreateButtons (MostCreativePeople) {
    return (
        <EachResourceDetail
        key= {MostCreativePeople.id}
        title={MostCreativePeople.title}
        link={MostCreativePeople.link}
        authorName={MostCreativePeople.authorName}
        type={MostCreativePeople.type}
        />
    )
}


function MostCreativePeoplePage () {
    return (
        <>
        <Menu/>
        <NavigationBar/>
        <div className="heading">
            <p>Go back to   <button> <Link to= {"/creativity"} > Creativity </Link> </button></p>
            <h1 className="subPageH1">The Most Creative People</h1>
        </div> 
        <div className="searchdiv">
                 <input type="text" />
                <button className="SearchBtn">Search</button>
        </div>
       
        <div className="pageContainer">
            <div className="contentMainBox">
                {MostCreativePeople.map(CreateButtons)}
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default MostCreativePeoplePage;