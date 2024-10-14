
import React from "react";
import { useState } from "react";
import {SkillProps} from "../components/Button";
import softskills from "./SoftSkilloptions";



function createButton (softskills) {
    return (
        <SkillProps
        link={softskills.link}
        name={softskills.name}
        key={softskills.id}
        />
    )
}

 

function SearchBtn ()  {


    const [inputText, setInputText] = useState (" ")
    const [array, setArray] = useState([ ])
    
  
    function handleChange (event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }


    // let filteredArray = softskills.filter(findSkill) 

    // function findSkill (element) {
    //     return (element = inputText)
    // }


    function handleClick () {

    // const inputText = filteredArray
        setArray ( inputText  ? (alert("sorry")): (alert("error"), array) )
    }

    return (
        <div className="searchDivCon">
            <div className="searchdiv"> 
              <input 
              name="inputValue"
              type="text" 
              value={inputText}
              onChange={handleChange} 
              />
              <button onClick={handleClick}  className="SearchBtn">Search</button>
            </div>

            <div className="pickLesson">
               {softskills.map(createButton)}
            </div>
     </div>

    )
}


export default SearchBtn;
