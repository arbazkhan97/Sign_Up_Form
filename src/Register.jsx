

import { useState } from "react"
export default function Register({addNewData}) {

    const [FormData, setFormData] = useState({

        name: "",
        email: "",
        password: "",
        age: "",
        address: "",
    })

   

let formHandler = (event) => {

    setFormData({
         ...FormData,
        [event.target.name]: event.target.value 
    })
}


let submitHandler = (event) => {
   

    event.preventDefault()
    
    addNewData(FormData)

    console.log(FormData)
    
    setFormData({
        name: "",
        email: " ",
        password: "",
        age: "",
        address: "",
    })
}



  return (
    <div>
      
        <form onSubmit={submitHandler} >
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"  placeholder="Enter your name"
            
            value={FormData.name} onChange={formHandler} /> 
            <br /><br />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder=" Enter your email"
             value={FormData.email} onChange={formHandler} /> 
             <br /><br />

            <label htmlFor="password">Password:</label>
            <input type="password"  id="password" name="password" placeholder="Password"
            
            value={FormData.password} onChange={formHandler} />
             <br /><br />

            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" placeholder="Age"
            value={FormData.age} onChange={formHandler} />  
            <br /><br />

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" placeholder=" Enter Address" 
            value={FormData.address} onChange={formHandler} /> <br />
            <button type="submit" >Register</button>
        </form>
    </div>
  )
}