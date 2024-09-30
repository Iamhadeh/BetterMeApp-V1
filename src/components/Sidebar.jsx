
import { Link } from "react-router-dom";


function Sidebar () {
    return (
    <div className="sideBar">
        <button className="BtnSideBar">Take A Quiz</button>
        <button className="BtnSideBar"><Link to={"home/startlearning"}> See All Skills </Link></button>
        <button className="BtnSideBar">Profile</button>
    </div>
    )
}

export default Sidebar;