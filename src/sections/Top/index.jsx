import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Container from '../../components/Container'
import './style.css'
import { useState } from 'react'



const Top = () => {
  const [sliderRef, setSliderRef] = useState(null)
  
  const settings = {
    arrows:false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "controls",
    appendDots : dots => (
      <div className='controls'>
        <div className="controls__inner">
          <ul className='control-dots' > {dots} </ul>
          <div  className='controls-btns' >
            <button onClick={sliderRef?.slickPrev} className='controls__btn controls__btn-prev'>
              <div></div>
            </button>
            <button onClick={sliderRef?.slickNext} className='controls__btn controls__btn-next'>
              <div></div>
            </button>
          </div>
        </div>
      </div>
    )
  };  
  return (

    <div className='slider-container'>
        <Slider ref={setSliderRef} className='slider-top' {...settings}>
            <section className='top'>
                <Container>
                    <h1 className="top__title">Бухгалтерские услуги <br /> в Санкт-Петербурге</h1>
                    <a className='top-link'>Наша презентация</a>
                </Container>
              </section>
              <section className='top'>
                <Container>
                    <h1 className="top__title">Бухгалтерские услуги <br /> в Санкт-Петербурге</h1>
                    <a className='top-link'>Наша презентация</a>
                </Container>
              </section>
              <section className='top'>
                <Container>
                    <h1 className="top__title">Бухгалтерские услуги <br /> в Санкт-Петербурге</h1>
                    <a className='top-link'>Наша презентация</a>
                </Container>
              </section>
              <section className='top'>
                <Container>
                    <h1 className="top__title">Бухгалтерские услуги <br /> в Санкт-Петербурге</h1>
                    <a className='top-link'>Наша презентация</a>
                </Container>
              </section>
        </Slider>
    </div>
  )
}

export default Top