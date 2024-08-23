import React from 'react';
import './CarsListModule.css';

function CarsListComponent({ carsList, removeCar }) {
  return (
    <div>
      <h3>Lista de carros</h3>
      {carsList.map((car, index) => (
        <div key={index}>
          <span>{car.name}, {car.brand}, {car.color}, {car.year}</span>
          <button className="remove-button-style" onClick={() => removeCar(index)}>Remover</button>
        </div>
      ))}
    </div>
  );
}

export default CarsListComponent;