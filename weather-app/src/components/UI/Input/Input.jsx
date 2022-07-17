import React from "react"
import { FormControl, InputGroup } from "react-bootstrap";

const WeatherInput = ({...props}) => {
	return (
		<InputGroup className="m-1 p-1">
			<InputGroup.Text>Enter city</InputGroup.Text>
			<FormControl
				size="lg"
				type="text"
				{...props}
				>
			</FormControl>

		</InputGroup>
	)
}
export default WeatherInput;