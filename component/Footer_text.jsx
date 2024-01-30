import React from 'react'

export const Footer_text = (props) => {
  return (
    <div className={`text-sm text-gray-500 ${props.class}`}>{props.children}</div>
  )
}

export const Footer_link_text = (props) => {
  return (
    <div className={`text-sm text-blue-500 cursor-pointer inline mx-1 ${props.class}`} >{props.text}</div>
  )
}
