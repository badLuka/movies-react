import './App.css'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import Heading from './components/Heading/Heading'
import Input from './components/Input/Input'

function App() {

	return (
		<div className="container">
			<Header />
			<Heading text={'Поиск'} />
			<Input name={'search'} placeholder={'Введите название'} />
		</div>
	)
}

export default App
