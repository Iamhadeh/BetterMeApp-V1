
import { useState } from "react";

// import { useState } from "react"




function AccountPage () {

    const [intialLogin, SetLogin] =  useState ("hideLogin")
    const [signup, setSignup] = useState("signup")

    function changeToLogin () {
        SetLogin( "login")
        setSignup("hideLogin")
    }

    function changeToSignIn () {
        SetLogin( "hideLogin")
        setSignup("signup")
    }
    // const [logIn, setLogin] = useState(false);




    return (
        <>
    <div className="mainSPDiv"> 
        <div className="mainAccountBtns">
            <button onClick={changeToSignIn} >Sign Up</button>
            <button onClick={changeToLogin} >Log In</button>
        </div>
      <div className={signup}>
         <input name="fullName" type="text" placeholder="Your full name"/>
         <input name="email" type="text" placeholder="Input your email address" />
         <input name="password" type="text"  placeholder="Password"/>
         <input name="confirmPassword" type="text"  placeholder="Confirm password"/>
         <button>Sign up</button>
      </div>
      <div className={intialLogin}>
         <input name="fullName" type="text" placeholder="Your name" />
         <input name="email" type="text" placeholder="Your email address" />
         <button>LogIn</button>      
      </div>
    </div> 
    </>
     )
}

export default AccountPage;


