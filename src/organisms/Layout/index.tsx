import { useDispatch } from "react-redux";
import Sidebar from "../Sidebar";
import { useState } from "react";
import { searchMovies } from "../../redux/actions/movieActions";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { Hamburger } from "../Hamburger";
interface Props {
    children: any;
}
export const LayOut: React.FC<Props> = ({ children }) => {
    const [title, setTitle] = useState<string>("");
    const dispatch = useDispatch();
    const location = useLocation();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(searchMovies(title) as any);
    };
    const reset = () => {
        setTitle("");
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="basis-[100%] text-white main bg-[#36454F] rounded-[30px] mx-[15px] my-[10px] px-[30px]">
                {location.pathname === "/" && (
                    <>
                        <div className="border border-[#fff] mt-[30px] rounded-[5px] p-5 text-base space-y-1">
                            <h3 className="text-3xl">
                                Welcome to <span className="text-[#42A7C3] font-semibold">Watchlist</span>
                            </h3>
                            <p>Browse movies, add them to watchlists</p>
                            <p>
                                Just click the <BsBookmarkPlusFill className={`text-3xl m-0 inline text-[rgb(245,197,24)]`} /> to add the movie, the poster to see
                                more details to mark the movie as watched.
                            </p>
                        </div>
                        <div className="my-4 flex items-center xl:justify-center justify-between">
                            <h2 className="text-3xl text-center">Search Movies</h2>
                            <Hamburger />
                        </div>
                        <form onSubmit={handleSearch} className="mb-5 max-w-[800px] mx-auto flex">
                            <div className="bg-white flex justify-between px-5 py-3 text-black w-full rounded-[10px]">
                                <input
                                    type="text"
                                    placeholder="Enter movie title"
                                    className="w-full"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />

                                {title !== "" ? (
                                    <IoMdClose onClick={reset} className="text-xl cursor-pointer" />
                                ) : (
                                    <button type="submit">
                                        <IoSearchOutline className="text-xl" />
                                    </button>
                                )}
                            </div>
                        </form>
                    </>
                )}
                {children}
            </div>
        </div>
    );
};
