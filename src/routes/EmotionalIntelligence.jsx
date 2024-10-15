


import React from "react";
import Menu from "../components/menu";
import NavigationBar from "../components/HamburgerMenu";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";
import ButtonsProps from "../components/Button";
import FunBtnEI, {HowToBtnEI, RschBtnEI} from "../components/EmoIntPageInfo";

 

function CreateButtons (FunBtnEI) {
    return (
        <ButtonsProps 
        name={FunBtnEI.name}
        link={FunBtnEI.link}
        key={FunBtnEI.id}
        />
    )
}

function CreateResearchuttons (RschBtnEI) {
    return (
        <ButtonsProps name={RschBtnEI.name}/>
    )
}

function CreateHowTos (HowToBtnEI) {
    return (
        <ButtonsProps name={HowToBtnEI.name}/>
    )
}


function EmotionalIntelligence () {

    return (
        <>
        <Menu/>
        <NavigationBar/>
        <div className="mainDiv">
            <div className="titleBox">
            <h1 className="subPageH1" > Emotional Intelligence</h1>
            </div>
            <Sidebar/>
            <section className="resources">
            <h2>Resources</h2>
                <div className="resCon">
                <p className="textFont">Start acquiring the knowledge to help you become an emotionally sound, matured, and developed person.</p>
                </div>
            </section> 
            <div className="divBox1">
                <h3 className="h3Font" >Fundamentals</h3>
                <div className="container">
                    {FunBtnEI.map(CreateButtons)}
                </div>
            </div>
            <div className="divBox2">
            <h3 className="h3Font" >Science and Research</h3>
                <div className="container">

                {RschBtnEI.map(CreateResearchuttons)}
                </div>
            </div>
            <div className="divBox3">
                {/* how to  container  */}
                <h3 className="h3Font" >How To</h3>
                <div className="container">
                    {HowToBtnEI.map(CreateHowTos)}
                </div>  
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default EmotionalIntelligence;




