
// I think this is the home page 

import { Link } from "react-router-dom";

import Menu from "../components/menu";
import Footer from "../components/footer";
import NavigationBar from "../components/HamburgerMenu";
import { useState } from "react";


// import Hamburger from "../components/HamburgerMenu";



function Root () {

  
  const [showImg1, setShowImg1] = useState("hide-img")
  const [showImg2, setShowImg2] = useState("hide-img")
  const [showImg3, setShowImg3] = useState("hide-img")
  const [showImg4, setShowImg4] = useState("hide-img")
  const [showImg5, setShowImg5] = useState("hide-img")

  function changeImages () {
    setShowImg1("show-img-1")
    setTimeout(setShowImg1, 1000);

    setShowImg1("show-img-2")
    setTimeout(setShowImg2, 2000);

    setShowImg1("show-img-3")
    setTimeout(setShowImg3, 3000);


    setShowImg1("show-img-4")
    setTimeout(setShowImg4, 4000);

    setShowImg1("show-img-5")
    setTimeout(setShowImg5, 5000);
  }

    return (
      <>
      <main>
       <Menu/>
       <NavigationBar/>
  
        <header>
          <div className="headerBox1">
            <h3 className="welcomeH3">Welcome,</h3>
            <h1 className="mainH1"> Become A Better Individual</h1>
            <h2 className="mainH2">One Activity At A Time...</h2>
            <p>The best repository of resources for individuals to master soft skills. To become the top one percent in your field, you have to master a couple of soft skills. Start your journey to become a better person today</p>
          </div>
          <div className="headerBox2">
            <img src="https://images.unsplash.com/photo-1665686374006-b8f04cf62d57" alt="" />
          </div>
       </header>
  
       <div className="mainBox">
         <button className="btnMain"> <Link to={'home/startlearning'}> Start Learning</Link> </button>
         <button className="btnMain"> <Link to={'/test-page'}> Take A Test</Link></button>
         <button  className="btnMain">Analytics</button>
       </div>
       
       {/* this is another section */}
        <div onMouseOver={changeImages} className="join-us-box">
            <h2 className="why-join-text">Why You Should Join Us?</h2>
            <div className="imgFading">
               <img  src="../static/FdImg1.png" alt="" />
               {/* 
              
               
                */}
              
               <img className={showImg1} src="../static/FdImg2.png" alt="" />
               <img className={showImg2} src="../static/FdImg6.png" alt="" />
               <img className={showImg3} src="../static/FdImg5.png" alt="" />
               <img className={showImg4} src="../static/FdImg4.png" alt="" />
               <img className={showImg5} src="../static/FdImg3.png" alt="" />
           </div>
            <div className="join-us-text-box">
               <p>Many People have the <span className="imp-words">work skills</span>, <span className="imp-words">business idea</span>, <span className="imp-words">talent</span>, but a lack of <span className="imp-words">soft skills</span> have limited their growth and achievements.
               </p>
               <p>They want to make progress in their <span className="imp-words">career</span>, <span className="imp-words"> business</span>, or <span className="imp-words">role</span>
              , but they do not know what needs to be done.
                </p>
                <p>
                  Can't close a deal? Don't know how to handle emotions? Afraid of trying new things? This is what differentiate the acheivers and those who don't, those who make progress steadily, and those who don't.
                </p>
                <p>
                  Join Us Now. Build the extra skills that can give you all the advantge. 
                </p>
                <button>Start Learning</button>
            </div>
       </div>


       
            {/* the fourth section */}
            <section className="third-section">
              <h2>What People Are Saying About Us</h2>
              <div className="3rd-inner-contain">
                  <div className="box-dets">
                    <img src="" alt="" />
                    <p className="quote"></p>
                  </div>
                  <div className="box-dets">
                    <img src="" alt="" />
                    <p className="quote"></p>
                  </div>
                  <div className="box-dets">
                    <img src="" alt="" />
                    <p className="quote"></p>
                  </div>
              </div>
            </section>


{/* This is something */}

            <section className="fourth-section">
              <div className="fourth-section-cont">
                  <h2>Games</h2>
                  <p>We are adding fun and exciting games to the list of valuables you can get as a member. These games will teach you the soft skills based on a short and detailed assessmemt. There you can learn to be a great talent, leader, or businessperson by playing games...</p>
                  <p>Sounds fun?</p>
                  <button>Join The Wait List</button>
              </div>
              <div className="fourth-section-cont-2">
                  <div className="random-skill">
                    <h3>Emotional Intelligence</h3>
                  </div>
                  <div className="random-skill">
                    <h3>Creativity</h3>
                  </div>
                  <div className="random-skill">
                    <h3>Sales</h3>
                  </div>
                  <div className="random-skill">
                    <h3>Critical Thinking</h3>
                  </div>
                  <div className="random-skill">
                    <h3>Discipline</h3>
                  </div>
                  <div className="random-skill">
                    <h3>Problem-solving</h3>
                  </div>
              </div>
            </section>

            <section className="this-is-Investment" >

              <div className="innerCon">
                <div className="inner-div-investment"> 
                   <h2>This Is An Investment</h2>
                   <p>This is a series of investment. The result can transform your life dramtically...</p>
                </div>
                <button>Explore</button>
              </div>
            </section>
       <Footer/>
      </main>
    </>
    );
  
  }
  
  export default Root;
  






// import { Link } from "react-router-dom";

// import Menu from "../components/menu";
// import Footer from "../components/footer";
// import NavigationBar from "../components/HamburgerMenu";



 


// function Root () {

//     return (
//       <>
//       <main>
//        <Menu/>
//        <NavigationBar/>
//         <header>
//           <div className="headerBox1">
//             <h3 className="welcomeH3">Welcome,</h3>
//             <div className="headTextBox">  
//                <h1 className="mainH1"> Become A Better Individual</h1>
//                <h2 className="mainH2">One Activity At A Time</h2>
//             </div>
//             <p>The best repository of resources for individuals to master soft skills. To become the top one percent in your field, you have to master a couple of soft skills. Start your journey to become a better person today</p>
//           </div>
//           <div className="headerBox2">
//             <img src="https://images.unsplash.com/photo-1665686374006-b8f04cf62d57" alt="" />
//           </div>
//        </header>
  
//        <div className="mainBox">
//          <button className="btnMain"> <Link to={'home/startlearning'}> Start Learning </Link> </button>
         
//          <button className="btnMain">Take A Test</button>
//          <button  className="btnMain">Analytics</button>
//        </div>
//        <Footer/>
//       </main>
//     </>
//     );
  
//   }
  
//   export default Root;
  