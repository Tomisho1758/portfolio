import React from 'react'
import { Link } from 'react-router-dom'
import './Home.modules.css'
export default function Home() {
  return (
    <div className='Homecss'>
    <div className='intro'>
<h3>
    Mi nombre es Tomas Moukarzel, aqui les cuento mi background.
</h3>
    </div>
    <div className='etapas'>
        <div className='preIT'>
            <h3>Pre It</h3>
            
            <Link to="/PreIt" className='PITButton'>
            <h4>Aqui les cuento que hacia antes de entrar mundo de la programacion.</h4>
        </Link>
        </div>
        <div className='IT'>
            <h3>Estudios</h3>
            
            <Link to="/It" className='ITButton'>
            <h4>Veni aqui para conocer mis estudios.</h4>
        </Link>

        

    </div>
    <div className='Proyectos'>
            <h3>Proyectos</h3>
            
            <Link to="/Proyectos" className='Proyects'>
            <h4>Y aqui para conocer mis Proyectos.</h4>
        </Link>

        

    </div>


    </div>
    </div>
  )
}
