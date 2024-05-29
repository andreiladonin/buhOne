import "./style.css"
import Button from "../Button"

const Form = () => {
  return (
    <form  className="contats__form">
        <div className="form__row">
            <label htmlFor="firstname">Имя</label>
            <input type="text" name="firstname" placeholder="Ваше имя"/>
        </div>
        <div className="form__row">
            <label htmlFor="lastname">Фамилия</label>
            <input type="text" name="lastname" placeholder="Ваша фамилия"/>
        </div>
        <div className="form__message">
            <label htmlFor="message">Сообщение</label>
            <textarea name="message" placeholder="Ваше сообщение" id=""></textarea>
        </div>
        <div className="form__button">
            <Button>Отправить сообщение</Button>
        </div>

    </form>
  )
}

export default Form