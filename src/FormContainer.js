import React, { useState, useEffect } from 'react'
import Input from './Input';
import styles from './Form.module.css'

const FormContainer = () => {

  const [ formData, setFormData ] = useState({});

  const inputUpdate = (e) => {    
    let updateFormData = formData;
    updateFormData[e.target.name] = e.target.value
    setFormData(updateFormData)
    console.log(formData);
  }

  return (
    <form action="http://www.example.com" className={styles.form}>
      <Input 
        type="text" 
        className={styles.input} 
        label="Name"
        name="name"
        onChange={inputUpdate}
      />
      <Input 
        type="text" 
        className={styles.input} 
        label="Password"
        name="password"
        onChange={inputUpdate} 
      />
      <button type="submit" className={styles.submit}>Submit</button>
    </form>
  )
}

export default FormContainer;