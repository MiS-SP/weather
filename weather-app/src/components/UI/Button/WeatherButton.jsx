import React from "react";
import styles from './WeatherButton.module.css'
import { Button } from "react-bootstrap";

function WeatherButton({children, callback, ...props}) {

	return (
		<Button onClick={callback} className={styles.button  + ' m-1'}>
			{children}
		</Button>
	)
}
export default WeatherButton