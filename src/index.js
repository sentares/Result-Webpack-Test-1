import './index.scss'

let activeWeather = {
	audio: null,
	currentSound: null,
	bgImage: null,
}

window.handleClickButton = function () {
	const button = event.currentTarget
	const bgImage = button.getAttribute('data-bg')
	const soundFile = button.getAttribute('data-sound')

	activeWeather.bgImage = bgImage
	activeWeather.soundFile = soundFile

	document.body.style.backgroundImage = `url('./img/${bgImage}')`

	if (activeWeather.currentSound === soundFile) {
		if (activeWeather.audio.paused) {
			activeWeather.audio.play()
		} else {
			activeWeather.audio.pause()
		}
	} else {
		if (activeWeather.audio) {
			activeWeather.audio.pause()
			activeWeather.audio.currentTime = 0
		}

		activeWeather.audio = new Audio(`./sounds/${soundFile}`)

		activeWeather.audio.loop = true
		activeWeather.audio.play()
		activeWeather.currentSound = soundFile
	}
}

document.getElementById('volume').addEventListener('input', function () {
	if (activeWeather.audio) {
		activeWeather.audio.volume = this.value
	}
})
