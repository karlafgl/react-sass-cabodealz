import React from 'react';

const Navigation = () => {
  return(
    <div className="navigation">
      <nav className="second-nav">
        <ul>
          <li><a href=""><i className="fas fa-phone-alt"></i>(624) 1827264</a></li>
          <li><a href="">Email@example.com</a></li>
          <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
        </ul>
      </nav>
      <nav className="main-nav">
        <ul id="ejm1">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Activities</a></li>
          <li><a href="">Contact</a></li>
          <li><a href=""><i className="fas fa-shopping-cart"></i></a></li>
        </ul>
      </nav>
     
    </div>
   
  )
}

export default Navigation;