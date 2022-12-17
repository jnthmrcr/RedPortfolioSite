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
					<a>projects</a>
					<a>about</a>
					<a>contact me</a>
				</nav>
			</div>
		</header>
	);
}
