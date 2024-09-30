




import React from "react";
import Menu from "../components/menu";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";
import ButtonsProps from "../components/Button";

 
//   );

// function CreateButtons (FundamentalButtons) {
//     return (
//         <ButtonsProps name={FundamentalButtons.name}/>
//     )
// }

// function CreateResearchuttons (ResearchButtons) {
//     return (
//         <ButtonsProps name={ResearchButtons.name}/>
//     )
// }

// function CreateHowTos (HowToButtons) {
//     return (
//         <ButtonsProps name={HowToButtons.name}/>
//     )
// }


function EmotionalIntelligence () {

    return (
        <>
        <Menu/>
        {/* <div className="popUp">
            <div className="starSign"><img src="" alt="" /></div>
        </div> */}
        <div className="mainDiv">
            <div className="titleBox">
            <h1 > Emotional Intelligence</h1>
            </div>
            <Sidebar/>
            <section className="resources">
            <h3 className="h3Font">Resources To Help You Develop Your Emotional Intelligence Muscles</h3>
                <div className="resCon">
                <p className="textFont">Start acquiring the knowledge to help you become an emotionally sound, matured, and developed person.</p>
                </div>
            </section> 
            <div className="divBox1">
                <h3 className="h3Font" >Fundamentals</h3>
                <div className="container">
                    {/* {FundamentalButtons.map(CreateButtons)} */}
                </div>
            </div>
            <div className="divBox2">
            <h3 className="h3Font" >Research And Case Studies</h3>
                <div className="container">

                {/* {ResearchButtons.map(CreateResearchuttons)} */}
                </div>
            </div>
            <div className="divBox3">
                {/* how to  container  */}
                <h3 className="h3Font" >How To</h3>
                <div className="container">
                    {/* {HowToButtons.map(CreateHowTos)} */}
                </div>  
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default EmotionalIntelligence;




