"use client"

import { FormEvent, useRef, useState } from "react";

type formData = {
    name: string;
    email: string;
    password: string;
}

const Form = () => {
    const [submittedData, setSubmittedData] = useState<formData>({
        name: '',
        email: '',
        password: '',
    });

    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const nameVal = name.current!.value;
        const emailVal = email.current!.value;
        const passwordVal = password.current!.value;   

        setSubmittedData({name: nameVal, email: emailVal, password: passwordVal})
        
        // console.log(nameVal);
        // console.log(emailVal);
        // console.log(passwordVal)
        
    }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your name" ref={name}></input>
        <input type="email" placeholder="Enter Your email" ref={email}></input>
        <input type="password" placeholder="Enter Your password" ref={password}></input>

        <button type="submit">Submit</button>

        <div>
           <h1>Name: {submittedData.name}</h1> 
           <h1>Email: {submittedData.email}</h1>
           <h1>Password: {submittedData.password}</h1>
        </div>
      </form>  
    </section>
  )
}

export default Form