import {BrowserRouter,Routes,Route} from 'react-router-dom'

//pages and components
import {Home} from './pages/home.jsx';
import {Login} from './pages/login.jsx';
import Register from './pages/register.jsx'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <div className="pages">
          <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/login"element={<Login/>}/>
            <Route path="/register"element={<Register/>}/>
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;