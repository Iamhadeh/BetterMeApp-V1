import Menu from "../../../components/menu";
import { Link } from "react-router-dom";
import EachResourceDetail from "../../../components/mainLink";
import CreativityResource from "./WhatIsCreativity";




// function CreateButtons (FundamentalButtons) {
//     return (
//         <ButtonsProps 
//         name={FundamentalButtons.name}
//         link={FundamentalButtons.link}
//         />
//     )
// }

function CreateButtons (CreativityResource) {
    return (
        <EachResourceDetail
        title={CreativityResource.title}
        link={CreativityResource.link}
        authorName={CreativityResource.authorName}
        type={CreativityResource.type}
        />
    )
}


function WhatIsCreativity () {
    return (
        <>
        <Menu/>
        <div className="heading">
            <p>Go back to   <button> <Link to= {"/creativity"} > Creativity </Link> </button></p>
            <h1>What is Creativity?</h1>
        </div> 
        <div className="searchdiv">
                 <input type="text" />
                <button className="SearchBtn">Search</button>
        </div>
       
        <div className="pageContainer">
            <div className="contentMainBox">
                {CreativityResource.map(CreateButtons)}
            </div>
        </div>
        </>
    )
}


export default WhatIsCreativity;