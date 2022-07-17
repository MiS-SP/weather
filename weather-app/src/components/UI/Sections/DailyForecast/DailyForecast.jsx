import React from "react"
import WeatherCard from '../../Card/Card'
import {Col, Row} from "react-bootstrap"
import cl from './DailyForecast.module.css'

function DailyForecast(props) {
	return (
		<section id="cardsSection" className="p-2 rounded border bg-gray-200">
			<Col xxl={12} className={cl.border + " mb-2 border-1 rounded bg-gradient  bg-gray-300"}>
				<div className={cl.relative + " rounded bg-transparent text-center"}>
					<h2  className={cl.weatherCardTitle + " display-5"} >{props.geo[0].name}</h2>
					<div className={cl.weatherCardRegion}>
						{props.geo[0].country}
					</div>
				</div>
			</Col>
			<Row>
			{props.weatherCards.map((card, i) =>
			<WeatherCard card={card} count={i} key={i} />
			)}
			</Row>
		</section>
	)
}
export default DailyForecast