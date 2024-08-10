import Button from '../Button/Button'
import './Input.css'

function Input({ name, placeholder }) {

	return (
		<form action="">
			<input htype="text" name={name} placeholder={placeholder} />
			<Button text={'Искать'} />
		</form>
	)
}


export default Input
