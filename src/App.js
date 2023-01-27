import './App.css';
import {Routes, Route} from 'react-router-dom'
import StarshipList from './Pages/StarshipList/StarshipList';
import StarshipPage from './Pages/StarshipPage/StarshipPage';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<StarshipList />}/>
    <Route path="/starships/" element={<StarshipPage />}/>

    </Routes>
    </>
  );
}

export default App;
