import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Userenter from './components/Userenter'
import Dashboard from './components/Dashboard';
import CreateProject from './components/CreateProject';
import CreateClient from './components/CreateClient';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/userenter" element={<Userenter />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/createproject" element={<CreateProject />} />
            <Route path="/createclient" element={<CreateClient />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
