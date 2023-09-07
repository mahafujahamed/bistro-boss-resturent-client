import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup");
    return (
        <div>
            { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
           { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;