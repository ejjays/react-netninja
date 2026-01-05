import Home from './pages/Home';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes} from 'react-router';
import Create from './components/Create';

function App() {
  return(
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/create" element={ <Create /> }/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
