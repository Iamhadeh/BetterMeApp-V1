import { Link } from "react-router-dom";



function ButtonsProps (props) {
    return (
        <>
         <button className="BtnLearn">
            <Link to={props.link}> {props.name}</Link>
        </button>
    </>
    );
}

function SkillProps (props) {
    return (
        <div className="skills">
            <Link to={props.link}> {props.name} </Link> 
        </div>
        // <div className="skills">{props.name}</div>
    )
}


export default ButtonsProps;
export {SkillProps};