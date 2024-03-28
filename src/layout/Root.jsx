import { Outlet } from "react-router-dom";
import { MyNavbar } from "../pages/shared/navbar/MyNavbar";

const Root = () => {
    return (
        <div>
            <MyNavbar />
            <Outlet />
        </div>
    );
};

export default Root;