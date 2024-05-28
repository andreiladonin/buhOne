import './style.css'
import AvatarSlider from '../../assets/images/avatar-slider.png'
import Container from '../../components/Container'
import Slider from 'react-slick'
const Reviews = () => {


    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }  
    return (
        <section className='reviews'>
            <Container>
                <h2 className="reviews__title title">Отзывы</h2>
                <h3 className='reviews__subtitle subtitle'>Ваши благодарности</h3>
                <Slider {...settings} className='reviews__slider'>
                    <div className="reviews__slider-item">
                        <p className='reviews__slider-text' >
                            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                        </p>
                        <div className='reviews__avatar' >
                            <img src={AvatarSlider} alt="" />
                            <div className='reviews__avatar-body'>
                                <p className='reviews__avatar-title'>Екатерина Иванова</p>
                                <p className="reviews__avatar-text">Директор ООО “Раз-два”</p>
                            </div>
                        </div>
                    </div>
                    <div className="reviews__slider-item">
                        <p className='reviews__slider-text' >
                            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                        </p>
                        <div className='reviews__avatar' >
                            <img src={AvatarSlider} alt="" />
                            <div className='reviews__avatar-body'>
                                <p className='reviews__avatar-title'>Екатерина Иванова</p>
                                <p className="reviews__avatar-text">Директор ООО “Раз-два”</p>
                            </div>
                        </div>
                    </div>
                    <div className="reviews__slider-item">
                        <p className='reviews__slider-text' >
                            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                        </p>
                        <div className='reviews__avatar' >
                            <img src={AvatarSlider} alt="" />
                            <div className='reviews__avatar-body'>
                                <p className='reviews__avatar-title'>Екатерина Иванова</p>
                                <p className="reviews__avatar-text">Директор ООО “Раз-два”</p>
                            </div>
                        </div>
                    </div>
                    <div className="reviews__slider-item">
                        <p className='reviews__slider-text' >
                            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                        </p>
                        <div className='reviews__avatar' >
                            <img src={AvatarSlider} alt="" />
                            <div className='reviews__avatar-body'>
                                <p className='reviews__avatar-title'>Екатерина Иванова</p>
                                <p className="reviews__avatar-text">Директор ООО “Раз-два”</p>
                            </div>
                        </div>
                    </div>
                </Slider>

            </Container>
        </section>
    )
}

export default Reviews