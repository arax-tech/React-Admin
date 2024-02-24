import { FaRegBell } from "react-icons/fa";

import { BsSearch } from "react-icons/bs";

import SideBar from "../layouts/include/SideBar";


import { ReactNode } from "react";
import Placeholder from "../../assets/placeholder.jpg";
interface LayoutProps {
    children: ReactNode;
}

const Layouts: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="admin-container">
            <SideBar />
            <main className="dashboard">
                <div className="bar">
                    <BsSearch />
                    <input type="text" placeholder="Search..." />
                    <FaRegBell size={20} />
                    <img src={Placeholder} alt="User" />
                </div>
                <div style={{ padding: '2rem' }}>
                    {children}
                </div>


            </main>
        </div>
    );
}

export default Layouts


