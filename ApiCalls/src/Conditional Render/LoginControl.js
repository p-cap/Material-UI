import react, { useState } from 'react'

export default function LoginControl() {    
    const [isLoggedIn, setLoggedIn] = useState(false)
    
    // return statement 
    return (
        // Calls Greeting component
        // Calls the SetUpButton component
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            <SetUpButton />
        </div>
      )



      // this one is called in the return statement 
      // Greeting component accepts props from the parent function
      // assigns a local constant 
      // then utilizes the const to determine which component should be rendered
      function Greeting(props) {
        const isLoggedIn = props.isLoggedIn
        if (isLoggedIn) {
            return <UserGreeting />
        } 
            return <GuestGreeting />
        }
        // Greeting is the parent component that determines which child component is rendered
        function UserGreeting(props) {
            return <h1>Welcome Back!</h1>
        }

        function GuestGreeting(props) {
            return <h1>Please sign up</h1>
        }

    /////// funciions below are responsible of changing / setting the state of setLoggedIn

    function SetUpButton() {
        if (isLoggedIn) {
            return <LogoutButton onClick={HandleLogoutClick} />
        } else {
            return <LoginButton onClick={HandleLoginClick} />   
        }
    }


    function HandleLoginClick() {
        setLoggedIn(true)
    }

    function HandleLogoutClick() {
        setLoggedIn(false)
    }
    
    
    function LoginButton(props) {
        return (
            <button onClick={props.onClick}>
                Login
            </button>
        )
    }

    function LogoutButton(props) {
        return (
            <button onClick={props.onClick}>
                Logout
            </button>
        )
    }

    
}