import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Facts from "./pages/Facts";
import NotFound from "./pages/NotFound";
import Beans from "./pages/Beans";
import Recipies from "./pages/Recipies";
import Combinations from "./pages/Combinations";
import History from "./pages/History";
import BeanPage from "./pages/Bean";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import Review from "./pages/Review";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		loader: Loader ,
		children: [
			{index: true, element: <Home />},
			{path: "facts",element: <Facts />},
			{path: "bean/:id",element: <BeanPage />},
			{path: "beans",element: <Beans />},
			{path: "recipies",element: <Recipies />},
			{path: "combinations",element: <Combinations />},
			{path: "history",element: <History />},
			{path: "review",element: <Review />},
			{path: "*",element: <NotFound />}
		]
	}
	//{
	//	path: "/",
	//	element: <Home />,
	//},
	//{
	//	path: "/facts",
	//	element:<Facts />,
	//},
	//{
	//	path: "/bean/:id",
	//	element: <BeanPage />
	//},
	//{
	//	path: "/beans",
	//	element: <Beans />
	//},
	//{
	//	path: "/recipies",
	//	element: <Recipies />
	//},
	//{
	//	path: "/combinations",
	//	element: <Combinations />
	//},
	//{
	//	path: "/history",
	//	element: <History />
	//},
	//{
	//	path: "*",
	//	element: <NotFound />
	//}
]);

export default router;
