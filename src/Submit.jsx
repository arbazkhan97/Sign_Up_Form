
import  { useState } from 'react'
import './Submit.css'
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

        <>
      
            <h2>Registration Form</h2>
            <Register addNewData={addNewData} /> <br /> <hr />
            <h2> All Data</h2>
            <div className='data-container' >

     
        {
            data.map((item, index)=>{
                return(
                    <div className='data' key={index}>
                        <span> <b>Name:</b> &nbsp; &nbsp;  {item.name}</span> <br />  
                        <span> <b>Email:</b> &nbsp; &nbsp; {item.email}</span> <br />
                        <span> <b>Password:</b> &nbsp; &nbsp; {item.password}</span> <br />
                        <span> <b>Age:</b> &nbsp; &nbsp; {item.age}</span> <br />
                        <span> <b>Address:</b> &nbsp; &nbsp;  {item.address}</span>
                    </div>
                )
            })
        }
        
        </div>
        
        </>
        
    )
};