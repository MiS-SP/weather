import React, {useEffect, useMemo, useState, useRef, useCallback} from "react";
import PostService from "../API/WeatherService";
import WeatherInput from "../UI/Input/Input";
import WeatherButton from "../UI/Button/WeatherButton";
import { Col, Row } from "react-bootstrap";
import DailyForecast from "../UI/Sections/DailyForecast/DailyForecast";

function Welcome() {
	const [weatherCards, setWeatherCards] = useState([]);
	const [city, setCity] = useState('');
	const [geo, setGeo] = useState([]);
	const [use, setUse] = useState(false);

	async function fetchGeo(city) {
		let axiPromise = null;
		if (axiPromise === null) {
			axiPromise = await PostService.getGeoCity(city, 1)
			return axiPromise.data
		} else if (axiPromise.data[0].name === city) {
			return axiPromise.data
		} else {
			axiPromise = await PostService.getGeoCity(city, 1)
			return axiPromise.data
		}
	}

	async function fetchWeather(geo) {
		let i = null;
		let axiPromise = null;
		let res = [];
		for (i = 0; i < 8; ++i) {
			axiPromise = await PostService.getDailyForecast(geo[0].lat, geo[0].lon, 'eu', i)
			res.push(axiPromise.data)
		}
		return res
	}
		const updateGeo = useCallback(
			async (city) => {
				const loadedGeo = await fetchGeo(city);
				setGeo(loadedGeo);
				}, [])
			
		const updateWeather = useCallback(
			async (geo) => {
				const loadedWeather = await fetchWeather(geo);
				setWeatherCards(loadedWeather)
			}, [])
		
		useEffect(() => {
			if (use) {
				updateGeo(city);
				if (geo.length > 0) {
					updateWeather(geo);
				}
			}
		}, [use])

	if(weatherCards.length === 0) {
		return (
				<section id="welcome" className="welcome">
					<Row>
						<Col xl={12}>
							<div className="bg-gray-200 text-center border rounded mt-2 mb-2 p-5 bg-gradient">
								<h1 className="display-4">
									My weatherApp
								</h1>
								<p className="lead">Hello, this is my weather app made with react.</p>
								<WeatherInput
									value={city}
									onChange={e => {setUse(false); setCity(e.target.value)}}
									onKeyPress={e => {
										if (e.key === 'Enter') {setUse(true); setCity(e.target.value)}}}
									/>
								<p><small>All data is obtained from a free key from openweather.</small></p>
								<WeatherButton callback={test}>
									Check city weather
								</WeatherButton>
								<WeatherButton callback={() => {setUse(true)}}>
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
							<div className="bg-gray-200 text-center border rounded mt-2 mb-2 p-5 bg-gradient">
								<h1 className="display-4">
									My weatherApp
								</h1>
								<p className="lead">Hello, this is my weather app made with react.</p>
								<WeatherInput
									value={city}
									onChange={e => {setUse(false); setCity(e.target.value)}}
									onKeyPress={e => {
										if (e.key === 'Enter') {setUse(true); setCity(e.target.value)}}}
									/>
								<p><small>All data is obtained from a free key from openweather.</small></p>
								<WeatherButton callback={() => {setUse(true)}}>
									Check city weather
								</WeatherButton>
							</div>
						</Col>
					</Row>
						<DailyForecast weatherCards={weatherCards} geo={geo}/>
				</section>
	)
}
export default Welcome;