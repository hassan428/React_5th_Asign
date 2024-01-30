import React from 'react'

export const Heading_footer = (props) => {
    return (
        <h1 className={`font-bold text-gray-600 my-1 mt-3 ${props.class}`}>{props.text}</h1>

    )
}
