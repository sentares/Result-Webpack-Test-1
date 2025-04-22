import './index.scss'
declare global {
	interface Window {
		handleClickButton: (event: MouseEvent) => void
	}
}
