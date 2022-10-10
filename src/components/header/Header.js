import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const navData = [
        { to: "/", label: "Topic" },
        { to: "/statistics", label: "Statistics" },
        { to: "/blog", label: "Blog" },
    ];

    return (
        <header className="bg-white shadow-rose-xl">
            <div className="container flex justify-between items-center">
                <div className="logo">
                    <h2 className="text-rose-400 font-bold text-2xl">Quiz Training</h2>
                </div>
                <nav className="flex items-center gap-x-4">
                    {navData.map((navItem, index) => (
                        <li key={index} className="list-none py-4">
                            <NavLink className="text-rose-300" to={navItem.to}>
                                {navItem.label}
                            </NavLink>
                        </li>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
