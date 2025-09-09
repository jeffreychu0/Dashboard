import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WindowedDashboard from './pages/WindowedDashboard';

function App() {

  return (
    <Router>
      <div className="pt-16">
        <NavBar />
        <Routes>
          <Route path="/" element={<WindowedDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
