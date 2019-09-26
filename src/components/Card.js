import React from 'react';

const timeConvert = (n) => {
    let num = n;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return `${rhours}:${rminutes} hrs`
}

const truncate = (str, no_words) => {
    let newText = str.split(" ").splice(0,no_words).join(" ");
    return `${newText}...`
}

const Card = ({name, image, price, duration, description}) => {
    return(
      <div className="box zone">
        <div className="card-header">
            <p className="activity-title">{name}</p>
            <button className="carrito"><i className="fas fa-shopping-cart"></i></button>
        </div>
        <img src={image}/>
        <div className="price">
            <p>Price:</p>
            <p>{`$${price}.00`}</p>  
        </div>
        <div className="description">
            <p>{truncate(description, 30)}</p>
            <a href="" className="read-more">Read more</a>
            <p><i className="far fa-2x fa-clock"></i>{timeConvert(duration)}</p>
            <a href="#" className="boton" data-id="1">Book Now</a>
        </div>
        
      </div>
    )
}

export default Card