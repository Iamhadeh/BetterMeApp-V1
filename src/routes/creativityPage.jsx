

import React from "react";
import Menu from "../components/menu";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";
import ButtonsProps from "../components/Button";
import FundamentalButtons, {ResearchButtons, HowToButtons} from "../components/CreativePageInfo";
 


function CreateButtons (FundamentalButtons) {
    return (
        <ButtonsProps 
        name={FundamentalButtons.name}
        link={FundamentalButtons.link}
        />
    )
}


function CreateResearchuttons (ResearchButtons) {
    return (
        <ButtonsProps name={ResearchButtons.name}/>
    )
}

function CreateHowTos (HowToButtons) {
    return (
        <ButtonsProps name={HowToButtons.name}/>
    )
}


function Creativity () {

    return (
        <>
        <Menu/>
        {/* <div className="popUp">
            <div className="starSign"><img src="" alt="" /></div>
        </div> */}
        <div className="mainDiv">
            <div className="titleBox">
            <h1 >Creativity</h1>
            </div>
            <Sidebar/>
            <section className="resources">
            <h3 className="h3Font">Resources</h3>
                <div className="resCon">
                <p className="textFont">Learn all the things you need to know to become a creative genius...</p>
                </div>
            </section> 
            <div className="divBox1">
                <h3 className="h3Font" >Fundamentals</h3>
                <div className="container">
                    {FundamentalButtons.map(CreateButtons)}
                </div>
            </div>
            <div className="divBox2">
            <h3 className="h3Font" >Research And Case Studies</h3>
                <div className="container">
                {ResearchButtons.map(CreateResearchuttons)}
                </div>
            </div>
            <div className="divBox3">
                <h3 className="h3Font" >How To</h3>
                <div className="container">
                    {HowToButtons.map(CreateHowTos)}
                </div>  
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default Creativity;