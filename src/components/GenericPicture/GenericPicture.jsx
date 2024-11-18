import React from 'react'

const GenericPicture = (props) => {
    return (
        <img src={props.src} className={props.class} alt={props.alt} />
    )
}

export default GenericPicture