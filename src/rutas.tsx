import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Map from './components/Map'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
           
            <li><Link to="/ubicacion/valor1/valor2">Ir a Ubicación</Link></li>
          </ul>
        </nav>

      
        <Route path="/ubicacion/:valor1/:valor2" Component={Map} />
      </div>
    </Router>
  );
}

export default App;