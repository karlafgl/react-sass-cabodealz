import React from 'react';

const Hero = ({onInputChange}) => {
  return(
    <div className="hero">
      <div className="contenido-hero contenedor">
        <h2>Book your Activity</h2>
        <p>The best Deals in town</p>
        <form action="#" id="busqueda" method="post" className="formulario">
            <input className="" type="text" placeholder="¿Search your favorite activity?" id="buscador" onChange={onInputChange}/>
            <input type="submit" id="submit-buscador" className="submit-buscador"/>
        </form>
      </div>
    </div>
  )
}

export default Hero;