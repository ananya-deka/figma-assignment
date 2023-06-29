const Button = ({ text }: { text: string }) => {
	return (
		<button className="rounded-lg bg-gradient-to-r from-primary to-secondary px-[3.5rem] py-[1rem] font-poppins text-[1.25rem] font-bold text-white">
			{text}
		</button>
	);
};

export default Button;
