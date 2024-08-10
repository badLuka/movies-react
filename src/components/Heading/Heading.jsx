import Paragraph from '../Paragraph/Paragraph'
import './Heading.css'

function Heading({ text }) {

	return (
		<div className="head">
			<h1 className="heading">{text}</h1>
			<Paragraph
				text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}
			/>
		</div>

	)
}

export default Heading
