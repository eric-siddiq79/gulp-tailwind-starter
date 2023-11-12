import Swiper from 'swiper'
import {Navigation} from 'swiper/modules'

export default class Portfolio {
	initPortfolioSlider() {
		new Swiper('#portoflio', {
            slidesPerView: 3,
            modules: [Navigation],
			navigation: {
				nextEl: '.swiper-next',
				prevEl: '.swiper-prev',
			},
			loop: true,
		})
	}
}
