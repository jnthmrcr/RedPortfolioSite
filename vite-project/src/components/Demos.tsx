import { PortfolioSectionProps } from "../PortfolioSection";
import { NavLink } from "react-router-dom";
export default function Demos (props: PortfolioSectionProps) {
	if (!props.display) return (<div></div>)

	if (props.expand) {
		return (
			<article id="#Demos">
				<h2>portfolios</h2>
				<a href="https://codepen.io/jnthmrcr"><p>codepen</p></a>
				<a href="https://github.com/jnthmrcr"><p>github.com</p></a>
				<a href="https://be.net/jnthmrcr"><p>behance portfolio</p></a>
				<a href="https://jnth.itch.io"><p>itch.io page</p></a>
				<h2>react demos</h2>
				<p>react projects</p>
			</article>
		);
	}
	else {
		return (<article><NavLink to={"demos"}><h2>view online portfolios & demos</h2></NavLink></article>)	
	}
}