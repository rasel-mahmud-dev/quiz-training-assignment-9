import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header = () => {
    const navData = [
        { to: "/", label: "Topic" },
        { to: "/statistics", label: "Statistics" },
        { to: "/blogs", label: "Blogs" },
    ];

    const [isMobileExpand, setMobileExpand] = useState(false);

    return (
        <>
            <header className="bg-white shadow-none md:shadow-primary-xl fixed top-0 left-0 w-full z-30">
                <div className="container flex justify-between items-center">
                    <div className="logo">
                        <Link to="/">
                            <span className="flex items-center">
                                <img className="w-6 mr-1" src="/logo.png" alt="" />{" "}
                                <h2 className="text-primary-400 font-bold text-xl">Quiz Training</h2>
                            </span>
                        </Link>
                    </div>
                    <nav
                        className={`flex items-center gap-x-4 main-nav ${
                            isMobileExpand ? "mobile-expand" : "mobile-collapse"
                        }`}
                    >
                        {navData.map((navItem, index) => (
                            <li key={index} className="list-none py-6">
                                <NavLink end={true} className="text-primary-400" to={navItem.to}>
                                    {navItem.label}
                                </NavLink>
                            </li>
                        ))}
                    </nav>

                    <FontAwesomeIcon
                        onClick={() => setMobileExpand(!isMobileExpand)}
                        className="block md:hidden text-xl py-6 "
                        icon={faBars}
                    />
                </div>
            </header>
            <div className="space-header"></div>
        </>
    );
};

export default Header;
