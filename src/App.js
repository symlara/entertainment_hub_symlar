import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Header from './components/Header';
import SimpleBottomNavigation from './components/MainNav';
import { Container } from "@material-ui/core";
import Trending from './pages/Trending';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
    <Header />

    <div className="App">
      <Container style={{color: '#fff'}}>
        <Routes>
        <Route path="/" element={<Trending exact/>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/search" element={<Search />} />
        </Routes>
      </Container>
    </div>
    <SimpleBottomNavigation />
    </BrowserRouter>
   
    
  );
}

export default App;
