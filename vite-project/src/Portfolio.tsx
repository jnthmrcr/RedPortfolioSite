import { useState, useRef, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import MainHeader from "./components/MainHeader";
import AllProjects, {AllProjectsRef} from "./components/AllProjects";

type PortfolioPageName = 'projects'|'about'|'contact';
interface PortfolioProps {page: PortfolioPageName};

export default function Portfolio ({page}:PortfolioProps) {

	const [activePage, setActivePage] = useState<PortfolioPageName>('projects');
	const AllProjRef = useRef<AllProjectsRef>(null);

	const projectClickAction = (projectIndex: number, cardIndex: number) => {
		// setActiveProjectIndex(projectIndex);
	}

	useEffect(()=>{
		setActivePage(page);
	},[page]);

	const mainHeaderClickAction = (command: PortfolioPageName) => {
		setActivePage(command);
		if (command==='projects')
		{
			AllProjRef.current?.resetProjects();
		}
	}

	return (
		<div>
			<MainHeader clickHandler={mainHeaderClickAction}/>
			<main>
				<AllProjects display={activePage ==='projects'} ref={AllProjRef}/>
				<About display={activePage!=='contact'}/>
				<Contact display={true}/>
			</main>
		</div>
	);
}