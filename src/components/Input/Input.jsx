import Button from '../Button/Button'
import './Input.css'

function Input({ name, placeholder, InputSearch }) {

	const inputChange = (event) => {
		console.log(event.target.value)
	}

	return (
		<form action="">
			<img className="search-icon" src={InputSearch} alt="Иконка поиска" />
			<input type="text" name={name} placeholder={placeholder} onChange={inputChange} />
			<Button text={'Искать'} />
		</form>
	)
}


export default Input
