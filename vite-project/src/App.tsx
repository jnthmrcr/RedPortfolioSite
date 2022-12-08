import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style.css'
import { Section } from './Section'

function App() {
	const [page, setPage] = useState<'home'|'section'|'contact'>('home');
	const [section, setSection] = useState<number>(0);

	const sectionClickAction = (sectionIndex: number, cardIndex: number) => {
		setPage('section');
		setSection(sectionIndex);
		console.log(sectionIndex, cardIndex);
	}

  return (
    <div>
		<header>
			<h1>J A Mercer</h1>
			<p>email address</p>
		</header>
		<main>
			<Section sectionIndex={1} clickHandler={sectionClickAction} activeSection={section}/>
			<Section sectionIndex={2} clickHandler={sectionClickAction} activeSection={section}/>
			<Section sectionIndex={3} clickHandler={sectionClickAction} activeSection={section}/>
		</main>
	</div>
  )
}

export default App
