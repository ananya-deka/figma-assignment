import ellipsesImg from "../assets/ellipses.svg";
import backgroundImg from "../assets/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime 1.png";
import foregroundImg from "../assets/group-business-workers-smiling-happy-confident-working-together-with-smile-face-applauding-one-them-office 1.png";
import podcastOutline from "../assets/podcast-outline.svg";
import micOutline from "../assets/mic-outline.svg";

const ImagesPanel = () => {
	return (
		<div className="relative h-fit min-w-[40%]">
			<img
				src={ellipsesImg}
				className="mt-[3.75rem] translate-x-[9.1%]"
			/>
			<img src={backgroundImg} className="absolute top-0 w-full" />
			<img
				src={foregroundImg}
				className="absolute left-[-9.1%] top-[24.3%]"
			/>
			<img
				src={podcastOutline}
				className="absolute right-[-16.74%] top-[41.08%] h-[4rem] w-[4rem] rotate-[-16.831deg] rounded bg-white px-[0.44rem] py-[0.44rem] shadow-icon"
			/>
			<img
				src={micOutline}
				className="absolute bottom-[1.25rem] right-[-1.88rem] h-[4rem] w-[4rem] rotate-[15.135deg] rounded bg-white px-[0.44rem] py-[0.44rem] shadow-icon"
			/>
		</div>
	);
};

export default ImagesPanel;
