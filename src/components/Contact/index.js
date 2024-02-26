import React, {useState} from "react"
import {validateEmail} from "../../utils/helpers"

function ContactForm() {
    const [formState,setFormState] = useState({
        name: "",
        email: "",
        message: "",
    })
    
    const [errorMessgae,setErrorMessage] = useState("")
    const {name,email,message} = formState
    
    function handleSubmit(e) {
        e.preventDefault()

        if (!errorMessgae) {
            setFormState({...formState, [e.target.name]: e.target.value})
            console.log("Form",formState)
        }
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <a href="mailto:joey-3v@gmail.com">joey03v@gmail.com</a>
        </section>
    )
}

export default ContactForm