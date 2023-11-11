import Swiper from 'swiper'
import {Navigation} from 'swiper/modules'

export default class Home {
	initCampusSlider() {
		new Swiper('#campus', {
            modules: [Navigation],
			navigation: {
				nextEl: '.swiper-next',
				prevEl: '.swiper-prev',
			},
			loop: true,
		})
	}
}
