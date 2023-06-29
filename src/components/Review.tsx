import userImg from "../assets/user.png";
import starImg from "../assets/fluent-emoji-flat_star.svg";

const Review = () => {
	return (
		<section className="mb-[2rem] shrink-0 grow-0 basis-[29rem] rounded-xl border-[0.5px] border-lightPurple bg-white px-[3rem] py-[2.25rem] shadow-review">
			<header className="mb-[1.5rem] flex gap-[1.5rem]">
				<img src={userImg} width={70} height={70} />
				<div>
					<p className="font-inter font-bold">Lolla Smith</p>
					<p className="font-poppins text-[0.875rem]">Microsoft</p>
					<div className="flex">
						{Array.from({ length: 5 }).map((_, index) => (
							<span key={index}>
								<img src={starImg} height={20} width={20} />
							</span>
						))}
					</div>
				</div>
			</header>
			<p className="font-poppins text-[0.75rem]">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make
			</p>
		</section>
	);
};

export default Review;
