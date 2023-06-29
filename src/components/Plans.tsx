import Card from "./Card";

const plans = 3;

const Plans = () => {
	return (
		<div className="grid grid-cols-3 gap-x-[5.62rem]">
			{Array.from({ length: plans }).map((_, index) => (
				<Card
					color={index === 1 ? "bg-purple" : "bg-white"}
					key={index}
				>
					<section
						className={`flex flex-col gap-[1.5rem] font-poppins ${
							index === 1 ? "text-white" : "text-black"
						}`}
					>
						<header className="font-inter font-bold">
							{index === 1 ? "Premium" : "Basic"} Plan
						</header>
						<p className="text-[0.75rem]">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting
						</p>
						<div
							className={`${
								index === 1 ? "text-white" : "text-purple"
							} flex items-center gap-[1.19rem]`}
						>
							<span className="font-inter text-[2rem] font-bold">
								$ 54
							</span>
							<span className="text-[0.875rem]">/month</span>
						</div>
						<ul className="text-[0.75rem] font-bold">
							<li>Free access to video class</li>
							<li>Free access to video class</li>
							<li>Free access to video class</li>
						</ul>
						<button className="self-start rounded border-[0.5px] border-purple bg-white px-[2rem] py-[0.75rem] font-poppins text-[0.75rem] text-purple">
							Start Free Trial
						</button>
					</section>
				</Card>
			))}
		</div>
	);
};

export default Plans;
