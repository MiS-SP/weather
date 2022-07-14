import React, {useState} from "react";
import PostService from "../API/WeatherService";
import WeatherInput from "../UI/Input/Input";
import WeatherButton from "../UI/Button/WeatherButton";
import { Col, Row } from "react-bootstrap";
import DailyForecastSection from "./DailyForecastSection";

function Welcome() {
	const [weatherCards, setWeatherCards] = useState([]);
	const [city, setCity] = useState('');
	const [geo, setGeo] = useState([])

	async function fetchGeo(city) {
		let weatherdata = null;
		if (weatherdata === null) {
			weatherdata = await PostService.getGeoCity(city, 1)
			console.log(weatherdata)
			setGeo(weatherdata.data)
			console.log(geo)
			return geo
		} else if (weatherdata.data[0].name === city) {
			setGeo(weatherdata.data)
			return geo
		} else {
			weatherdata = PostService.getGeoCity(city, 1)
			console.log(weatherdata)
			setGeo(weatherdata.data)
			console.log(geo)
			return geo
		}
	}

	// function fetchWeathersPost(city) {   // Вот оно великое васянство
	// 	const geo =  new Promise((res, rej) => res(fetchGeo(city)))
	// 		.then((result) => {
	// 			console.log(result)
	// 			let i = null;
	// 			for (i = 0; i < 3; ++i) {
	// 				PostService.getDailyForecast(result[0].lat, result[0].lon, 'eu', i)
	// 					.then(function (response) {
	// 						setWeatherCards(...weatherCards, [response])
	// 				})
	// 					.catch(function (err) {
	// 						console.log(err)
	// 					})
	// 			}
	// 		}).catch(rej=> console.log(rej))
	// };

		function fetchWeathersPost(city) {  //попробовать https://stackoverflow.com/questions/60375517/usestate-with-async-function-returning-promise-pending
			fetchGeo(city)
			.then((result) => {
				console.log(result)
				let i = null;
				for (i = 0; i < 2; ++i) {
					PostService.getDailyForecast(result[0].lat, result[0].lon, 'eu', i)
					.then(function (response) { setWeatherCards(...weatherCards, [response]) },
						(err) => console.log(err))
				}
			}, 
				(err) => {
					console.log(err)
				})
			
		}

	if(weatherCards.length === 0) {
		return (
				<section id="welcome" className="welcome">
					<Row>
						<Col xl={12}>
							<div className="bg-color-7 text-center border rounded mt-2 mb-2 p-5">
								<h1 className="display-4">
									My weatherApp
								</h1>
								<p className="lead">Hello, this is my weather app made with react.</p>
								<WeatherInput value={city} onChange={event => setCity(event.target.value)} onKeyPress={event => {
									if (event.key === 'Enter') {fetchWeathersPost(city)}}}/>
								<p><small>All data is obtained from a free key from openweather.</small></p>
								<WeatherButton callback={() => fetchWeathersPost(city)}>
									Check city weather
								</WeatherButton>
							</div>
						</Col>
					</Row>
				</section>
		)
	}
	return (
				<section id="welcome" className="welcome">
					<Row>
						<Col xl={12}>
							<div className="bg-color-7 text-center border rounded mt-2 mb-2 p-5">
								<h1 className="display-4">
									My weatherApp
								</h1>
								<p className="lead">Hello, this is my weather app made with react.</p>
								<WeatherInput value={city} onChange={event => setCity(event.target.value)} onKeyPress={event => {
									if (event.key === 'Enter') {fetchWeathersPost(city)}}}/>
								<p><small>All data is obtained from a free key from openweather.</small></p>
								<WeatherButton callback={() => fetchWeathersPost(city)}>
									Check city weather
								</WeatherButton>
							</div>
						</Col>
					</Row>
						<DailyForecastSection weatherCards={weatherCards} geo={geo}/>
				</section>
	)
}
export default Welcome;