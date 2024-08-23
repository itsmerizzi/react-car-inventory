import './App.css';
import logo from './logo.svg';
import NavBarComponent from './components/NavBar/NavBarComponent';
import HomeComponent from './components/Home/HomeComponent';
import AboutComponent from './components/About/AboutComponent';
import CarsListComponent from './components/CarsList/CarsListComponent';
import CarFormComponent from './components/CarForm/CarFormComponent';
import CarsList from './data/CarsList';
import { useState } from 'react';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [carsList, setCarsList] = useState([...CarsList]);
  const [car, setCar] = useState({name: '', brand: '', color: '', year: ''});

  const handleNavClick = (position) => {
    setActiveComponent(position);
  };

  function addCar(e) {
    e.preventDefault();
    const newCar = {name: car.name, brand: car.brand, color: car.color, year: car.year}
    setCarsList([...carsList, newCar]);
    setCar({ name: '', brand: '', color: '', year: '' });
    alert('Carro adicionado com sucesso!');
  }

  function removeCar(index) {
    const updatedCarsList = carsList.filter((_, i) => i !== index);
    setCarsList(updatedCarsList);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-navbar">
          <img src={logo} className="App-logo" alt="logo" />
          <NavBarComponent handleNavClick={handleNavClick}/>
        </div>
      </header>
      <body className="App-body">
        <div style={{ display: activeComponent === "Home" ? 'block' : 'none' }}>
          <HomeComponent />
        </div>
        <div style={{ display: activeComponent === "Sobre" ? 'block' : 'none' }}>
          <AboutComponent />
        </div>
        <div style={{ display: activeComponent === "Carros" ? 'block' : 'none' }}>
          <CarsListComponent carsList={carsList} removeCar={removeCar} />
        </div>
        <div style={{ display: activeComponent === "Adicionar Carro" ? 'block' : 'none' }}>
          <CarFormComponent car={car} addCar={addCar} handleChange={handleChange} />
        </div>
      </body>
    </div>
  );
}

export default App;
