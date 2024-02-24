import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiFillDollarCircle, AiFillGift } from "react-icons/ai";
import {
    FaChartBar,
    FaChartLine,
    FaChartPie
} from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
    RiDashboardFill,
    RiListCheck,
    RiShoppingBag3Fill
} from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";

const SideBar = () => {
    const location = useLocation();

    const [showModal, setShowModal] = useState<boolean>(false);
    const [phoneActive, setPhoneActive] = useState<boolean>(
        window.innerWidth < 1100
    );

    const resizeHandler = () => {
        setPhoneActive(window.innerWidth < 1100);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <>
            {phoneActive && (
                <button id="hamburger" onClick={() => setShowModal(true)}>
                    <HiMenuAlt4 />
                </button>
            )}

            <aside
                style={phoneActive ? {
                    width: "20rem",
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: showModal ? "0" : "-20rem",
                    transition: "all 0.5s",
                }
                    : {}
                }
            >
                <Link to='/admin/dashboard'><h1>Admin Dashboard</h1></Link>
                <DivOne location={location} />
                <DivTwo location={location} />

                {phoneActive && (
                    <button id="close-sidebar" onClick={() => setShowModal(false)}>
                        Close
                    </button>
                )}
            </aside>
        </>
    );
};

const DivOne = ({ location }: { location: Location }) => (
    <div>
        <h5>Main</h5>
        <ul>


            <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location} />
            <Li url="/admin/category" text="Category" Icon={RiListCheck} location={location} />
            <Li url="/admin/product" text="Product" Icon={RiShoppingBag3Fill} location={location} />
            <Li url="/admin/user" text="Users" Icon={IoIosPeople} location={location} />
            <Li url="/admin/order" text="Orders" Icon={AiFillGift} location={location} />
            <Li url="/admin/payment" text="Payments" Icon={AiFillDollarCircle} location={location} />
        </ul>
    </div>
);

const DivTwo = ({ location }: { location: Location }) => (
    <div>
        <h5>Charts</h5>
        <ul>
            <Li url="/admin/chart/bar" text="Bar" Icon={FaChartBar} location={location} />
            <Li url="/admin/chart/pie" text="Pie" Icon={FaChartPie} location={location} />
            <Li url="/admin/chart/line" text="Line" Icon={FaChartLine} location={location} />
        </ul>
    </div>
);




interface LiProps {
    url: string;
    text: string;
    location: Location;
    Icon: IconType;
}
const Li = ({ url, text, location, Icon }: LiProps) => (
    <li className={location.pathname.includes(url) ? 'active-bg' : ''}>
        <Link to={url} className={location.pathname.includes(url) ? "active-color" : ""}>
            <Icon />{text}
        </Link>
    </li>
);

export default SideBar;
