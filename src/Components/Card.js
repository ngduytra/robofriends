import React from 'react'

const Card = (props)=>{
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${props.robot.name}?100x10`}/>
            <div>
                <h2>{props.robot.name}</h2>
                <p>{props.robot.email}</p>
            </div>
        </div>
    );
}

export default Card