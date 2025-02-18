import { BrowserRouter } from 'react-router-dom';
// import './App.css';
import './index.css'
import RouteCompo from './Components/RouteCompo'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouteCompo />
      </BrowserRouter>
    </div>
  );
}

export default App;
