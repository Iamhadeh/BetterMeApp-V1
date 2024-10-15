

import Menu from "../components/menu";
import Footer from "../components/footer";
// import {SkillProps} from "../components/Button";
// import softskills from "../components/SoftSkilloptions";
import NavigationBar from "../components/HamburgerMenu";
import SearchBtn from "../components/searchButton";


// function createButton (softskills) {
//     return (
//         <SkillProps
//         link={softskills.link}
//         name={softskills.name}
//         key={softskills.id}
//         />
//     )
// }




function StartLearning() {
    return (
        <>
        <Menu/>
        <NavigationBar/>
        <div className="mainSLP">
           
            <div>
                <SearchBtn/>
            
            </div>
        </div>
        <Footer/>
         </>
    )
}




export default StartLearning;