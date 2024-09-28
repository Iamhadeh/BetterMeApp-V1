

import React from "react";
import Menu from "../components/menu";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";
import ButtonsProps from "../components/Button";
import FundamentalButtons, {ResearchButtons, HowToButtons} from "../components/CreativePageInfo";
 
//   );

function CreateButtons (FundamentalButtons) {
    return (
        <ButtonsProps name={FundamentalButtons.name}/>
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
        <div className="popUp">
            <div className="starSign"><img src="" alt="" /></div>
        </div>
        <div className="mainDiv">
            <div className="titleBox">
            <h1 >Creativity</h1>
            </div>
            <Sidebar/>
            <section className="resources">
            <h3 className="h3Font">Resources To Make You Become A Creative Genius</h3>
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
                {/* how to  container  */}
                <h3 className="h3Font" >How To</h3>
                <div className="container">
                {HowToButtons.map(CreateHowTos)}

                    {/* <button className="BtnLearn">Staying Curios</button>
                    <button className="BtnLearn">Mapping</button>
                    <button className="BtnLearn">Problem-Solving</button>
                    <button className="BtnLearn">Creative Habits</button>
                    <button className="BtnLearn">Essays</button>
                    <button className="BtnLearn">Sources of Creativity</button>
                    <button className="BtnLearn">Creative Projects</button> */}
                </div>  
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default Creativity;