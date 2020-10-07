import React from 'react'


const displayHeader = props => {

    const {imgInfo, title, copyright, date, imageDesc} = props;

    return (
        <div className="Header">
            <img src = {imgInfo} alt='Space'></img>
            <h1>{title}</h1>
            <p className='date'>{date}</p>
            <p>{imageDesc}</p>
            <p>{copyright}</p>

            <button>Close</button>
        </div>
    )
}

export default displayHeader;