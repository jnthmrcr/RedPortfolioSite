export enum ProjectDisplayState {
	hidden,
	cards,
	article
}

export interface ProjectProps {
	displayState: ProjectDisplayState;
	clickHandler: (...args: any) => any;
	projectIndex: number;
}

export default function ProjectArticle(props: ProjectProps) {
	const projectClick = (sectionIndex: number) => {
		props.clickHandler(props.projectIndex, sectionIndex);
	};

	const renderCard = (title: string, body: string, index: number) => {
		return (
			// <section onClick={() => projectClick(index)} key={index}>
			<section key={index}>
				<img src="" alt="woopsie" />
				<h3>{title}</h3>
				<p>{body}</p>
			</section>
		);
	};

	const renderArticle = () => {
		return <section>its a body</section>;
	};

	const renderContent = () => {
		if (props.displayState === ProjectDisplayState.article) {
			return renderArticle();
		}
		return (
			<section className="card-group">
				{renderCard('title', 'body', 1)}
				{renderCard('title', 'body', 2)}
				{renderCard('title', 'body', 3)}
			</section>
		);
	};

	const style = () => {
		if (props.displayState === ProjectDisplayState.article) {
			return {transform: 'translateY('+props.projectIndex * -20+'rem)'};
		} else if (props.displayState === ProjectDisplayState.hidden) {
			return {opacity:0};
		}
	}

	return (
		<article onClick={()=> projectClick(props.projectIndex)} style={style()}>
			<header>
				<h2>heading</h2>
			</header>
			{renderContent()}
		</article>
	);
}
