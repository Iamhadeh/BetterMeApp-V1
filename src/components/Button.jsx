


function ButtonsProps (props) {
    return (
        <>
         <button className="BtnLearn">{props.name}</button>
    </>
    );
}

function SkillProps (props) {
    return (
        <div className="skills">{props.name}</div>
    )
}

{/* <div className="pickLesson">
<div className="skills"> <Link to={'/creativity'}>Creativity</Link>  </div>
<div className="skills">Sales</div>
<div className="skills">Emotional Intelligence</div>
<div className="skills">Communication</div>
</div> */}

export default ButtonsProps;
export {SkillProps};