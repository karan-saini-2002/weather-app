const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa03b410f6msh661cc4c7c3619d1p1971f2jsnd271fb699f39',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
	temp2.innerHTML = response.temp
    feels_like.innerHTML = response.temp
    humidity.innerHTML = response.temp
	humidity2.innerHTML = response.temp
    min_temp.innerHTML = response.temp
    max_temp.innerHTML = response.temp
    wind_speed.innerHTML = response.temp
	wind_speed2.innerHTML = response.temp
    wind_degrees.innerHTML = response.temp
    sunrise.innerHTML = response.temp
    sunset.innerHTML = response.temp
	})
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather(" delhi")