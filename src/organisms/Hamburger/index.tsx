import { AiOutlineMenuFold } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { TOGGLE_SIDEBAR } from "../../redux/types/types";
import { useSelector } from "react-redux";

export const Hamburger = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector((state: any) => state?.ToggleClickState);

    const toggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDEBAR, payload: !isOpen });
    };
    return <AiOutlineMenuFold onClick={toggleSidebar} title="To click open sidebar" className="text-2xl mobView cursor-pointer" />;
};
