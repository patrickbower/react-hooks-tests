import React from 'react'
import styles from './Form.module.css'

const Input = props => {
  return (
    <label>
      {props.label}
      <input {...props} />
    </label>
  )
}

export default Input