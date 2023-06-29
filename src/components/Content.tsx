import Button from "./Button";

import micBackground from "../assets/mic-background.png";
import ImagesPanel from "./ImagesPanel";
import Courses from "./Courses";
import podcastBackground from "../assets/podcast-background.png";
import Plans from "./Plans";
import Tabs from "./Tabs";

const Content = () => {
	return (
		<main className="px-[10.94rem]">
			<section className="mb-[11.62rem] flex justify-center gap-[1.12rem]  pt-[5.88rem]">
				<div className="flex h-[23.19rem] w-[36.25rem] flex-col font-inter text-white">
					<header className="text-5xl font-bold">
						Learn how to launch a successful podcast
					</header>
					<div className="mt-[1.5rem] w-[27rem]">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting in ustry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s
					</div>
					<div className="mt-auto">
						<Button text="Sign up Now" />
					</div>
				</div>
				<ImagesPanel />
			</section>
			<img
				src={micBackground}
				className="absolute right-0 top-[34.17rem]"
			/>
			<section className="flex">
				<Courses />
				<div className=" flex-1 py-[7.84rem] pl-[7.5rem]">
					<header className="mb-[1.5rem] font-inter text-[3rem] font-bold">
						About the Course
					</header>
					<p className="mb-[3rem] font-poppins text-[0.875rem]">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unkno
					</p>
					<Button text="Explore Now" />
				</div>
			</section>
			<section>
				<img
					src={podcastBackground}
					className="absolute left-0 z-[-1] w-full"
				/>
				<div className="mb-[3.38rem] mt-[4.75rem] px-[19.81rem] text-center">
					<header className="mb-[1.5rem] font-inter text-[2rem] font-bold">
						<h3>Choose your plan</h3>
					</header>
					<p className="mb-[1.5rem] font-poppins text-[0.875rem]">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's
					</p>
					<Tabs />
				</div>
				<Plans />
			</section>
		</main>
	);
};

export default Content;
