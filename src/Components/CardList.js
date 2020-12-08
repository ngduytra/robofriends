import React from 'react'

import Card from './Card'

const CardList = (props)=>{
    const cardComponent = props.robots.map(user=>{
        return <Card robot={user}/>
    })
    return (
        <div className='tc'>
            {cardComponent}
        </div>
    )
}

export default CardList