import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import SocialIcons from "./common/SocialIcons";
import { GiWorld } from "react-icons/gi";

const NewsLetter = () => {
	return (
		<div className="bg-primary text-white py-8">
			<div className="container px-5 md:px-10 mx-auto flex items-center justify-between md:flex-row flex-col gap-5">
				<div>
					<h2 className="text-xl lg:text-2xl font-medium">Get in Touch:</h2>
				</div>
				<div className="md:flex-1 w-full flex items-center justify-center">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter your email"
						className="outline-none py-3.5 text-sm md:text-base text-black px-4 w-[70%] lg:w-96 rounded-l-lg"
					/>
					<button className="capitalize bg-zinc-800 hover:bg-zinc-900 text-white py-3.5 rounded-r-lg px-4 font-medium text-sm md:text-base">
						join us
					</button>
				</div>
				<div className="flex items-center gap-2">
					<SocialIcons
						link="https://github.com/NaseemKhan005"
						icon={FaGithub}
					/>
					<SocialIcons
						link="https://www.linkedin.com/in/naseemkhann"
						icon={FaLinkedin}
					/>
					<SocialIcons link="https://naseemkhan.vercel.app" icon={GiWorld} />
					<SocialIcons link="tel:+92 3444170400" icon={FaWhatsapp} />
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
