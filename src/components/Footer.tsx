import facebookIcon from "../assets/mdi_facebook.svg";
import youtubeIcon from "../assets/uil_youtube.svg";
import instagramIcon from "../assets/basil_instagram-solid.svg";
import twitterIcon from "../assets/uil_twitter.svg";

const Footer = () => {
	return (
		<footer className="mx-auto flex w-[62.1875rem] max-w-full items-center justify-center gap-[12rem] border-t-[0.5px] border-white py-[1.25rem] font-poppins text-[0.75rem] text-white">
			<span>All Right Reserved @Copyright 2023</span>
			<div className="flex gap-[4rem]">
				<ul className="flex gap-[1.5rem] ">
					<li>Terms of Service</li>
					<li>Privacy Policy</li>
					<li>Product</li>
				</ul>
				<ul className="flex gap-[1rem]">
					<li>
						<img src={facebookIcon} width={24} height={24} />
					</li>
					<li>
						<img src={youtubeIcon} width={24} height={24} />
					</li>
					<li>
						<img src={instagramIcon} width={24} height={24} />
					</li>
					<li>
						<img src={twitterIcon} width={24} height={24} />
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
