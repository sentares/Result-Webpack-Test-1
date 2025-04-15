import './index.scss'

let activeWeather = {
	audio: null,
	currentSound: null,
	bgImage: null,
}

window.handleClickButton = function () {
	const button = event.currentTarget
	const bgImage = button.getAttribute('data-bg')

	activeWeather.bgImage = bgImage

	document.body.style.backgroundImage = `url('./img/${bgImage}')`
}
