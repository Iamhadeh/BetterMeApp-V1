


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className= {isOpen ? 'isOpen' : ''} >
      <button className='mainNavBtn' onClick={() => setIsOpen(!isOpen)}>
        {/* Here, you could add an SVG or icon for the hamburger menu */}
        Menu
      </button>

      {/* We'll conditionally render our links based on isOpen */}
      {isOpen && (
        <> 
        <div className="hamCon">
            <button className="menuBtn"><Link to={'/'}>Home</Link></button>
            <button className="menuBtn"> <Link to={"/about"} >About</Link></button>
            <button className="menuBtn"><Link to={"/inprogress"} >Games</Link></button>
            {/* <button className="menuBtn">Index</button> */}
            <button className="menuBtn"><Link to={"/inprogress"} >Tools</Link></button>
            <button className="menuBtn"><Link to={"/inprogress"} >Account</Link></button>

        </div>
        </>
      )}
    </nav>
  );
}

export default NavigationBar;