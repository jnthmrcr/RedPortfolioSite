import { PortfolioSectionProps } from "../PortfolioSection";

export default function About (props: PortfolioSectionProps) {
	if (!props.display) return (<div></div>)

	return (
		<article id="#about">
			wow i have info about stuff
		</article>
	);
}