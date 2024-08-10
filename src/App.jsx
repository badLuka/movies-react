import './App.css'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import Heading from './components/Heading/Heading'

function App() {

	return (
		<div className="container">
			<Header />
			<Heading
				text={'Поиск'} />
			<Button
				text={'Искать'}
			/>
		</div>
	)
}

export default App
