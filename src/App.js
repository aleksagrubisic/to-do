import {Route, Routes} from 'react-router-dom'

import ApplicationContext from './context/ApplicationContext';
import PrivateRoutes from './components/Authentication/PrivateRoutes';
import Home from './pages/Home/Home';
import SignUp from './pages/Signup/SignUp';
import ToDo from './pages/ToDo/ToDo';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <ApplicationContext>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/todo' element={<ToDo />}/>
        </Route>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
      {/* Ovde je malo zbunjujuce sto je sve u Authentication komponenti. Mozes da napravis rute uz pomoc react-router-dom, da imamo /login, /registe i home page */}
    </ApplicationContext>
  );
}

export default App;
