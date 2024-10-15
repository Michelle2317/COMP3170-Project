/**
 * Will check to make sure the first name input field uses only alphabetical letters using regex. There must be more than one alphabetical letter in order to help the button to show.
Will check to make sure the last name input field uses only alphabetical letters using regex There must be more than one alphabetical letter in order to help the button to show.
Will check to see if the email is setup properly using regex. Only when it has the proper formatting then it will help the button show up.
Only if the first name, last name, email input fields and the checkbox is checked then the button to submit will show up. If any of these values are wrong or not checked then it will not show the submit button
Once the button does show, when the user clicks on the button it will replace that form area with a thank you message as seen in the video.

 */


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
                <label>First Name:</label>
                <input 
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={handleChangeFirstName}
            />
         </div>

            <div>
                <label>Last Name:</label>
                <input 
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={handleChangeLastName}
                />
        </div>
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
            <label>Do you agree to the terms?:</label>
            <input 
                type="checkbox"
                name="checkbox"
                id="checkbox"
                onChange={handleChangeCheckBox}
            />
            </div>
           
            {
                show ?
                <Link href={'/'}> 
                    <button type="button" >Submit</button>
                </Link>
                : <></>
            }
         
              
             
         </div>
        </form>
    
        </div>
        
    )
}
