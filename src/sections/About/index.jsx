import AboutItem from "../../components/AboutItem"
import Container from "../../components/Container"
import "./style.css"

const About = () => {
  return (
    <section className="about">
       <Container>
        <h2 className="about-title title">О нас</h2>
        <div className="about__inner">
            <div className="about__main">
                <h3 className="about__main-subtitle">Компания <br /> <span>ИвановПром</span></h3>
                <p className="about__main-text">Lorem Ipsum - это текст -  "рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
            </div>
            <div className="about__items">
                <AboutItem/>
                <AboutItem/>
                <AboutItem/>
                <AboutItem/>
            </div>
        </div>
       </Container>
    </section>
  )
}

export default About