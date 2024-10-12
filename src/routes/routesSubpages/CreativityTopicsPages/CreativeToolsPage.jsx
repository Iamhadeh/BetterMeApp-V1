




import Menu from "../../../components/menu";
import NavigationBar from "../../../components/HamburgerMenu";
import Footer from "../../../components/footer";
import { Link } from "react-router-dom";
import {CreativeToolDiv} from "../../../components/mainLink";
import { CreativeTools } from "./WhatIsCreativity";





function CreateButtons (CreativeTools) {
    return (
        <CreativeToolDiv
        key= {CreativeTools.id}
        title={CreativeTools.title}
        link={CreativeTools.link}
        description={CreativeTools.description}
        />
    )
}


function CreativeToolsPage () {
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
                {CreativeTools.map(CreateButtons)}
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default CreativeToolsPage;