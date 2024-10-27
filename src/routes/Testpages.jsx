import Footer from "../components/footer";
import Menu from "../components/menu"
import NavigationBar from "../components/HamburgerMenu";
import { useState } from "react";

function TestPage () {

 const [box, setBox] = useState("hideDiv");

 function handleClick () {
    setBox("sorry-text");
 }

 function handleClose () {
    setBox("hideDiv");
 }

    return (
        <> 
        <Menu/>
        <NavigationBar/>
        <div className={box}>
            <p> We are sorry... </p>
            <h2> Our Tests Aren't Available At the Moment...</h2>
            <button onClick={handleClose} className="btnClose" > close </button>
        </div>
        <div className="main-test-page-con">

        <div className="test-welcome">
            <h1>Welcome To The <span>Test Page</span></h1>
        </div> 

        <div className="test-info">
            <h2>Find How Good You Are</h2>
            <p>Take one of our test to determine your strengths and weaknesses.</p>
            <p>You will find recommendations of what to learn and the resources to use once you complete a test.</p>
        </div>

        <div className="try-random">
            <button onClick={handleClick} className="BtnLearn" >Discover</button>
            <button onClick={handleClick} className="BtnLearn" >Try a random Test</button>
            <p>Or, pick one of the skills below to try the tests...</p>
        </div>

        <div className="pick-box">
            <button onClick={handleClick} className="BtnLearn" > Creativity </button>
            <button onClick={handleClick} className="BtnLearn" > Emotional Intelligence</button>
            <button onClick={handleClick} className="BtnLearn" > Learning </button>
            <button onClick={handleClick} className="BtnLearn" > Time Management </button>
            <button onClick={handleClick} className="BtnLearn" > Problem Solving </button>
            <button onClick={handleClick} className="BtnLearn" > Communication </button>
            <button onClick={handleClick} className="BtnLearn" > Lateral Thinking </button>
            <button onClick={handleClick} className="BtnLearn" > Deep Work </button>
            <button onClick={handleClick} className="BtnLearn" > Leadership </button>
            <button onClick={handleClick} className="BtnLearn" > Critical Thinking </button>
            <button onClick={handleClick} className="BtnLearn" > Negotiation </button>
            <button onClick={handleClick} className="BtnLearn" > Discipline </button>
            <button onClick={handleClick} className="BtnLearn" > Team Work </button>
            <button onClick={handleClick} className="BtnLearn" > Brainstorming </button>
            <button onClick={handleClick} className="BtnLearn" > Decision-making </button>
            <button onClick={handleClick} className="BtnLearn" > Persuasion </button>
        </div>
        </div>

        <Footer/>
        </>
    )
}

export default TestPage;