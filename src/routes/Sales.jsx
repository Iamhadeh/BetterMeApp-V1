





import React from "react";
import Menu from "../components/menu";
import NavigationBar from "../components/HamburgerMenu";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";
import ButtonsProps from "../components/Button";
import FunBtnTM, {HowToBtnTM, RschBtnTM} from "../components/TimeManagementInfo";

 

function CreateButtons (FunBtnTM) {
    return (
        <ButtonsProps name={FunBtnTM.name}/>
    )
}

function CreateResearcbuttons (RschBtnTM) {
    return (
        <ButtonsProps name={RschBtnTM.name}/>
    )
}

function CreateHowTos (HowToBtnTM) {
    return (
        <ButtonsProps name={HowToBtnTM.name}/>
    )
}


function Sales () {

    return (
        <>
        <Menu/>
        <NavigationBar/>
        <div className="mainDiv">
            <div className="titleBox">
            <h1 > Sales </h1>
            </div>
            <Sidebar/>
            <section className="resources">
            <h3 className="h3Font">Resources To Learn Sales</h3>
                <div className="resCon">
                <p className="textFont">Learn how to sell using the resources and tools from the tops sales experts in the world...</p>
                </div>
            </section> 
            <div className="divBox1">
                <h3 className="h3Font" >Fundamentals</h3>
                <div className="container">
                    {FunBtnTM.map(CreateButtons)}
                </div>
            </div>
            <div className="divBox2">
            <h3 className="h3Font" >Science and Research</h3>
                <div className="container">

                {RschBtnTM.map(CreateResearcbuttons)}
                </div>
            </div>
            <div className="divBox3">
                {/* how to  container  */}
                <h3 className="h3Font" >How To</h3>
                <div className="container">
                    {HowToBtnTM.map(CreateHowTos)}
                </div>  
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Sales;