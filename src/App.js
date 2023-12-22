import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyHero from './components/MyHero';
import MovieGallery from './components/MovieGallery';





function App() {
  return (
    <div className="App">
      <header>
        <MyNavbar />
      </header>
      <MyHero />
      <MovieGallery apiEndpoint="star+wars" title="Star Wars Series" />
      <MovieGallery apiEndpoint="batman" title="Batman Series" />
      <MovieGallery apiEndpoint="harry+potter" title="Harry Potter Series" />
      <MyFooter />
    </div>
  );
}

export default App;
