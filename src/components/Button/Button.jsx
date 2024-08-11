import './Button.css'

function Button({ text }) {
	const clickButton = (e) => {
		e.preventDefault();
		console.log('Нажатие на кнопку');
	}

	return (
		<button className='button' onClick={clickButton}>{text}</button>
	)
}

export default Button