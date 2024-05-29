import Container from '../../components/Container'
import Form from '../../components/Form'
import './style.css'
const Contacts = () => {
  return (
    <section className="contacts">
        <Container>
            <div className="contacts__inner">
                <div className="contacts__body">
                    <h2 className="contacts__title">Связь с нами</h2>
                    <p className="contacts__text">У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!</p>
                    <div className="contacts__links">
                        <a href="" className="contacts__links-phone">+7 (111) 222-33-44</a>
                        <a href="" className="contacts__links-email">order@bu-one.ru</a>
                    </div>
                </div>
                <Form/>
            </div>

        </Container>
    </section>
  )
}

export default Contacts