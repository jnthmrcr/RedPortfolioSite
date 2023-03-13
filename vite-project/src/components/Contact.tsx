import { PortfolioSectionProps } from "../PortfolioSection";

export default function Contact (props: PortfolioSectionProps) {
	if (!props.display) return (<div></div>)

	return (
		<article id="#contact">
			yeah tell me about shit
		</article>
	);
}