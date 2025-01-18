
import  { useState } from 'react'
import Register from './Register'


export default function Submit() {


    const [data, setData] = useState([{

        name: "arbaz khan",   
        email: "arbazkhan12@gmail.com",
        password: "7896541",
        age: "19",
        address: "kalpi",
     }])

     const addNewData = (newData) => {
        setData((prevData) => [...prevData, newData]);
    };


    return (

        <div>
            <h2>Registration Form</h2>
            <Register addNewData={addNewData} /> <hr />
            <h2> All Data</h2>
        {
            data.map((item, index)=>{
                return(
                    <div key={index}>
                        <h1> name: {item.name}</h1>
                        <h1> Email:{item.email}</h1>
                        <h1> Password: {item.password}</h1>
                        <h1> Age:{item.age}</h1>
                        <h1> address:{item.address}</h1>
                    </div>
                )
            })
        }
        
        
        
        </div>
        
    )
};