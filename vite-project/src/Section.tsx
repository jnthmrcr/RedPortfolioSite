import { Card, CardProps } from "./Card";
import './style.css'

interface SectionInfo {
	sectionIndex: number;
	clickHandler: (index:number, cardIndex: number) => void;
	activeSection?: number;
	// c1: CardProps;
	// c2: CardProps;
	// c3: CardProps;
}

export interface SectionProps {
	props?: SectionInfo
}

export function Section({sectionIndex, clickHandler, activeSection}:SectionInfo) {
	const lorem: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, amet.";

	const sectionClick = (cardIndex: number) => {
		clickHandler(sectionIndex, cardIndex);
	}

	const renderCard = (title:string, body:string, index:number) => {
		return (
			<div className="section-card" onClick={()=>sectionClick(index)}>
				<img src="" alt="woopsie"/>
				<h3>{title}</h3>
				<p>{body}</p>
			</div>
		);
	}

	const sectionPosition = () => {
		if (sectionIndex === activeSection) {
			return -2.5;
		}
		return -21.5 + 19 * sectionIndex;
	}

	const opacity = () => {
		if (sectionIndex === activeSection) {
			return 1
		}
		return 0
	}

	return(
		<section style={{top: sectionPosition() + 'rem', opacity: opacity()}}>
			<div className="heading" onClick={()=>sectionClick(0)}><h2>heading</h2></div>
			<div className="info">
				{renderCard('title', lorem, 1)}
				{renderCard('title', lorem, 2)}
				{renderCard('title', lorem, 3)}
			</div>
		</section>
	);
}
