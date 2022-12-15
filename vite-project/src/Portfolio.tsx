import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import MainHeader from "./components/MainHeader";
import Projects from "./components/AllProjects";

export default function Portfolio () {

	const projectClickAction = (projectIndex: number, cardIndex: number) => {
		// setActiveProjectIndex(projectIndex);
	}

	const mainHeaderClickAction = (command: 'projects'|'about'|'contact') => {
		
	}

	return (
		<div>
			<MainHeader clickHandler={mainHeaderClickAction}/>
			<main>
				<Projects/>
				<About/>
				<Contact/>
			</main>
		</div>
	);
}