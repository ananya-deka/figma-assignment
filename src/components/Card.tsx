const Card = (props: { children: React.ReactNode; color: string }) => {
	return (
		<div
			className={`rounded border-[0.5px] ${props.color} border-purple p-[1.75rem]`}
		>
			{props.children}
		</div>
	);
};

export default Card;
