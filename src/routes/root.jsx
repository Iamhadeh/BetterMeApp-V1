
// I think this is the home page 

import { Link } from "react-router-dom";

import Menu from "../components/menu";
import Footer from "../components/footer";


function Root () {

    return (
      <>
      <main>
       <Menu/>
       <header>
        <div className="headerBox1">
        <h3 className="welcomeH3">Welcome,</h3>
        <h1 className="mainH1"> Become A Better Individual</h1>
       <h2>One Activity At A Time</h2>
       <p>To become the top one percent in your field, you have to master a couple of soft skills. Start your journey to become a betteer person today</p>
        </div>
        <div className="headerBox2"><img src="https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
       </header>
  
       <div className="mainBox">
        <button className="btnMain"> <Link to={'home/startlearning'}> Start Learning</Link> </button>
        <button className="btnMain">Take A Test</button>
        <button className="btnMain">Analytics</button>
       </div>
  
       <section className="slider">
        <slider/>
       </section>
       <Footer/>
        </main>
        </>
    );
  
  }
  
  export default Root;
  