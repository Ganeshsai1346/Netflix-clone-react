
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from './components/NavBar';
import MovieGalleryOne from './components/MovieGalleryOne';


function App() {
  return (
    <div>
      <NavBar />
      <MovieGalleryOne moviesGenre="hobbit" movieTitle="Hobbit" />
      <MovieGalleryOne moviesGenre="avengers" movieTitle="Avengers" />
      <MovieGalleryOne moviesGenre="twilight" movieTitle="Twilight" />
    </div>
  );
}

export default App;
