import Container from '../../components/Container'
import ServiceItem from '../../components/ServiceItem'
import './style.css'
const Services = () => {
  return (
    <section className='services'>
        <Container>
            <h2 className='services-title title'>Наши услуги</h2>
            <h3 className='services-subtitle subtitle'>Мы специализируемся</h3>
            <div className='services__items' >
                <ServiceItem/>
                <ServiceItem/>
                <ServiceItem/>
                <ServiceItem/>
                <ServiceItem/>
                <ServiceItem/>
            </div>
        </Container>
    </section>
  )
}

export default Services