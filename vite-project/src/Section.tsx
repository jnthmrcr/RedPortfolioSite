import { Card, CardProps } from "./Card";
import './style.css'

interface SectionInfo {
	c1: CardProps;
	c2: CardProps;
	c3: CardProps;
}

interface SectionProps {
	props?: SectionInfo
}

export function Section({props}: SectionProps) {
	const lorem: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, amet.";

	return(
		<section>
			<div className="heading"><h2>heading</h2></div>
			<div className="info">
				<Card title="lmao" body={lorem}/>
				<Card title="title" body={lorem}/>
				<Card title="title" body={lorem}/>
			</div>
		</section>
	);
}
