import React from 'react';
import Menu from './Components/menu/menu';
import PetList from './Components/content/pet-list'
import { Route, BrowserRouter } from 'react-router-dom'
import InfoPet from "./Components/content/info";
import PetForm from "./Components/content/pet-form";


function App() {
  return (
      <BrowserRouter>
    <div>
      <Menu />
      <br />
      <Route path={'/info'} component={InfoPet} />
      <Route path={'/pet-list'} component={PetList} />
      <Route path={'/pet-form'} component={PetForm} />
    </div>
      </BrowserRouter>
  );
}
export default App;
