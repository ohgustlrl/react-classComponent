import React from 'react'
import './Alert.css'

const Alert = ({type, text, hide}) => {
  return (
    <div className={`alert alert-${type} ${hide}`}>{text}</div>
  )
}

export default Alert