import { useState } from "react";
import Project, { ProjectDisplayState } from "./Project";

export default function AllProjects () {
	const [activeProjectIndex, setActiveProjectIndex] = useState<number|'no selection'>('no selection')
	
	const projectClickAction = (projectIndex: number, sectionIndex: number) => {
		setActiveProjectIndex(projectIndex);
	}

	return (
		<section>
			<Project displayState={ProjectDisplayState.cards} clickHandler={projectClickAction} projectIndex={0}/>
			<Project displayState={ProjectDisplayState.cards} clickHandler={projectClickAction} projectIndex={1}/>
			<Project displayState={ProjectDisplayState.cards} clickHandler={projectClickAction} projectIndex={2}/>
		</section>
	);
}