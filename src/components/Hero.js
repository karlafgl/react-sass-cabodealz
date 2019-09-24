import React from 'react';

const Hero = () => {
  return(
    <div class="hero">
      <div class="contenido-hero contenedor">
        <h2>Book your Activity</h2>
        <p>The best Deals in town</p>
        <form action="#" id="busqueda" method="post" class="formulario">
            <input class="" type="text" placeholder="¿Search your favorite activity?" id="buscador"/>
            <input type="submit" id="submit-buscador" class="submit-buscador"/>
        </form>
      </div>
    </div>
  )
}

export default Hero;