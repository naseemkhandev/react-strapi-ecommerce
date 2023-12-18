import ProductCard from "./common/ProductCard";
import Title from "./common/Title";

const FeaturedProducts = () => {
	const data = [
		{
			id: 1,
			img: "https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792_1280.jpg",
			img2: "https://cdn.pixabay.com/photo/2020/04/15/14/45/microphone-5046876_1280.jpg",
			title: "Microphone Podcast with noise cancellation",
			isNew: true,
			oldPrice: 20,
			price: 12,
		},
		{
			id: 2,
			img: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			img2: "https://cdn.pixabay.com/photo/2020/04/15/14/45/microphone-5046876_1280.jpg",
			title: "Microphone Podcast with noise cancellation",
			isNew: true,
			oldPrice: 20,
			price: 12,
		},
		{
			id: 3,
			img: "https://cdn.pixabay.com/photo/2016/01/31/21/37/microphone-1172260_1280.jpg",
			img2: "https://cdn.pixabay.com/photo/2020/04/15/14/45/microphone-5046876_1280.jpg",
			title: "Microphone Podcast with noise cancellation",
			isNew: true,
			oldPrice: 20,
			price: 12,
		},
		{
			id: 4,
			img: "https://cdn.pixabay.com/photo/2014/10/07/09/17/earphones-477446_1280.jpg",
			img2: "https://cdn.pixabay.com/photo/2020/04/15/14/45/microphone-5046876_1280.jpg",
			title: "Microphone Podcast with noise cancellation",
			isNew: true,
			oldPrice: 20,
			price: 12,
		},
	];

	return (
		<div className="py-10 md:py-20 container px-5 mx-auto md:px-10">
			<Title text="Featured Products" />

			<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-16">
				{data.map((item) => (
					<ProductCard key={item.id} {...item} />
				))}
			</div>
		</div>
	);
};

export default FeaturedProducts;
