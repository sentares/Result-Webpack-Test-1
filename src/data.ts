export interface IWeatherItem {
	name: string
	imgName: string
	audioName: string
}

const WeatherData: IWeatherItem[] = [
	{
		name: 'summer',
		audioName: 'summer.mp3',
		imgName: 'summer-bg.jpg',
	},
	{
		name: 'rainy',
		audioName: 'rain.mp3',
		imgName: 'rainy-bg.jpg',
	},
	{
		name: 'winter',
		audioName: 'winter.mp3',
		imgName: 'winter-bg.jpg',
	},
]

export default WeatherData
