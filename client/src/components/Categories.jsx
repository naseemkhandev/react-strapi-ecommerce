import { Link } from "react-router-dom";

import Title from "./common/Title";

const CategoryCard = ({ img, category }) => {
	return (
		<div
			className={`rounded h-full min-h-[15rem] md:min-h-[18rem] relative cursor-pointer`}
		>
			<img
				src={img}
				alt={category}
				className="w-full h-full min-h-[15rem] md:min-h-[18rem] object-cover object-center rounded"
			/>
			<Link
				to={`/products/${category}`}
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2.5 px-4 rounded-lg z-[1] flex items-center justify-center transition-all duration-300 delay-100 bg-white hover:bg-primary hover:text-white capitalize text-sm md:text-base font-medium md:font-normal"
			>
				{category}
			</Link>
			<span className="block w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded transition-all duration-300 hover:bg-black/50 bg-black/30" />
		</div>
	);
};

const Categories = () => {
	return (
		<div className="pb-10 md:pb-20 md:pt-5 container px-2 mx-auto">
			<Title text="popular categories" />

			<div className="mt-14 flex flex-col lg:flex-row justify-between gap-1 h-full lg:h-screen">
				<div className="flex-[1] w-full h-full flex sm:flex-row flex-col lg:flex-col justify-between gap-1">
					<CategoryCard
						img="https://images.pexels.com/photos/4940756/pexels-photo-4940756.jpeg?auto=compress&cs=tinysrgb&w=600"
						category="sale"
					/>
					<CategoryCard
						img="https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=600"
						category="men"
					/>
				</div>
				<div className="flex-[1] w-full lg:h-full">
					<CategoryCard
						img="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=600"
						category="women"
					/>
				</div>
				<div className="flex-[2] w-full flex md:flex-row flex-col lg:flex-col justify-between gap-1">
					<div className="flex sm:flex-row flex-col gap-1 w-full h-full">
						<CategoryCard
							img="https://images.pexels.com/photos/7319125/pexels-photo-7319125.jpeg?auto=compress&cs=tinysrgb&w=600"
							category="new season"
						/>
						<CategoryCard
							img="https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							category="accesories"
						/>
					</div>
					<div className="w-full h-72">
						<CategoryCard
							img="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"
							category="shoes"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Categories;
