import ApplicationContext from './context/ApplicationContext';
import Authentication from './components/Authentication/Authentication';

function App() {
  return (
    <ApplicationContext>
      <Authentication />
    </ApplicationContext>
  );
}

export default App;
