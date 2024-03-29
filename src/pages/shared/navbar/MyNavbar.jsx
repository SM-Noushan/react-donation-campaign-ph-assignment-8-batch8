import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "/resources/Logo.png";
import { NavLink } from "react-router-dom";

function NavList() {
    const navCSS = 'flex items-center transition-colors';
    return (
        <ul className="my-2 flex flex-col items-end gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="lead"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to="/" className={({ isActive }) => isActive ? `text-red-500 ${navCSS}` : `${navCSS} hover:text-orange-500`}>
                    Home
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="lead"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to="/donation" className={({ isActive }) => isActive ? `text-red-500 ${navCSS}` : `${navCSS} hover:text-orange-500`}>
                    Donation
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="lead"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to="/statistics" className={({ isActive }) => isActive ? `text-red-500 ${navCSS}` : `${navCSS} hover:text-orange-500`}>
                    Statistics
                </NavLink>
            </Typography>
        </ul >
    );
}

export function MyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="mx-auto max-w-7xl py-3 shadow-none">
            <div className="flex items-center justify-between text-blue-gray-900">
                <NavLink to="/" className="mr-4 cursor-pointer py-1.5">
                    <img src={logo} alt="website-logo" />
                </NavLink>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}