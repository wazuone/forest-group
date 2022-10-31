const nav = document.querySelector('.burger-nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.burger-item')
const burgerBars = document.querySelector('.burger-bars')
const headerText = document.querySelector('.header-text')
const midText = document.querySelector('.mid-h2')
const sections = document.querySelectorAll('.section')
const navigation = document.querySelector('.nav')
const navList = document.querySelectorAll('.nav-item')

const headerSection = document.querySelectorAll('.header')
const aboutusSection = document.querySelectorAll('.about-us')
const offersSection = document.querySelectorAll('.offers')
const contactSection = document.querySelectorAll('.contact')

//SCROLLSPY

// const options = {
// 	threshold: '0.6',
// 	rootMargin: '-150px',
// }

// const observer = new IntersectionObserver(entries => {
// 	entries.forEach(e => {
// 		if (e.isIntersecting) {
// 			navList.forEach(link => {
// 				link.classList.remove('action-scroll')

// 				if (e.target.id === link.dataset.nav) {
// 					link.classList.add('action-scroll')
// 				}
// 			})
// 		}
// 	})
// }, options)

// sections.forEach(section => {
// 	observer.observe(section)
// })

const options = {
	threshold: 1,
}

const observer = new IntersectionObserver(entries => {
	entries.forEach(e => {
		if (e.isIntersecting) {
			navList.forEach(link => {
				link.classList.remove('action-scroll')

				if (e.target.id === link.dataset.nav) {
					link.classList.add('action-scroll')
				}
			})
		}
	})
}, options)

headerSection.forEach(header => {
	observer.observe(header)
})



const optionsAboutus = {
	threshold: 0.7,
	rootMargin: "-90px"
}

const observerAboutus = new IntersectionObserver(entries => {
	entries.forEach(e => {
		if (e.isIntersecting) {
			navList.forEach(link => {
				link.classList.remove('action-scroll')

				if (e.target.id === link.dataset.nav) {
					link.classList.add('action-scroll')
				}
			})
		}
	})
}, optionsAboutus)

aboutusSection.forEach(header => {
	observerAboutus.observe(header)
})



const optionsOffers = {
	threshold: 0.5,
}

const observerOffers = new IntersectionObserver(entries => {
	entries.forEach(e => {
		if (e.isIntersecting) {
			navList.forEach(link => {
				link.classList.remove('action-scroll')

				if (e.target.id === link.dataset.nav) {
					link.classList.add('action-scroll')
				}
			})
		}
	})
}, optionsOffers)

offersSection.forEach(header => {
	observerOffers.observe(header)
})



const optionsContact = {
	threshold: 0.5,
}

const observerContact = new IntersectionObserver(entries => {
	entries.forEach(e => {
		if (e.isIntersecting) {
			navList.forEach(link => {
				link.classList.remove('action-scroll')

				if (e.target.id === link.dataset.nav) {
					link.classList.add('action-scroll')
				}
			})
		}
	})
}, optionsContact)

contactSection.forEach(header => {
	observerContact.observe(header)
})











const handleNav = () => {
	nav.classList.toggle('active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('active')
			burgerBars.classList.remove('mobile-bar-colors')
		})
	})

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

ScrollReveal({
	reset: false,
	distance: '60px',
	duration: 1500,
	delay: 400,
})

ScrollReveal().reveal(headerText, { delay: 500 })
ScrollReveal().reveal(midText, { delay: 500, distance: '0px' })

navBtn.addEventListener('click', handleNav)
