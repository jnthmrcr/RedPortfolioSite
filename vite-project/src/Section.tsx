import { Card, CardProps } from "./Card";
import './style.css'

interface SectionInfo {
	sectionIndex: number;
	clickHandler: (index:number, cardIndex: number) => void;
	// c1: CardProps;
	// c2: CardProps;
	// c3: CardProps;
}

export interface SectionProps {
	props?: SectionInfo
}

export function Section({sectionIndex, clickHandler}:SectionInfo) {
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

	return(
		<section>
			<div className="heading" onClick={()=>sectionClick(0)}><h2>heading</h2></div>
			<div className="info">
				{renderCard('title', lorem, 1)}
				{renderCard('title', lorem, 2)}
				{renderCard('title', lorem, 3)}
			</div>
		</section>
	);
}
