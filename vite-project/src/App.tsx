import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style.css'
import { Section, sectionDisplayType } from './Section'

function App() {
	const [page, setPage] = useState<'home'|'section'|'contact'>('home');
	const [activeSection, setActiveSection] = useState<number>(0);

	const sectionClickAction = (sectionIndex: number, cardIndex: number) => {
		setPage('section');
		setActiveSection(sectionIndex);
		console.log(sectionIndex, cardIndex);
	}

	const renderSection = (sectionIndex:number) => {
		let display = sectionDisplayType.cards;
		if (page === 'section') {
			//are we active tho?
			if (sectionIndex === activeSection)
				display = sectionDisplayType.body;
			else
				display = sectionDisplayType.hidden;
		}
		return <Section sectionIndex={sectionIndex} clickHandler={sectionClickAction} sectionDisplay={display}/>
	}

  return (
    <div>
		<header>
			{/* return */}
			<h1>J A Mercer</h1>
			<p>software developer with experience in react, django, and unity contact me</p>
			{/* contact me */}
		</header>
		<main>
			{renderSection(1)}
			{renderSection(2)}
			{renderSection(3)}
		</main>
	</div>
  )
}

export default App
