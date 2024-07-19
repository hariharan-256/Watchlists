import React from "react";
import { IoIosLogOut, IoIosHeart } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/authActions";
import { getCurrentUser, getUsername } from "../../utils/localstorage";
import { TOGGLE_SIDEBAR } from "../../redux/types/types";
import { LuChevronFirst } from "react-icons/lu";

const Sidebar: React.FC = () => {
    const dispatch = useDispatch();

    const { isOpen } = useSelector((state: any) => state?.ToggleClickState);

    const { watchlist } = useSelector((state: any) => state.watchlist) || {};

    const navigate = useNavigate();
    const user = getCurrentUser();

    const handleLogout = () => {
        dispatch(logout() as any);
        navigate("/login");
    };

    const UserName = user ? getUsername(user?.email) : "Guest User";
    const toggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDEBAR, payload: !isOpen });
    };
    return (
        <div>
            <div
                className={`flex flex-col h-[calc(100vh_-_20px)] sidebar ${isOpen ? "Open" : ""
                    } justify-between bg-[#36454F] text-white mx-[18px] my-[10px] px-[12px] rounded-[30px] transition-width duration-300`}>
                <div>
                    <div className={`flex items-center px-[25px] justify-between py-[30px]`}>
                        <h1 className={`text-3xl text-[#42A7C3] font-semibold`}>Watchlists</h1>{" "}
                        <LuChevronFirst onClick={toggleSidebar} className="mobView cursor-pointer text-2xl" title="To click close sidebar" />
                    </div>
                    <div className="px-[30px]">
                        <Link to="/" className="text-lg mb-3 hover:opacity-[.4] ease-out duration-300 flex items-center justify-between">
                            Home <FaHome className="ml-2" />
                        </Link>
                        {watchlist?.length > 0 && (
                            <Link className="flex text-lg justify-between items-center hover:opacity-[.4] ease-out duration-300" to="/watchlist">
                                My Lists <IoIosHeart className="ml-2 text-lg" />
                            </Link>
                        )}
                    </div>
                </div>
                <div className={`flex items-center py-[27px] px-[25px] border-t border-[#42A7C3]  justify-center`}>
                    <div className="flex items-center justify-center">
                        <FaRegCircleUser className={`text-3xl`} />
                        <div className={`ml-[10px]`}>
                            <h4 title={UserName} className="text-base font-semibold truncate w-[100px]">
                                {UserName}
                            </h4>
                        </div>
                    </div>
                    <IoIosLogOut title={user ? "To click logout" : "To click login"} onClick={handleLogout} className="ml-3 text-2xl cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
