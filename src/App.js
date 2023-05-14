import CurrentWeather from "./components/current-weather/CurrentWeather";
import Search from "./components/search/Search";
import './Main.css';

function App() {

  function handleOnSearchChange(a) {
    console.log(a);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
