import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const navData = [
        { to: "/", label: "Topic" },
        { to: "/statistics", label: "Statistics" },
        { to: "/blogs", label: "Blogs" },
    ];

    return (
        <>
            <header className="bg-white shadow-primary-xl fixed top-0 left-0 w-full z-30">
                <div className="container flex justify-between items-center">
                    <div className="logo">
                        <Link to="/">
                            {" "}
                            <h2 className="text-primary-400 font-bold text-xl">Quiz Training</h2>
                        </Link>
                    </div>
                    <nav className="flex items-center gap-x-4">
                        {navData.map((navItem, index) => (
                            <li key={index} className="list-none py-6">
                                <NavLink className="text-primary-400" to={navItem.to}>
                                    {navItem.label}
                                </NavLink>
                            </li>
                        ))}
                    </nav>
                </div>
            </header>
            <div className="space-header"></div>
        </>
    );
};

export default Header;
