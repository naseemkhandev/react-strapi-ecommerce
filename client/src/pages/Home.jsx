import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import TrendingProducts from "../components/TrendingProducts";

const Home = () => {
	return (
		<div>
			<Header />
			<FeaturedProducts />
			<Categories />
			<TrendingProducts />
			<NewsLetter />
		</div>
	);
};

export default Home;
