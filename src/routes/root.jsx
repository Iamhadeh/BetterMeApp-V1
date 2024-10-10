
// I think this is the home page 

import { Link } from "react-router-dom";

import Menu from "../components/menu";
import Footer from "../components/footer";
import NavigationBar from "../components/HamburgerMenu";


// import Hamburger from "../components/HamburgerMenu";



function Root () {

    return (
      <>
      <main>
       <Menu/>
       <NavigationBar/>
  
        <header>
          <div className="headerBox1">
            <h3 className="welcomeH3">Welcome,</h3>
            <h1 className="mainH1"> Become A Better Individual</h1>
            <h2 className="mainH2">One Activity At A Time</h2>
            <p>The best repository of resources for individuals to master soft skills. To become the top one percent in your field, you have to master a couple of soft skills. Start your journey to become a better person today</p>
          </div>
          <div className="headerBox2">
            <img src="https://images.unsplash.com/photo-1665686374006-b8f04cf62d57" alt="" />
          </div>
       </header>
  
       <div className="mainBox">
         <button className="btnMain"> <Link to={'home/startlearning'}> Start Learning</Link> </button>
         <button className="btnMain">Take A Test</button>
         <button  className="btnMain">Analytics</button>
       </div>
       <Footer/>
      </main>
    </>
    );
  
  }
  
  export default Root;
  