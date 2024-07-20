import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWatchlist, removeFromWatchlist } from "../redux/actions/watchlistActions";
import { BsBookmarkPlusFill, BsFillBookmarkCheckFill } from "react-icons/bs";
import { MdMovieFilter } from "react-icons/md";

import { useSelector } from "react-redux";
import { Loader } from "../organisms/Loader";

interface Movie {
	imdbID: string;
	Title: string;
	Year: string;
	Poster: string;
}

interface Props {
	movies: Movie[];
	fetching: Boolean;
}

const MovieList: React.FC<Props> = ({ movies, fetching }) => {
	const dispatch = useDispatch();
	const users = useSelector((state: any) => state.watchlist);
	const navigate = useNavigate();
	const location = useLocation();
	const watchlist = users?.watchlist || [];

	const handleAddToWatchlist = (e: React.FormEvent, movie: any) => {
		e.preventDefault();
		const userData: any = localStorage.getItem("currentUser");
		const user = JSON.parse(userData);
		if (user) {
			const isAlreadyInWatchlist = watchlist?.some((watchlistItem: any) => watchlistItem.imdbID === movie.imdbID);
			if (!isAlreadyInWatchlist) {
				dispatch(addToWatchlist(movie));
			} else {
				dispatch(removeFromWatchlist(movie.imdbID));
			}
		} else {
			navigate("/login");
		}
	};

	return (
		<div className={`overflow-y-auto relative ${location.pathname !== "/watchlist" ? `h-[calc(100vh_-_22rem)]` : `h-[calc(100vh_-_8rem)]`} mb-4`}>
			{fetching ? (
				<div className="text-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
					<Loader />
				</div>
			) : movies && movies?.length > 0 ? (
				<ul className="grid xl:grid-cols-5 gap-5">
					{movies?.map((movie) => (
						<li key={movie?.imdbID} className="bg-white rounded-b-[6px] text-black">
							<Link className="h-full" to={`/movie/${movie?.imdbID}`}>
								<div className="relative w-full h-[370px]">
									{movie?.Poster !== "N/A" ? (
										<img className="w-full h-full object-contain" src={movie?.Poster} alt="img" />
									) : (
										<div className="bg-[#dedede] h-full"></div>
									)}
									<div className="absolute top-0 z-[2] left-0" onClick={(e) => handleAddToWatchlist(e, movie)}>
										{watchlist?.some((el: any) => el?.imdbID === movie?.imdbID) ? (
											<BsFillBookmarkCheckFill className={`text-3xl m-0 text-[rgb(245,197,24)]`} />
										) : (
											<BsBookmarkPlusFill
												className={`text-3xl p-0 opacity-[.8] ease-out duration-300 hover:opacity-[1] text-[#766a09]`}
											/>
										)}
									</div>
								</div>
								<div className="p-5 ">
									<h4 className="text-base">
										{movie?.Title} ({movie?.Year})
									</h4>
								</div>
							</Link>
						</li>
					))}
				</ul>
			) : (
				<p className="text-center flex items-center justify-center">
					Type the movie title <MdMovieFilter className="text-lg ml-1" />
				</p>
			)}
		</div>
	);
};

export default MovieList;
