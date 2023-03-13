import { useState, forwardRef, useImperativeHandle, ForwardedRef } from "react";
import Project, { ProjectDisplayState } from "./Project";
import { PortfolioSectionProps } from "../PortfolioSection";

export interface AllProjectsRef {
	resetProjects: ()=>void;
}

export const AllProjects = forwardRef<AllProjectsRef,PortfolioSectionProps>((props, ref) => {
	
	const [activeProjectIndex, setActiveProjectIndex] = useState<number|'no selection'>('no selection')

	useImperativeHandle(ref,()=>{
		return {
		  resetProjects() {
			setActiveProjectIndex('no selection');
		  },
		};
	  }, []);

	const projectClickAction = (projectIndex: number, sectionIndex: number) => {
		setActiveProjectIndex(projectIndex);
	}

	const displayState = (index: number):ProjectDisplayState => {
		if (activeProjectIndex === 'no selection') {
			return 'cards';
		}
		if (index === activeProjectIndex) {
			return 'article';
		}
		return 'hidden';
	}

	if (!props.display) return (<div></div>)
	return (
		<section>
			<Project displayState={displayState(0)} clickHandler={projectClickAction} projectIndex={0}/>
			<Project displayState={displayState(1)} clickHandler={projectClickAction} projectIndex={1}/>
			<Project displayState={displayState(2)} clickHandler={projectClickAction} projectIndex={2}/>
		</section>
	);
});

export default AllProjects;