'use strict'
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod }
	}
Object.defineProperty(exports, '__esModule', { value: true })
require('./index.scss')
const data_1 = __importDefault(require('./data'))
const activeWeather = {
	audio: null,
	currentSound: null,
	bgImage: null,
}
const playAudio = src => {
	const audio = new Audio(`./sounds/${src}`)
	audio.loop = true
	audio.play().catch(console.error)
	return audio
}
function handleClickButton(event) {
	const target = event.currentTarget
	if (!target?.id) return
	const clickedItem = data_1.default.find(item => item.name === target.id)
	if (!clickedItem) return
	const { imgName, audioName } = clickedItem
	document.body.style.backgroundImage = `url('./img/${imgName}')`
	activeWeather.bgImage = imgName
	if (activeWeather.currentSound === audioName && activeWeather.audio) {
		activeWeather.audio.paused
			? activeWeather.audio.play().catch(console.error)
			: activeWeather.audio.pause()
	} else {
		if (activeWeather.audio) {
			activeWeather.audio.pause()
			activeWeather.audio.currentTime = 0
		}
		activeWeather.audio = playAudio(audioName)
		activeWeather.currentSound = audioName
	}
}
function bindWeatherButtons() {
	document
		.querySelectorAll('.weather-button')
		.forEach(button => button.addEventListener('click', handleClickButton))
}
function bindVolumeControl() {
	const volumeInput = document.getElementById('volume')
	if (!volumeInput) return
	volumeInput.addEventListener('input', () => {
		if (activeWeather.audio) {
			const volume = parseFloat(volumeInput.value)
			activeWeather.audio.volume = isNaN(volume) ? 0 : volume
		}
	})
}
bindWeatherButtons()
bindVolumeControl()
window.handleClickButton = handleClickButton
