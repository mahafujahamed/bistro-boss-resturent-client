import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from "react-icons/fa";

const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-[#c58a31] text-base-content">

                    <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/menu">Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order</NavLink></li>
                    
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;