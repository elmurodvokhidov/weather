import CurrentWeather from "./components/current-weather/CurrentWeather";
import Search from "./components/search/Search";
import './Main.css';

function App() {

  function handleOnSearchChange(a) {
    const [lan, lon] = a.value.split(' ');
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
