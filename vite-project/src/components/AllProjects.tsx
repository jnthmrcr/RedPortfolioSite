import { useState } from "react";
import Project, { ProjectDisplayState } from "./Project";

export default function AllProjects () {
	const [activeProjectIndex, setActiveProjectIndex] = useState<number|'no selection'>('no selection')
	
	const projectClickAction = (projectIndex: number, sectionIndex: number) => {
		setActiveProjectIndex(projectIndex);
	}

	const displayState = (index: number) => {
		if (activeProjectIndex === 'no selection') {
			return ProjectDisplayState.cards;
		}
		if (index === activeProjectIndex) {
			return ProjectDisplayState.article
		}
		return ProjectDisplayState.hidden;
	}

	return (
		<section>
			<Project displayState={displayState(0)} clickHandler={projectClickAction} projectIndex={0}/>
			<Project displayState={displayState(1)} clickHandler={projectClickAction} projectIndex={1}/>
			<Project displayState={displayState(2)} clickHandler={projectClickAction} projectIndex={2}/>
		</section>
	);
}