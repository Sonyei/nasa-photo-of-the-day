import React from 'react'


const displayHeader = props => {

    const {imgInfo, title, copyright, date, imageDesc} = props;

    return (
        <div className="Header">
            <img src = {imgInfo} alt='Space'></img>
            <h1>{title}</h1>
            <p className='date'>Date: {date}</p>
            <p>{imageDesc}</p>
            <p className='copyright'>Copyright: {copyright}</p>

            <button>Close</button>
        </div>
    )
}

export default displayHeader;