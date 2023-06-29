import Review from "./Review";
import nextIcon from "../assets/pepicons-pencil_arrow-right.svg";
import emptyDot from "../assets/empty-dot.svg";
import filledDot from "../assets/filled-dot.svg";

const ReviewsCarousel = () => {
	return (
		<div>
			<div className="relative">
				<div className="flex  gap-[2rem]">
					{Array.from({ length: 7 }).map((_, index) => (
						<Review key={index} />
					))}
				</div>

				<button className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-next">
					<img
						src={nextIcon}
						alt="Next"
						className="rounded-full bg-lightPurple"
					/>
				</button>
			</div>
			<div className="flex justify-center gap-[1.5rem]">
				{Array.from({ length: 5 }).map((_, index) => (
					<img
						key={index}
						src={index === 0 ? filledDot : emptyDot}
						width={15}
						height={15}
					/>
				))}
			</div>
		</div>
	);
};

export default ReviewsCarousel;
