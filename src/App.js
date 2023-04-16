import './App.css';
import Routers from './Router';
import { BrowserRouter as Router } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from './context/AppContext';
import LoadingPage from './components/LoadingPage/LoadingPage';
import Header from './components/Header.js/Header';
import Navigation from './components/Navigation/Navigation';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const { isLoading, setIsLoading } = useContext(AppContext);
  setTimeout(() => {
    setIsLoading(false)
  }, 1000);
  return (
    isLoading ? (<LoadingPage />) :
    <div className="App">
      <Router>
        <Header />
        <SearchBar />
        <Navigation />
        <Routers />
      </Router>
    </div>
  );
}

export default App;
