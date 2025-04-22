import summerBg from '../public/img/summer-bg.jpg'
import rainyBg from '../public/img/rainy-bg.jpg'
import winterBg from '../public/img/winter-bg.jpg'
import summerSound from '../public/sounds/summer.mp3'
import rainSound from '../public/sounds/rain.mp3'
import winterSound from '../public/sounds/winter.mp3'

export interface WeatherItem {
	name: string
	imgName: string
	audioName: string
}

const WeatherData: WeatherItem[] = [
	{
		name: 'summer',
		audioName: summerSound,
		imgName: summerBg,
	},
	{
		name: 'rainy',
		audioName: rainSound,
		imgName: rainyBg,
	},
	{
		name: 'winter',
		audioName: winterSound,
		imgName: winterBg,
	},
]

export default WeatherData
