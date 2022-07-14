import React from "react";
import WeatherCard from "../UI/Card/Card";
import {Col} from "react-bootstrap";
import cl from '../UI/Card/Card.module.css'

function DailyForecastSection(props) {

	console.log(props)

	return (
		<section id="cardsSection">
			<Col xxl={12} className="text-light mb-1">
				<div className={cl.relative + " rounded bg-dark text-center"}>
					<h2  className={cl.weatherCardTitle + " display-5"} >{props.geo[0].name}</h2>
					<div className={cl.weatherCardRegion}>
						{props.geo[0].country}
					</div>
				</div>
			</Col>
			{props.weatherCards.map(card =>
			<WeatherCard card={card} key={card} />
			)}
		</section>
	)
}
export default DailyForecastSection;