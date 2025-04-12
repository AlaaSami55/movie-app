import React from 'react'

export default function Card(props) {
    let { data } = props
    let BASE_URL = 'https://image.tmdb.org/t/p/w500'
    return (
        <div className='col-md-2'>
            <img src={BASE_URL + data.poster_path} alt="" />
            <h5>{data.title??data.name}</h5>
        </div>
    )
}
