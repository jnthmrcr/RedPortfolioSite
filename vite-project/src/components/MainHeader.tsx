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
					{/* <a >projects</a>
					<a href="#about">about</a>
					<a href="#contact">contact me</a> */}

					<a onClick={()=>clickHandler('projects')}>projects</a>
					<a onClick={()=>clickHandler('about')}>about</a>
					<a onClick={()=>clickHandler('contact')}>contact me</a>
				</nav>
			</div>
		</header>
	);
}
