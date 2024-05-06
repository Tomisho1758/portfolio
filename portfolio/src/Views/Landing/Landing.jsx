import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
        <div>
        <h1 className='title'>Bienvenidos!</h1>
        </div>
        <div>
        <Link to="/home" className='homeButton'>
          Adelante, les cuento un poco de mi.
        </Link>
        </div>
    </div>
    
  )
}
