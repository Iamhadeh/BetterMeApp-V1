import { Link } from "react-router-dom";

import Menu from "../components/menu";
import Footer from "../components/footer";
import ButtonsProps, {SkillProps} from "../components/Button";
import softskills from "../components/SoftSkilloptions";


function createButton (softskills) {
    return (
        <SkillProps
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
        <div className="mainSLP">
           
            <div>
                <div className="searchdiv">
                    <input type="text" />
                    <button className="SearchBtn">Seaerch</button>
                </div>
                <div className="pickLesson">
                <div className="skills"> <Link to={'/creativity'}>Creativity</Link> </div>
                {softskills.map(createButton)}
                   {/* <div className="skills">Sales</div>
                    <div className="skills">Emotional Intelligence</div>
                    <div className="skills">Communication</div> */}
                </div>
            </div>
        </div>
         <Footer/>
         </>
    )
}

export default StartLearning;