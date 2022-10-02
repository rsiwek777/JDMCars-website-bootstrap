document.addEventListener('DOMContentLoaded', () => {
	const nav = document.querySelector('#navbar')

	const addShadow = () => {
		window.scrollY >= 200 ? nav.classList.add('shadow-bg') : nav.classList.remove('shadow-bg')
	}

	window.addEventListener('scroll', addShadow)
})
