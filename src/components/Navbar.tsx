const Navbar = () => {
	return (
		<nav className="flex h-[5.67rem] w-full items-center justify-between gap-[1rem] px-[10.94rem] font-inter text-white">
			<a href="#" className="font-bold">
				Logo
			</a>
			<div>
				<ul className="flex justify-evenly gap-[6.69rem] ">
					<li>About</li>
					<li>Pricing</li>
					<li>Review</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
