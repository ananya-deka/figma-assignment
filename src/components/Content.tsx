import Button from "./Button";

import micBackground from "../assets/mic-background.png";
import ImagesPanel from "./ImagesPanel";
import Courses from "./Courses";
import podcastBackground from "../assets/podcast-background.png";
import Plans from "./Plans";
import Tabs from "./Tabs";
import ReviewsCarousel from "./ReviewsCarousel";
import Footer from "./Footer";

const Content = () => {
	return (
		<main>
			<section className="mb-[11.62rem] flex justify-center gap-[1.12rem] px-[10.94rem] pt-[5.88rem]">
				<div className="flex h-[23.19rem] w-[36.25rem] max-w-full flex-col font-inter text-white">
					<header className="text-5xl font-bold">
						<h1>Learn how to launch a successful podcast</h1>
					</header>
					<div className="mt-[1.5rem] w-[27rem] max-w-full">
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
			<section className="flex px-[10.94rem]">
				<Courses />
				<div className=" flex-1 py-[7.84rem] pl-[7.5rem]">
					<header className="mb-[1.5rem] font-inter text-[3rem] font-bold">
						<h2>About the Course</h2>
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
			<section className="mb-[5.94rem] px-[10.94rem]">
				<img
					src={podcastBackground}
					className="absolute left-0 z-[-1] w-full"
				/>
				<div className="mb-[3.38rem] mt-[4.75rem] text-center">
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
			<section className="mb-[4.56rem] overflow-hidden px-[10.94rem]">
				<div className="mb-[2rem]">
					<header className="mb-[1.5rem] font-inter text-[2.5rem] font-bold">
						<h2>Review from customers</h2>
					</header>
					<p className="w-[24.94rem] max-w-full font-poppins text-[0.75rem]">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industry
					</p>
				</div>
				<ReviewsCarousel />
			</section>
			<section className="relative border-t-2 border-transparent bg-footer-bg bg-cover bg-no-repeat">
				<div className="mb-[6.88rem] mt-[4.25rem] px-[10.94rem] text-center">
					<header className="mb-[1.5rem] font-inter text-[2rem] font-bold">
						<h2>We have what you’re looking for</h2>
					</header>
					<p className="mx-auto mb-[4rem] w-[37.25rem] max-w-full bg-gradient-to-r from-primary to-secondary bg-clip-text font-poppins text-[0.75rem] text-transparent">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type a
					</p>
					<Button text="Get Started Now"></Button>
				</div>
				<Footer />
			</section>
		</main>
	);
};

export default Content;
