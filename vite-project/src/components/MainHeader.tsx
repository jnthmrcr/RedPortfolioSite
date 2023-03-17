import { Link, NavLink } from "react-router-dom";

interface MainHeaderProps {
	clickHandler: (command: 'projects' | 'about' | 'contact') => void;
}

export default function MainHeader({ clickHandler }: MainHeaderProps) {
	return (
		<header className="main-header">
			<h1>J A Mercer</h1>
			<div>
				<p>software developer with experience in react, django, and unity</p>
				<nav>
					<NavLink to={'/projects'} onClick={()=>clickHandler('projects')}>
						projects
					</NavLink>
					<NavLink to={'/about'} onClick={()=>clickHandler('about')}>
						about
					</NavLink>
					<NavLink to={'/contact'} onClick={()=>clickHandler('contact')}>
						contact
					</NavLink>
				</nav>
			</div>
		</header>
	);
}
