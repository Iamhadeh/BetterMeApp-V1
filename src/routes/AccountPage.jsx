
import { useState } from "react";

// import { useState } from "react"




function AccountPage () {

    const [intialLogin, setLogin] =  useState ("hideLogin")
    const [signup, setSignup] = useState("signup")
    // const [comLine, setComLine] = useState("comLine")
    // const [comLine2, setComLine2] = useState("hideLogin")

    function changeToLogin () {
        setLogin( "login")
        setSignup("hideLogin")
    }

    function changeToSignIn () {
        SetLogin( "hideLogin" && intialLogin)
        setSignup("signup")
    }
    // const [logIn, setLogin] = useState(false);




    return (
        <>
    <div className="mainSPDiv"> 
        <div className="mainAccountBtns">
        <h2>Please, sign up</h2>
        </div>
      <div className={signup}>
         <input name="fullName" type="text" placeholder="Your full name"/>
         <input name="email" type="text" placeholder="Input your email address" />
         <input name="password" type="text"  placeholder="Password"/>
         <input name="confirmPassword" type="text"  placeholder="Confirm password"/>
         <button>Sign up</button>
      </div>
       <div > <p>Already a member? please <span onClick={changeToLogin} className="loginCom" > login  </span>  instead. </p> </div>

      {/* <div className="mainAccountBtns">
            <button onClick={changeToSignIn} >Sign Up</button>
            <button onClick={changeToLogin} >Log In</button>
        </div> */}

        <div> 
           <div className={intialLogin}> 
              <input name="fullName" type="text" placeholder="Your name" />
              <input name="email" type="text" placeholder="Your email address" />
              <button>LogIn</button>  
            </div>
            <div> 
               <p> Not a member? please <span onClick={changeToSignIn} className="loginCom" > Sign Up  </span>  instead. </p> 
            </div>
        </div>

    </div> 
    </>
     )
}

export default AccountPage;


