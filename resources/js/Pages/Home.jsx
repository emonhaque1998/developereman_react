import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";

export default function ({ auth, laravelVersion, phpVersion }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-gray-800 py-4">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            src="logo.png"
                            alt="Logo"
                            className="h-8 w-auto mr-4"
                        />
                        <h1 className="text-white text-lg font-semibold">
                            Your Site Name
                        </h1>
                    </div>
                    <ul className="hidden md:flex space-x-4">
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white"
                            >
                                Contact
                            </a>
                        </li>
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="text-gray-300 hover:text-white"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Log in
                                </Link>

                                <Link
                                    href={route("register")}
                                    className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </ul>
                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu (Hidden by default) */}
                {isOpen && (
                    <div className="md:hidden bg-gray-800 px-2 pt-2 pb-3 space-y-1">
                        <a
                            href="#"
                            className="block text-gray-300 hover:text-white"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="block text-gray-300 hover:text-white"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="block text-gray-300 hover:text-white"
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            className="block text-gray-300 hover:text-white"
                        >
                            Contact
                        </a>
                    </div>
                )}
            </nav>
        </>
    );
}
