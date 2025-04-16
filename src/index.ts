import './index.scss';
import WeatherData from './data';

interface ActiveWeather {
	audio: HTMLAudioElement | null
	currentSound: string | null
	bgImage: string | null
}

const activeWeather: ActiveWeather = {
  audio: null,
  currentSound: null,
  bgImage: null,
};

declare global {
	interface Window {
		handleClickButton: (event: MouseEvent) => void
	}
}

const playAudio = (src: string): HTMLAudioElement => {
  const audio = new Audio(`./sounds/${src}`);
  audio.loop = true;
  audio.play().catch(console.error);
  return audio;
};

function handleClickButton(event: MouseEvent): void {
  const target = event.currentTarget as HTMLElement | null;
  if (!target?.id) return;

  const clickedItem = WeatherData.find((item) => item.name === target.id);
  if (!clickedItem) return;

  const { imgName, audioName } = clickedItem;

  document.body.style.backgroundImage = `url('./img/${imgName}')`;
  activeWeather.bgImage = imgName;

  if (activeWeather.currentSound === audioName && activeWeather.audio) {
    activeWeather.audio.paused
      ? activeWeather.audio.play().catch(console.error)
      : activeWeather.audio.pause();
  } else {
    if (activeWeather.audio) {
      activeWeather.audio.pause();
      activeWeather.audio.currentTime = 0;
    }
    activeWeather.audio = playAudio(audioName);
    activeWeather.currentSound = audioName;
  }
}

function bindWeatherButtons() {
  document
    .querySelectorAll<HTMLButtonElement>('.weather-button')
    .forEach((button) => button.addEventListener('click', handleClickButton));
}

function bindVolumeControl() {
  const volumeInput = document.getElementById(
    'volume',
  ) as HTMLInputElement | null;
  if (!volumeInput) return;

  volumeInput.addEventListener('input', () => {
    if (activeWeather.audio) {
      const volume = parseFloat(volumeInput.value);
      activeWeather.audio.volume = isNaN(volume) ? 0 : volume;
    }
  });
}

bindWeatherButtons();
bindVolumeControl();
window.handleClickButton = handleClickButton;
