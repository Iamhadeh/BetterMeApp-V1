import { Link } from "react-router-dom";


function Menu () {
    return (
        <menu>
        <button><Link to={'/'}>Home</Link></button>
        <button className="menuBtn"> <Link to={"/about"} >About</Link></button>
        <button className="menuBtn"><Link to={"/inprogress"} >Games</Link></button>
        {/* <button className="menuBtn">Index</button> */}
        <button className="menuBtn"><Link to={"/inprogress"} >Tools</Link></button>
        <button className="menuBtn"><Link to={"/inprogress"} >Account</Link></button>
      </menu>
    )
}

export default Menu;