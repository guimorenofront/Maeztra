import logo from './logo.svg';
import './App.scss';
import Background from './components/Background/background';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import QuestaoF from './Pages/Questao1';
import MainRoutes from './routes';
function App() {
  return (
    <Router>
      <MainRoutes/>
    </Router>
  );
}

export default App;
