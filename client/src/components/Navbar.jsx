import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { HiBuildingStorefront } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import { navLinks } from "../constants/Navbar";

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const { pathname } = useLocation();

	return (
		<div className="border-b fixed top-0 left-0 w-full z-10 bg-white/50 backdrop-blur-lg">
			<div className="flex items-center justify-between container py-3 px-5 md:px-10 mx-auto">
				<Link
					to="/"
					className="flex items-center gap-1 sm:gap-2 font-medium sm:text-lg py-2 px-2 sm:px-3 md:px-2 lg:px-3 rounded-md bg-primary text-white whitespace-nowrap"
				>
					<span className="text-lg sm:text-2xl">
						<HiBuildingStorefront />
					</span>
					<span>Red Store</span>
				</Link>
				<nav>
					<ul
						className={`flex px-5 md:px-0 md:items-center gap-5 md:gap-1 lg:gap-5 md:relative fixed top-0 w-full sm:w-80 h-screen md:shadow-none md:bg-transparent flex-col md:flex-row pt-28 md:pt-0 md:w-fit md:h-auto bg-white z-[100] md:z-auto transition-all duration-500 ${
							menu ? "left-0 shadow-xl" : "-left-full md:left-0"
						}`}
					>
						{navLinks.map((link) => (
							<li key={link.link}>
								<Link
									to={link.link}
									className={`capitalize hover:text-primary font-medium text-[1.05rem] relative before:absolute before:bottom-0 md:px-1 lg:px-2 pb-4 md:pb-6 before:left-1/2 before:-translate-x-1/2 before:bg-primary before:scale-0 hover:before:scale-100 before:transition-all before:duration-500 before:w-full before:h-1 before:rounded-full border-b block w-full md:border-none md:inline md:w-fit ${
										link.link === pathname &&
										"text-primary before:bg-primary before:scale-100"
									}`}
								>
									{link.label}
								</Link>
							</li>
						))}
						<span
							onClick={() => setMenu(false)}
							className="absolute top-10 right-5 text-2xl hover:bg-black/10 bg-black/5 p-2 rounded-full cursor-pointer md:hidden"
						>
							<IoClose />
						</span>
					</ul>
				</nav>
				<div className="flex items-center gap-1 lg:gap-2">
					<span className="text-xl sm:text-[1.4rem] hover:bg-primary/10 p-2 rounded-full cursor-pointer">
						<LuSearch />
					</span>
					<Link
						to="/cart"
						className={`relative text-xl sm:text-[1.4rem] hover:bg-primary/10 p-2 rounded-full cursor-pointer ${
							pathname === "/cart" && "bg-primary/10"
						}`}
					>
						<span className="absolute -top-1 -right-0.5 bg-primary text-white w-[1.3rem] aspect-square text-xs font-medium flex items-center justify-center rounded-full">
							5
						</span>
						<MdOutlineShoppingCart />
					</Link>
					<Link
						to="/wishlist"
						className={`relative text-xl sm:text-[1.4rem] hover:bg-primary/10 p-2 rounded-full cursor-pointer ${
							pathname === "/wishlist" && "bg-primary/10"
						}`}
					>
						<span className="absolute -top-1 -right-0.5 bg-primary text-white w-[1.3rem] aspect-square text-xs font-medium flex items-center justify-center rounded-full">
							0
						</span>
						<AiOutlineHeart />
					</Link>
					<Link
						to="/login"
						className="text-xl hover:bg-primary/10 p-2 rounded-full cursor-pointer"
					>
						<FaRegUser />
					</Link>
					<span
						onClick={() => setMenu(true)}
						className="text-xl sm:text-[1.4rem] hover:bg-primary/10 p-2 rounded-full cursor-pointer md:hidden"
					>
						<CgMenuGridO />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
