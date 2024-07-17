import React from "react";
import heroimg from "../assets/heroimg.png";
import { useContext } from "react";
import { PageContext } from "../context/Context";
import PageContextProvider from "../context/Context";
const Hero = () => {
    const { referopen, setReferopen } = useContext(PageContext);
    return (
        <div className=" max-w-[1400px] mx-auto mt-12 mb-12">
            <div className="w-full ">
                <div className="w-1/2 py-2 mx-auto text-xl text-gray-700 rounded-3xl bg-blue-50">
                    <ul className="flex justify-around ">
                        <li>
                            <span className=" text-sky-700">Refer</span>
                            <span className="flex items-center justify-center ">
                                <svg
                                    width="6"
                                    height="6"
                                    viewBox="0 0 6 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3" cy="3" r="3" fill="#1A73E8" />
                                </svg>
                            </span>
                        </li>
                        <li>Benefits</li>
                        <li>FAQ</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>
            <div className="flex w-full mt-8 bg-blue-50 rounded-3xl">
                <div className="flex flex-col w-2/5 pl-12 ">
                    <h1 className="font-bold text-8xl mt-36">Let’s Learn & Earn</h1>
                    <h2 className=" text-5xl mt-12 leading-[60px] w-11/12">
                        Get a chance to win up-to{" "}
                        <span className="font-bold text-blue-500 ">Rs. 15,000</span>{" "}
                    </h2>
                    <button
                        onClick={() => {
                            setReferopen(!referopen);
                        }}
                        className="px-4 py-2 mt-16 text-2xl text-white bg-blue-600 rounded-lg w-fit">
                        Refer Now
                    </button>
                </div>
                <div className="">
                    <div className="px-8 -mb-8 ">
                        <img src={heroimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
