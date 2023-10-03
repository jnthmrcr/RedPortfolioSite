import { useState, forwardRef, useImperativeHandle } from "react";
import Project, { ProjectDisplayState } from "./Project";
import { PortfolioSectionProps } from "../PortfolioSection";
import { useLoaderData } from "react-router-dom";

export interface AllProjectsRef {
	resetProjects: ()=>void;
}

export interface AllProjectsProps extends PortfolioSectionProps {
	projectID: string,
}

export const AllProjects = forwardRef<AllProjectsRef,AllProjectsProps>((props, ref) => {
	
	const [activeProjectIndex, setActiveProjectIndex] = useState<number|'no selection'>(props.projectID?+props.projectID:"no selection")

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