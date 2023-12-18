import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/products/:id",
				element: <Products />,
			},
			{
				path: "/product-details/:id",
				element: <ProductDetails />,
			},
			{
				path: "/services",
				element: <Services />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/wishlist",
				element: <Wishlist />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
