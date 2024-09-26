
import { useState } from "react";

import React from "react";
import Menu from "../components/menu";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";
 
//   );


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
                    <button className="BtnLearn">
                        What Is Creativity
                        </button>
                    <button className="BtnLearn">Why Does It Matter?</button>
                    <button className="BtnLearn">History</button>
                    <button className="BtnLearn">Myths $ Facts</button>
                    <button className="BtnLearn">The Word Most Creative People</button>
                    <button className="BtnLearn">Tools </button>
                </div>
            </div>
            <div className="divBox2">
            <h3 className="h3Font" >Research And Case Studies</h3>
                <div className="container">
                    <button className="BtnLearn">Case Studies</button>
                    <button className="BtnLearn">Reports</button>
                    <button className="BtnLearn">Experiments</button>
                    <button className="BtnLearn">The Brain and Creativity</button>
                </div>
            </div>
            <div className="divBox3">
                {/* how to  container  */}
                <h3 className="h3Font" >How To</h3>
                <div className="container">
                    <button className="BtnLearn">Staying Curios</button>
                    <button className="BtnLearn">Mapping</button>
                    <button className="BtnLearn">Problem-Solving</button>
                    <button className="BtnLearn">Creative Habits</button>
                    <button className="BtnLearn">Essays</button>
                    <button className="BtnLearn">Sources of Creativity</button>
                    <button className="BtnLearn">Creative Projects</button>
                </div>  
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default Creativity;