import './components/styles/App.css';
import './components/styles/colors.css';
import WeatherNavbar from "./components/UI/Navbar/Navbar";
import Main from './components/pages/Main';

function App() {
  return (
	<div className="App">
		<WeatherNavbar/>
		<Main/>
	</div>
  );
}
export default App;