import ApplicationContext from './context/ApplicationContext';
import Authentication from './components/Authentication/Authentication';

function App() {
  return (
    <ApplicationContext>
      <Authentication />  {/* Ovde je malo zbunjujuce sto je sve u Authentication komponenti. Mozes da napravis rute uz pomoc react-router-dom, da imamo /login, /registe i home page */}
    </ApplicationContext>
  );
}

export default App;
