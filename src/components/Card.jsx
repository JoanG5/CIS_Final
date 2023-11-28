import React from 'react'

function Card( props ) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={props.image} alt={props.alt} /></figure>
        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.description}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Go</button>
            </div>
        </div>
    </div>
  )
}

export default Card