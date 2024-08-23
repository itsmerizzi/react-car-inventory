import React from 'react';
import './CarFormModule.css';

function CarFormComponent({ car, addCar, handleChange }) {
  return (
    <div>
      <h3>Adicionar um carro</h3>
      <input
        type="text"
        name="name"
        value={car.name}
        onChange={handleChange}
        placeholder="Nome"
        required
      />
      <br />
      <input
        type="text"
        name="brand"
        value={car.brand}
        onChange={handleChange}
        placeholder="Marca"
        required
      />
      <br />
      <input
        type="text"
        name="color"
        value={car.color}
        onChange={handleChange}
        placeholder="Cor"
        required
      />
      <br />
      <input
        type="text"
        name="year"
        value={car.year}
        onChange={handleChange}
        placeholder="Ano"
        required
      />
      <br />
      <button onClick={addCar} className="button-style">Adicionar Carro</button>
    </div>
  );
}

export default CarFormComponent;