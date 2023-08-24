import './App.css';
import { Paths } from './Routes/Routes';

import {
  useContext
} from "react"

import { CountriesContext } from './Contexts/DataContext/DataContext';

function App() {
  const context = useContext(CountriesContext)

  console.log(context);

  return (
    <div
      className="bg-very-dark-blue text-white h-full min-h-screen">
      <Paths />
    </div>
  );
}

export default App;
