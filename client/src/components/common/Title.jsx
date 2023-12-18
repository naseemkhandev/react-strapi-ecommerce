const Title = ({ text }) => {
	return (
		<h2 className="relative before:absolute w-fit mx-auto before:bg-primary before:w-1/2 before:-translate-x-1/2 before:left-1/2 before:-bottom-2 text-2xl capitalize md:text-3xl font-medium before:h-1 before:rounded-full">
			{text}
		</h2>
	);
};

export default Title;
