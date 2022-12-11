import { Card, CardProps } from "./Card";
import SectionBody from "./SectionBody";
import './style.css'

export enum sectionDisplayType {
	body,
	hidden,
	cards,
}

interface SectionInfo {
	sectionIndex: number;
	clickHandler: (index:number, cardIndex: number) => void;
	sectionDisplay: sectionDisplayType;
	// c1: CardProps;
	// c2: CardProps;
	// c3: CardProps;
}

export interface SectionProps {
	props?: SectionInfo
}

export function Section({sectionIndex, clickHandler, sectionDisplay}:SectionInfo) {
	const lorem: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, amet.";

	const sectionClick = (cardIndex: number) => {
		clickHandler(sectionIndex, cardIndex);
	}

	const renderCard = (title:string, body:string, index:number) => {
		return (
			<div className="section-card" onClick={()=>sectionClick(index)} key={index}>
				<img src="" alt="woopsie"/>
				<h3>{title}</h3>
				<p>{body}</p>
			</div>
		);
	}

	const sectionStyle = (sectionDisplay: sectionDisplayType) => {
		const style = {
			top: ((sectionDisplay === sectionDisplayType.body)?-2.5:-21.5+(19*sectionIndex))+'rem',
			opacity: (sectionDisplay === sectionDisplayType.hidden)?0:1,
		}
		return style;
	}

	const renderSectionContent = () => {
		if (sectionDisplay === sectionDisplayType.body) {
			return <SectionBody/>
		}
		return (
			<div className="info">
				{renderCard('title', lorem, 1)}
				{renderCard('title', lorem, 2)}
				{renderCard('title', lorem, 3)}
			</div>);
	}

	return(
		//onTransitionEnd={}
		<section style={sectionStyle(sectionDisplay)} key={sectionIndex}>
			<div className="heading" onClick={()=>sectionClick(0)}><h2>heading</h2></div>
			{renderSectionContent()}
		</section>
	);
}
