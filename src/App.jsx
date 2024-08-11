import './App.css'
import Header from './components/Header/Header'
import Heading from './components/Heading/Heading'
import Input from './components/Input/Input'
import InputSearch from '../public/images/search-icon.svg'

function App() {

	return (
		<div className="container">
			<Header />
			<Heading text={'Поиск'} />
			<Input name={'search'} placeholder={'Введите название'} InputSearch={InputSearch} />
		</div>
	)
}

export default App
