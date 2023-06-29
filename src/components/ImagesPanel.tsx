import ellipsesImg from "../assets/ellipses.svg";
import backgroundImg from "../assets/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime 1.png";
import foregroundImg from "../assets/group-business-workers-smiling-happy-confident-working-together-with-smile-face-applauding-one-them-office 1.png";
import podcastOutline from "../assets/podcast-outline.svg";
import micOutline from "../assets/mic-outline.svg";

const ImagesPanel = () => {
	return (
		<div className="relative">
			<img
				src={ellipsesImg}
				className="mt-[3.75rem] translate-x-[3.13rem]"
			/>
			<img src={backgroundImg} className="absolute top-0 w-full" />
			<img
				src={foregroundImg}
				className="absolute right-[3.31rem] top-[5.62rem]"
			/>
			<img
				src={podcastOutline}
				className="absolute right-[-5.755rem] top-[9.5rem] h-[4rem] w-[4rem] rotate-[-16.831deg] rounded bg-white px-[0.44rem] py-[0.44rem] shadow-icon"
			/>
			<img
				src={micOutline}
				className="absolute bottom-[1.25rem] right-[-1.88rem] h-[4rem] w-[4rem] rotate-[15.135deg] rounded bg-white px-[0.44rem] py-[0.44rem] shadow-icon"
			/>
		</div>
	);
};

export default ImagesPanel;
