import axios from "axios";

export default class PostService {
	static async getGeoCity(city_name, limit, appid = 'b6059de10dc4209b4d9b993d74b6cdc7') {
		const response = await axios.get('http://api.openweathermap.org/geo/1.0/direct', {
			params: {
			q: city_name,
			limit: limit,
			appid: appid
			}
		})
		return response;
	}

	static async getCurrentWeather(lat, lon, lang, appid = 'b6059de10dc4209b4d9b993d74b6cdc7') {
		const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
			params: {
			lat: lat,
			lon: lon,
			lang: lang,
			appid: appid
			}
		})
		return response;
	}
	//api.openweathermap.org/data/2.5/forecast/daily
	static async getDailyForecast(lat, lon, lang, cnt, appid = 'b6059de10dc4209b4d9b993d74b6cdc7') {
		const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
			params: {
			lat: lat,
			lon: lon,
			lang: lang,
			cnt: cnt,
			appid: appid
			}
		})
		return response;
	}
}
