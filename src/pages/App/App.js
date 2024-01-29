import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { movies } from "../../data.js"
import './App.css';
import NavBar from "../../components/NavBar/NavBar"
import LoginPage from "../../pages/LoginPage/LoginPage"
import MoviesListPage from "../../pages/MoviesListPage/MoviesListPage"
import MovieDetailPage from "../../pages/MovieDetailPage/MovieDetailPage"
import ActorListPage from "../../pages/ActorListPage/ActorListPage"
import ActorDetailPage from '../ActorDetailPage/ActorDetailPage.jsx';

function App() {
  const [user, setUser] = useState(null)

  return (
    <main className="App">
      {user ? 
      <>
        <NavBar user={ user }/>
        <Routes>
          <Route path="/" element={ <MoviesListPage movies={ movies }/> } />
          <Route path="/movies/:movieName" element={ <MovieDetailPage movies={ movies }/> } />
          <Route path="/actors" element={ <ActorListPage movies={ movies }/> } />
          <Route path="/actors/:actorName" element={ <ActorDetailPage movies={ movies }/> } />
        </Routes>
      </>
      :
        <Routes>
          <Route path="/" element={ <LoginPage setUser={setUser} /> }/>
        </Routes>
      }
    </main>
  );
}

export default App;
