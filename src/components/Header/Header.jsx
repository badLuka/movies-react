import './Header.css'

function Header({ text }) {

	return (
		<header className="header">
			<img className="logo" src="/images/logo.svg" alt="Логотип" />
			<nav className="navigation">
				<ul className="navigation__list">
					<li className="navigation__item">
						<a className="navigation__link" href="#">Поиск фильмов</a>
					</li>
					<li className="navigation__item">
						<a className="navigation__link" href="#">Мои фильмы</a>
					</li>
					<li className="navigation__item">
						<a className="navigation__link" href="#">Войти</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}


export default Header
