import React from 'react'
import { In_focus } from './In_focus'
import { Mega_sell } from './Mega_sell'
import { More_reason } from './More_reason'

function Three_compo() {
    return (<>
        <div className='sm:flex flex-row w-11/12 sm:space-x-3 m-auto my-5'>
        <More_reason />
        <Mega_sell />
        <In_focus />
        </div>
    </>
    )
}

export { Three_compo }