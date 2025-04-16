import './index.scss';
import WeatherData from './data.ts';

const activeWeather = {
  audio: null,
  currentSound: null,
  bgImage: null,
};

window.handleClickButton = function (event) {
  const button = event.currentTarget;
  const buttonId = button.getAttribute('id');

  const clickedItem = WeatherData.find((item) => item.name === buttonId);

  const { imgName, audioName } = clickedItem;

  document.body.style.backgroundImage = `url('./img/${imgName}')`;

  activeWeather.bgImage = imgName;
  activeWeather.soundFile = audioName;

  if (activeWeather.currentSound === audioName) {
    if (activeWeather.audio.paused) {
      activeWeather.audio.play();
    } else {
      activeWeather.audio.pause();
    }
  } else {
    if (activeWeather.audio) {
      activeWeather.audio.pause();
      activeWeather.audio.currentTime = 0;
    }

    activeWeather.audio = new Audio(`./sounds/${audioName}`);

    activeWeather.audio.loop = true;
    activeWeather.audio.play();
    activeWeather.currentSound = audioName;
  }
};

document.getElementById('volume').addEventListener('input', function () {
  if (activeWeather.audio) {
    activeWeather.audio.volume = this.value;
  }
});
