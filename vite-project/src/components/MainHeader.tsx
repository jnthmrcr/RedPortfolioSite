import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { PortfolioPageName } from "../Portfolio";

interface MainHeaderProps {
	clickHandler: (command: PortfolioPageName) => void;
}

export default function MainHeader({ clickHandler }: MainHeaderProps) {

	let [proj, setProj] = useState<string>("projects");
	let [demo, setDemo] = useState<string>("demos");
	let [abou, setAbou] = useState<string>("about");
	let [cont, setCont] = useState<string>("contact");

	return (
		<header className="main-header">
			<h1><Link to={"/"}>J A Mercer</Link></h1>
			<div>
				<p>software developer with experience in react, django, and unity</p>
				<nav>
					<NavLink to={'/projects'} onClick={()=>clickHandler('projects')} onMouseEnter={()=>{setProj("view projects")}} onMouseLeave={()=>{setProj("projects")}}>
						{proj}
					</NavLink>
					<NavLink to={'/demos'} onClick={()=>clickHandler('demos')} onMouseEnter={()=>{setDemo("view demos")}} onMouseLeave={()=>{setDemo("demos")}}>
						{demo}
					</NavLink>
					<NavLink to={'/about'} onClick={()=>clickHandler('about')} onMouseEnter={()=>{setAbou("about me")}} onMouseLeave={()=>{setAbou("about")}}>
						{abou}
					</NavLink>
					<NavLink to={'/contact'} onClick={()=>clickHandler('contact')} onMouseEnter={()=>{setCont("contact me")}} onMouseLeave={()=>{setCont("contact")}}>
						{cont}
					</NavLink>
				</nav>
			</div>
		</header>
	);
}
