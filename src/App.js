import { Paths } from './Routes/Routes';
import { NavBar } from './Components/Navigation/NavBar';

function App() {
  return (
    <div
      className="bg-very-dark-blue text-white h-full min-h-screen min-w-screen overflow-hidden font-medium font-text
      mobile:text-sm desktop:text-lg">
      <NavBar />
      <Paths />
    </div>
  );
}

export default App;
