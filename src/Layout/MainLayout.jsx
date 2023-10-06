import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;