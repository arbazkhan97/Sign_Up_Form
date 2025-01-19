

import './Register.css'
import {useFormik} from 'formik'

const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
    
    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
  
    if (!values.password) {  
      errors.password = 'Required';
    } else if (values.password === '123456789'  ) {
        errors.password = ' Enter Strong Password';
        }
    
  
    if (!values.age) {
        errors.age = 'Required';
      } 
      else if (values.age < 18) {
        errors.age = 'Age must be greater than 18';
      } else if (values.age > 90) {
        errors.age = 'Age must be less than 90';
      }


    if (!values.address) {
        errors.address = 'Required';
      } 
  
    return errors;
  };
  
export default function Register({addNewData}) {

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: '', 
            age: '',
            address: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          addNewData(values);
          formik.resetForm();
        },
      });

   





  return (
    <div>
      
        <form className="form" onSubmit={formik.handleSubmit} >
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"  placeholder="Enter your name"
            
            value={formik.values.name} onChange={formik.handleChange} /> 
            <br /><br />
            {formik.errors.name ? <p style={{color:'red' , textAlign:'center'}}  >{formik.errors.name}</p> : null}

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder=" Enter your email"
             value={formik.values.email} onChange={formik.handleChange} /> 
             <br /><br />
                {formik.errors.email ? <p style={{color:'red' , textAlign:'center'}}  >{formik.errors.email}</p> : null}

            <label htmlFor="password">Password:</label>
            <input type="password"  id="password" name="password" placeholder="Password"           
            value={formik.values.password} onChange={formik.handleChange} />                      

            {formik.errors.password ? <p style={{color:'red' , textAlign:'center'}}  >{formik.errors.password}</p> : null}
             <br /><br />
                
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" placeholder="Age"
            value={formik.values.age} onChange={formik.handleChange} />  
            {formik.errors.age ? <p style={{color:'red' , textAlign:'center'}}  >{formik.errors.age}</p> : null}
            <br /><br />

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" placeholder=" Enter Address" 
            value={formik.values.address} onChange={formik.handleChange} /> <br />
            {formik.errors.address ? <p style={{color:'red' , textAlign:'center'}}  >{formik.errors.address}</p> : null}
            <button type="submit" >Register</button>
        </form>
    </div>
  )
}