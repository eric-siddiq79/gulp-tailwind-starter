import Home from './module/home'
import Portfolio from './module/portfolio'

document.addEventListener('DOMContentLoaded', () => {
	const home = new Home()
	home.initCampusSlider()

	const portfolio = new Portfolio()
	portfolio.initPortfolioSlider()




    
})
