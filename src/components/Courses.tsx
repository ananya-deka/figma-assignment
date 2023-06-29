import Card from "./Card";

const courses = 4;

const Courses = () => {
	return (
		<div className="mt-[3.06rem] grid w-1/2 grid-cols-2 gap-x-4">
			{Array.from({ length: courses }).map((_, index) => (
				<div key={index} className="even:translate-y-4">
					<Card color="bg-white">
						<p className="mb-4 font-poppins text-[1.25rem] font-bold">
							Interactive Features
						</p>
						<p className="font-poppins text-[0.75rem]">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been
						</p>
					</Card>
				</div>
			))}
		</div>
	);
};

export default Courses;
