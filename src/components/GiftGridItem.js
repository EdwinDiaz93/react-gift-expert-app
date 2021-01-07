import React from 'react'

export const GiftGridItem = ({title,url}) => {
    
    return (
        <>
        <div className="card animate__animated  animate__fadeIn">
        <h3>{title}</h3>
            <img src={url}/>
        </div>
        </>
    )
}
