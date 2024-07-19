import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MovieSearch from "./pages/MovieSearch";
import MovieDetail from "./pages/MovieDetail";
import Watchlist from "./pages/WatchList";

export const AllRoutes = () => {
	return (
		<BrowserRouter basename="/Watchlists">
			<Routes>
				<Route path="/" element={<MovieSearch />}>
					<Route element={<MovieSearch />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/movie/:id" element={<MovieDetail />} />
				<Route path="/watchlist" element={<Watchlist />} />
			</Routes>
		</BrowserRouter>
	);
};
