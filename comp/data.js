'use strict'
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod }
	}
Object.defineProperty(exports, '__esModule', { value: true })
const summer_bg_jpg_1 = __importDefault(require('../public/img/summer-bg.jpg'))
const rainy_bg_jpg_1 = __importDefault(require('../public/img/rainy-bg.jpg'))
const winter_bg_jpg_1 = __importDefault(require('../public/img/winter-bg.jpg'))
const summer_mp3_1 = __importDefault(require('../public/sounds/summer.mp3'))
const rain_mp3_1 = __importDefault(require('../public/sounds/rain.mp3'))
const winter_mp3_1 = __importDefault(require('../public/sounds/winter.mp3'))
const WeatherData = [
	{
		name: 'summer',
		audioName: summer_mp3_1.default,
		imgName: summer_bg_jpg_1.default,
	},
	{
		name: 'rainy',
		audioName: rain_mp3_1.default,
		imgName: rainy_bg_jpg_1.default,
	},
	{
		name: 'winter',
		audioName: winter_mp3_1.default,
		imgName: winter_bg_jpg_1.default,
	},
]
exports.default = WeatherData
