import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Header = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const data = [
		"https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://cdn.pixabay.com/photo/2016/01/31/21/37/microphone-1172260_1280.jpg",
		"https://cdn.pixabay.com/photo/2014/10/07/09/17/earphones-477446_1280.jpg",
	];

	const handleCurrentSlide = (value) => {
		if (value === "prev") {
			setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
		} else if (value === "next") {
			setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
		}
	};

	return (
		<div className="w-full overflow-hidden relative">
			<div
				style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
				className="w-[300vw] h-screen flex overflow-hidden transition-all duration-500"
			>
				<img
					src={data[0]}
					className="w-screen h-screen object-cover object-center"
				/>
				<img
					src={data[1]}
					className="w-screen h-screen object-cover object-center"
				/>
				<img
					src={data[2]}
					className="md:w-screen md:h-screen object-contain md:object-cover object-center"
				/>
			</div>

			<div className="flex items-center justify-between w-full absolute top-1/2 -translate-y-1/2 p-10 text-3xl ">
				<span
					onClick={() => handleCurrentSlide("prev")}
					className="p-2 rounded-full bg-white/50 cursor-pointer"
				>
					<RiArrowLeftSLine />
				</span>
				<span
					onClick={() => handleCurrentSlide("next")}
					className="p-2 rounded-full bg-white/50 cursor-pointer"
				>
					<RiArrowRightSLine />
				</span>
			</div>
		</div>
	);
};

export default Header;
