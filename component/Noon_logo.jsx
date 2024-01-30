import React from 'react'
import noon_logo from '../assets/noon-logo-en.svg'

function Noon_logo(props) {
  return (
    <img src={noon_logo} className={`${props.class} cursor-pointer`} alt="" />
  )
}

export default Noon_logo