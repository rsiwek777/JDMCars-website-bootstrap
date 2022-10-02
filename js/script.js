document.addEventListener('DOMContentLoaded', () => {
	const nav = document.querySelector('#navbar')
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	const addShadow = () => {
		window.scrollY >= 200 ? nav.classList.add('shadow-bg') : nav.classList.remove('shadow-bg')
	}

	allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

	window.addEventListener('scroll', addShadow)
})
