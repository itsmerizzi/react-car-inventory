import React from "react";
import "./NavBarModule.css";

function NavBarComponent({ handleNavClick }) {
  const navPositions = ["Home" ,"Sobre" ,"Carros" ,"Adicionar Carro"];

  return (
    <nav>
        {navPositions.map((position, index) => (
          <span key={index} className="navbar-item" onClick={() => handleNavClick(position)}>
            {position}
          </span>
        ))}
    </nav>
  );
}

export default NavBarComponent;