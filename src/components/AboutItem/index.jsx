import { useState } from "react"
import "./style.css"

const AboutItem = () => {

  const [hover, setHover] = useState (false) 
  return (
    <div onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}  className={!hover ? "about__item": "about__item about__item--hover"}>
        <h2 className={!hover ? "about__item-count": "about__item-count about__item-count--hover"}>90</h2>
        <p className={!hover ? "about__item-text": "about__item-text about__item-text--hover"}>Завершено крупных сделок</p>
        <a href="#" className={!hover ? "about__item-link": "about__item-link about__item-link--hover"}>Все кейсы</a>
    </div>
  )
}

export default AboutItem