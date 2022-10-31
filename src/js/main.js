const nav = document.querySelector('.burger-nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.burger-item')
const burgerBars = document.querySelector('.burger-bars')
const headerText = document.querySelector('.header-text')
const midText = document.querySelector('.mid-h2')
const sections = document.querySelectorAll('.section')
const navigation = document.querySelector('.nav')
const navList = document.querySelectorAll('.nav-item')
const body = document.querySelector('body')
const contactSection = document.querySelector('.contact')


function activeMenu () {
	let len = sections.length
	while(--len && window.scrollY + 94 < sections[len]?.offsetTop){}
	navList.forEach(ltx => ltx.classList.remove('action-scroll'))
	navList[len]?.classList.add('action-scroll')
	if (contactSection?.getBoundingClientRect().top <= 94) {
		navList.forEach(ltx => ltx.classList.remove('action-scroll'))
		navList[navList.length - 1].classList.add('action-scroll')
	}
}
activeMenu()


const handleNav = () => {
	nav.classList.toggle('active')
	
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('active')
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
window.addEventListener('scroll', activeMenu)

