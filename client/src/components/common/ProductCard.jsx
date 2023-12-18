import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ img, img2, title, isNew, oldPrice, price }) => {
	const [changeImg, setChangeImg] = useState(false);

	return (
		<div
			onMouseEnter={() => setChangeImg(true)}
			onMouseLeave={() => setChangeImg(false)}
		>
			<div className="relative h-96 overflow-hidden rounded-lg">
				<img
					src={changeImg ? img2 : img}
					alt={title}
					className="w-full h-full object-cover object-top"
				/>
				{isNew && (
					<p className="absolute top-2 left-2 bg-secondary w-12 aspect-square text-white rounded-full flex items-center justify-center font-medium tracking-wide">
						New
					</p>
				)}
			</div>

			<div className="mt-2">
				<Link
					to="/product-details/1"
					className="font-medium hover:text-gray-600 cursor-pointer"
				>
					{title.slice(0, 30)}
					{title.length > 30 && "..."}
				</Link>
				<div className="flex -center gap-2">
					<s className="text-gray-500">${oldPrice}</s>
					<p className="font-medium text-lg">${price}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
