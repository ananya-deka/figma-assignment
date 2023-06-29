const Tabs = () => {
	return (
		<div className="mx-auto flex w-fit gap-[0.625rem] rounded-xl p-[0.375rem] text-[0.875rem] shadow-tabs">
			<div
				className="rounded-xl bg-lightPurple
			 px-[0.56rem] py-[0.19rem]"
			>
				monthly
			</div>
			<div className="px-[0.56rem] py-[0.19rem]">yearly</div>
		</div>
	);
};

export default Tabs;
