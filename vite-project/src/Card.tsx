export interface CardProps {
	title: string;
	body: string;
	img?: string;
}
export function Card({title, body, img}: CardProps): JSX.Element {
	return(
	<div>
		<img src="" alt="woopsie"/>
		<h3>{title}</h3>
		<p>{body}</p>
	</div>
	);
}