import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../routes/Routes";
import { CgProfile } from "react-icons/cg";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { BsPersonAdd } from "react-icons/bs";
import { motion } from "framer-motion";
import { useAuth } from "../providers/AuthProvider";
import logo from "../assets/react.svg";
import { FaEllipsisV } from "react-icons/fa";
import { RiDashboardHorizontalLine } from "react-icons/ri";

export const Header = () => {
    const { authenticated } = useAuth();

    const location = useLocation();

    const navs = authenticated
    ? [
        { title: 'Dashboard', to: routes.main().dashboard() },
        { title: 'Jobs', to: routes.main().jobSearch() },
        { title: 'Seekers', to: routes.main().workerSearch() },
        { title: 'Book Appointment', to: routes.main().bookAppointment() },
    ]:[
        { title: "Home", to: routes.public().home() },
        { title: "Health Professionals", to: routes.public().healthProfessionals() },
        { title: "News", to: routes.public().articles() },
        { title: "About Us", to: routes.public().about() },
    ];

    const menus = authenticated
    ? [
        { icon: RiDashboardHorizontalLine, title: "My Account", to: routes.main().dashboard() },
        { icon: LuLogOut, title: "Logout", to: routes.main().signOut() }
    ]:[
        { icon: LuLogIn, title: "Login", to: routes.public().signin() },
        { icon: BsPersonAdd, title: "Create an account", to: routes.public().register() },
    ];

    return (
        <motion.header
            className="bg-white sticky-top"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="container navbar py-2 d-flex align-items-center justify-content-between">
                {/* Logo */}
                <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
                    <img src={logo} alt="Nurse's Pride Logo" className="me-2" style={{ height: 40 }} />
                    <span className="fw-bold fs-5">Nurse's Pride</span>
                </Link>

                {/* Desktop nav links + profile dropdown */}
                <div className="d-none d-md-flex align-items-center gap-4">
                    {navs.map((nav) => (
                        <Link
                            to={nav.to}
                            className={`text-decoration-none link-primary ${
                                location.pathname === nav.to ? "active" : ""
                            }`}
                            key={nav.title}
                        >
                            {nav.title}
                        </Link>
                    ))}

                    {/* Profile dropdown */}
                    <div className="dropdown">
                        <button className="btn border-0" data-bs-toggle="dropdown">
                            <CgProfile className="text-secondary fs-3" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end shadow">
                            {menus.map((menu) => (
                                <Fragment key={menu.title}>
                                    {menu.isDivider ? (
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                    ) : (
                                        <li>
                                            <Link
                                                to={menu.to || "#"}
                                                className="dropdown-item d-flex justify-content-between align-items-center gap-3"
                                                onClick={
                                                    menu.title === "Logout"
                                                    ? () => console.log("Logout clicked")
                                                    : undefined
                                                }
                                            >
                                                {menu.title}
                                                {menu.icon && <menu.icon />}
                                            </Link>
                                        </li>
                                    )}
                                </Fragment>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Mobile: Hamburger menu */}
                <div className="d-md-none dropdown ms-auto">
                    <button className="btn border-0" type="button" data-bs-toggle="dropdown">
                        <span className="navbar-toggler-icon"></span>
                        <FaEllipsisV className="d-none" />
                    </button>
                    <motion.ul
                        className="dropdown-menu dropdown-menu-end shadow"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {navs.map((nav) => (
                            <li key={nav.title}>
                                <Link
                                    to={nav.to}
                                    className={`dropdown-item ${location.pathname === nav.to ? "active" : ""}`}
                                >
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                        {menus.length > 0 && <li><hr className="dropdown-divider" /></li>}
                        {menus.map((menu) => (
                            <li key={menu.title}>
                                <Link
                                    to={menu.to || "#"}
                                    className="dropdown-item d-flex justify-content-between align-items-center gap-3"
                                    onClick={
                                      menu.title === "Logout"
                                        ? () => console.log("Logout clicked")
                                        : undefined
                                    }
                                >
                                    {menu.title}
                                    {menu.icon && <menu.icon />}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </nav>
        </motion.header>
    );
};