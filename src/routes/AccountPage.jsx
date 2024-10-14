
import { useState } from "react";

// import { useState } from "react"




function AccountPage () {

    const [signup, setSignup] = useState("signup")
    const [intialLogin, setLogin] =  useState ("hideLogin")
    const [logLine, setLoginLine] = useState("loginCom")
    const [initialLoginLine, setInitialLoginLine] = useState("hideLogin")
    const [signupLine, setSignupLine] = useState("signUpLine")
    // const [comLine, setComLine] = useState("comLine")
    // const [comLine2, setComLine2] = useState("hideLogin")

    function changeToLogin () {
        setLogin( "login")
        setSignup("hideLogin")
        setLoginLine("hideLogin")
        setInitialLoginLine("signUpLine")
        
    }

    // function changeToSignIn () {
    //     setSignup("signup")
    //     // setLoginLine ("hideLogin")
    //     // setSignupLine ("hideLogin")
    //     // SetLogin(intialLogin)
    // }
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
       <div className={logLine} > <p>Already a member? please <span onClick={changeToLogin} className="loginText" > login  </span>  instead. </p> </div>

      {/* <div className="mainAccountBtns">
            <button onClick={changeToSignIn} >Sign Up</button>
            <button onClick={changeToLogin} >Log In</button>
        </div> */}

        <div className={intialLogin} >  
           <div  > 
              <input name="fullName" type="text" placeholder="Your name" />
              <input name="email" type="text" placeholder="Your email address" />
              <button>LogIn</button>  
            </div>
        </div>
        {/* <div className={initialLoginLine} > 
               <p> Not a member? please <span onClick={changeToSignIn} className="signUpText" > Sign Up  </span>  instead. </p> 
        </div> */}
    </div> 
    </>
     )
}

export default AccountPage;


