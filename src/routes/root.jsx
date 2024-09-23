
// I think this is the home page 

import { Link } from "react-router-dom";


function Root () {

    return (
      <>
      <main>
        <menu>
          <button className="menuBtn">Games</button>
          <button className="menuBtn">Index</button>
          <button className="menuBtn">Pricing</button>
          <button className="menuBtn">Account</button>
        </menu>
       <header>
        <div className="headerBox1">
        <h3 className="welcomeH3">Welcome,</h3>
        <h1 className="mainH1"> Become A Better Individual</h1>
       <h2>One Activity At A Time</h2>
       <p>To become the top one percent in your field, you have to master a couple of soft skills. Start your journey to become a betteer person today</p>
        </div>
        <div className="headerBox2"><img src="https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
       </header>
  
       <div className="skillBox">
        <button className="creativity"> <Link to={'home/creativity'}> CREATIVITY</Link> </button>
        <button className="creativity">SALES</button>
        <button className="creativity">DECISON-MAKING</button>
       </div>
  
       <section className="slider">
        <slider/>
       </section>
  
       <footer>
          <h3 className="footerMsg">follow us on social media</h3>
          <div className="footerIcons">
            <img className="socialIcon" src="./src/instagram.svg" alt="" />
            <img className="socialIcon" src="./src/twitter-x.svg" alt="" />
            <img className="socialIcon" src="./src/link.svg" alt="" />
            <img className="socialIcon" src="./src/linkedin.svg" alt="" />
          </div>
       </footer>
        </main>
        </>
    );
  
  }
  
  export default Root;
  