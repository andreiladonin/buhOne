import Container from '../../components/Container'
import ImgSlide from "../../assets/images/partners-1.svg"
import './style.css'


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const Partners = () => {

    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 4,
        slidesToScroll: 4,
    }
    return (
        <section className='partners'>
            <Container>
                <h2 className='partners-title title'>Наши клиенты</h2>
                <h3 className="partners-subtitle subtitle">С нами работают</h3>
                <Slider className="partners__slider" {...settings}>
                    <img className='partners__slider-img' src={ImgSlide} alt="" />
                    <img className='partners__slider-img' src={ImgSlide} alt="" />
                    <img className='partners__slider-img' src={ImgSlide} alt="" />
                    <img className='partners__slider-img' src={ImgSlide} alt="" />
                    <img className='partners__slider-img' src={ImgSlide} alt="" />
                    <img className='partners__slider-img' src={ImgSlide} alt="" />
                    <img className='partners__slider-img' src={ImgSlide} alt="" />
                    <img className='partners__slider-img' src={ImgSlide} alt="" />
                    <img className='partners__slider-img' src={ImgSlide} alt="" />
                    <img className='partners__slider-img' src={ImgSlide} alt="" />
                    <img className='partners__slider-img' src={ImgSlide} alt="" />
                    <img className='partners__slider-img' src={ImgSlide} alt="" />
                    <img className='partners__slider-img' src={ImgSlide} alt="" />
                    <img className='partners__slider-img' src={ImgSlide} alt="" />
                    <img className='partners__slider-img' src={ImgSlide} alt="" />
                    <img className='partners__slider-img' src={ImgSlide} alt="" />

                </Slider>

            </Container>
        </section>
  )
}

export default Partners