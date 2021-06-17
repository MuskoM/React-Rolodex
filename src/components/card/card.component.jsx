import React from 'react'
import './card.styles.css'

export const Card = (props) =>{

    let monster = props.monster

    return <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
        <h1>{monster.name}</h1>
        <h2>{monster.email}</h2>
    </div>
}