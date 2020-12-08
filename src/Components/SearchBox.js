import React from 'react'

const SearchBox = (props)=>{
    return(
        <form className='tc'>
            <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='Divergent!' onChange={props.searchChange}/>
        </form>
    )
}

export default SearchBox