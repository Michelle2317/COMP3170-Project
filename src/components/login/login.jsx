
import { useState } from "react";
import  "./form.module.css"

export default function Form() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [firstNameValid, setFirstNameValid] = useState(false);
    const [lastNameValid, setLastNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [show, setShow] = useState(false);

    function isValidFirstName(firstName) {
        return /^\p{L}/u.test(firstName);
    }

    function isValidLastName(lastName) {
        return /^\p{L}/u.test(lastName);
    }
    function isValidEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u.test(email);
    }

    const handleChangeFirstName = (event) => {
        if(isValidFirstName(event.target.value)) {
            if(firstName.length >= 3) {
                setFirstNameValid(true);
            }
        }
        setFirstName(event.target.value);
    }

    const handleChangeLastName = (event) => {
        if(isValidLastName(event.target.value)) {
            if(lastName.length >= 3) {
                setLastNameValid(true);
            }
        }
        setLastName(event.target.value);
    }

    const handleChangeEmail = (event) => {
        if(isValidEmail(event.target.value)) {
            setEmailValid(true);
        }
        setEmail(event.target.value);
    }

    const handleChangeCheckBox = (event) => {
        const checkBoxState = event.target.checked;
        if (firstNameValid && emailValid && checkBoxState) {
            setShow(true);
        }
    }


    return (
        <div className="mainContainer">

            <form>
                <h1>Sign Up</h1>
                <div className="class"> 
        
                     <div>
                        <label>Email:</label>
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                    </div>
                     <div>
                        <label>Password:</label>
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                    </div>

           
           
                     <Link href={'/'}> 
                      <button type="button" >Log In</button>
                    </Link>
                
            
         
              
             
                </div>
            </form>
          </div>
        
    )
}