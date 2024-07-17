import React from "react";
import accredianLogo from "../assets/logo/accredianLogo.png";

const Navbar = () => {
    return (
        <nav className="  mx-auto">
            <div className=" bg-blue-100 h-14 text-lg text-[#262626] flex gap-x-4 items-center justify-center ">
                <p>Navigate your ideal career path with tailored expert advice</p>
                <span className=" text-[#1A73E8]">Contact Us</span>
            </div>
            <div className=" max-w-[1400px] mx-auto flex mt-4 justify-between items-center ">
                <div className=" flex items-center justify-around w-1/5 ">
                    <img src={accredianLogo} className=" mt-2" alt="" />
                    <button className=" text-base text-white  bg-[#1A73E8] flex items-center justify-center gap-x-2 p-2 rounded-md">
                        <span>Courses</span>
                        <svg
                            width="12"
                            height="7"
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6 4.79082L9.96875 0.818945C10.2625 0.525195 10.7375 0.525195 11.0281 0.818945C11.3187 1.1127 11.3187 1.5877 11.0281 1.88145L6.53125 6.38145C6.24687 6.66582 5.79062 6.67207 5.49687 6.40332L0.96875 1.88457C0.821875 1.7377 0.75 1.54395 0.75 1.35332C0.75 1.1627 0.821875 0.968946 0.96875 0.82207C1.2625 0.528321 1.7375 0.528321 2.02812 0.82207L6 4.79082Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>
                <div className=" flex gap-x-12 justify-between items-center ">
                    <ul className=" flex gap-x-6">
                        <li>Refer & Earn</li>
                        <li>Resources</li>
                        <li>About Us</li>
                    </ul>
                    <div className=" flex gap-x-6">
                        <button className=" p-2 bg-gray-200 px-4 rounded-lg">Login</button>
                        <button className=" p-2 text-white bg-blue-600 px-4 rounded-lg">
                            Try for Free
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
