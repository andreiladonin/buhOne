import logo from '../../assets/images/logo.svg'
import './style.css'

/* сделать map*/

const menuInfo = ['8 (111) 222-33-44', 'Пн-Пт 10:00-18:00', 'order@buhone.ru', 'Невский пр. 130']
const menu = ["Главная", "Услуги", "Кейсы", "О компании", "Контакты"]

const Nav = () => {
  return (
    <nav className="nav">
        <div className="nav__logo">
            <img src={logo} alt="" className="nav__logo-img" />
            <p className='nav__logo-text' >BuhOne</p>
        </div>
        <div className="menu__inner">
            <ul className="menu__info">
                {
                    menuInfo.map(link => (
                         <li key={link} className="menu__info-item">{link}</li>
                    ))
                }
            </ul>
            <ul className="menu">
                {
                    menu.map(link => (
                        <li key={link} className="menu__item"><a href="#" className="menu__item-link">{link}</a></li>
                    ))
                }
            </ul>
        </div>
    </nav>
  )
}

export default Nav