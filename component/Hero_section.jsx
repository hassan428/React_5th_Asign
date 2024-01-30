import React, { useState } from 'react'
import { hero_data } from '../utils/hero_section_data'


let plus = 0
const Hero_section = (props) => {
    const [img, setimg] = useState(hero_data[0])
    const slider = () => {
        if (plus >= 9) {
            plus = 0
        }
        ++plus
        setTimeout(() => {
            setimg(hero_data[plus])
        }, 3000);
    }

    slider()

    return (<>
        <div className={`${props.width} cursor-pointer`}>
            <img src={img} className={props.img_class} alt="" />
        </div>
    </>
    )
}

export { Hero_section }