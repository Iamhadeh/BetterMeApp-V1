

import Menu from "../components/menu";
import Footer from "../components/footer";
import {SkillProps} from "../components/Button";
import softskills from "../components/SoftSkilloptions";
import NavigationBar from "../components/HamburgerMenu";


function createButton (softskills) {
    return (
        <SkillProps
        link={softskills.link}
        name={softskills.name}
        />
    )
}

// function CreateHowTos (HowToButtons) {
//     return (
//         <ButtonsProps name={HowToButtons.name}/>
//     )
// }


function StartLearning() {
    return (
        <>
        <Menu/>
        <NavigationBar/>
        <div className="mainSLP">
           
            <div>
                <div className="searchdiv"> 
                    <input type="text" />
                    <button className="SearchBtn">Search</button>
                </div>
                <div className="pickLesson">
                {softskills.map(createButton)}
                </div>
            </div>
        </div>
         <Footer/>
         </>
    )
}

export default StartLearning;