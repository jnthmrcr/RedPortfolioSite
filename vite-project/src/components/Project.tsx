// export enum ProjectDisplayState {
// 	hidden,
// 	cards,
// 	article
// }

import { Link } from "react-router-dom";

export type ProjectDisplayState = 'hidden'|'cards'|'article';

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
			<section key={index} tabIndex={0}>
				<img src="" alt="woopsie" />
				<h3>{title}</h3>
				<p>{body}</p>
			</section>
		);
	};

	const renderArticle = () => {
		return <section className="article-body">its a body</section>;
	};

	const renderContent = () => {
		if (props.displayState === 'article') {
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
		if (props.displayState === 'article') {
			return {transform: 'translateY('+props.projectIndex * -20+'rem)'};
		} else if (props.displayState === 'hidden') {
			return {opacity:0};
		}
	}

	return (
		<Link to={'/projects/' + props.projectIndex.toString()}>
			<article onClick={()=> projectClick(props.projectIndex)} style={style()}>
				<header tabIndex={0} onSelect={()=>{console.log("hi")}}>
					<h2>heading</h2>
				</header>
				{renderContent()}
			</article>
		</Link>
	);
}
