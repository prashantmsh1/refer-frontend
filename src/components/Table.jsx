import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { MdNavigateNext } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { useContext } from "react";
import { PageContext } from "../context/Context";
const Table = () => {
    const { referopen, setReferopen } = useContext(PageContext);
    const data = [
        "PRODUCT MANAGEMENT",
        "STRATEGY & LEADERSHIP",
        "DATA SCIENCE",
        "DIGITAL MARKETING",
        "DESIGN",
        "FINANCE",
        "CAREER",
        "SOFTWARE DEVELOPMENT",
        "BUSINESS",
        "SALES & MARKETING",
    ];
    return (
        <div className=" max-w-[1400px] mx-auto my-24">
            <div className="w-9/12 mx-auto text-2xl font-semibold text-center ">
                <h1>
                    What Are The <span className="text-blue-500 "> Referral Benefits?</span>
                </h1>
            </div>
            <div className="flex w-9/12 mx-auto mt-12 gap-x-20">
                <div className=" w-fit max-w-[200px]   rounded-xl  ">
                    <li className="flex items-center justify-between w-full px-4 py-2 text-lg text-white bg-blue-500 rounded-t-xl">
                        <span>All Progams</span> <MdNavigateNext className="text-2xl " />
                    </li>

                    <ul className="flex flex-col px-2 text-lg text-black border-2 border-gray-200 shadow-xl rounded-b-xl gap-y-1">
                        {data.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between px-4 py-2 font-semibold border-b-2 text-md ">
                                <span className="text-sm">{item}</span>{" "}
                                <MdNavigateNext className="text-2xl " />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex w-[900px] flex-col relative bg-gray-50 rounded-xl ">
                    <div className=" absolute w-[1px] h-full bg-gray-400 left-[460px]"></div>
                    <div className="flex ">
                        <div className="w-3/5 ">
                            <h1 className="p-2 px-8 mb-2 text-xl font-medium bg-blue-100 rounded-tl-2xl ">
                                Programs
                            </h1>
                        </div>
                        <div className="w-1/5 ">
                            <h1 className="p-2 mb-2 text-xl font-medium text-center bg-blue-100 ">
                                Referrer Bonus
                            </h1>
                        </div>
                        <div className="w-1/5 text-xl ">
                            <h1 className="p-2 mb-2 text-xl font-medium text-center bg-blue-100 rounded-tr-xl ">
                                Referee Bonus
                            </h1>
                        </div>
                    </div>
                    <div className=" absolute w-[1px] h-full bg-gray-400 left-[620px]"></div>
                    <div className="flex flex-col gap-y-1">
                        {Array.from({ length: 9 }).map((_, index) => (
                            <div key={index} className="flex text-gray-700 ">
                                <div className="flex items-center justify-center w-3/5 pl-4 text-lg gap-x-6 ">
                                    <GiGraduateCap className="text-5xl text-blue-700 " />
                                    <span>
                                        Professional Certificate Program in Product Management
                                    </span>
                                </div>
                                <div className="w-1/5 text-center">9000</div>
                                <div className="w-1/5 text-center">9000</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-end w-9/12 mx-auto mt-4 ">
                <button className="flex w-[170px] items-center justify-between px-4 py-2 font-semibold text-gray-400 border border-gray-400 rounded-xl">
                    <span>Show More</span> <FaAngleDown className="text-lg " />
                </button>
            </div>
            <div className="mt-8 text-center ">
                <button
                    onClick={() => setReferopen(!referopen)}
                    className="px-12 py-4 text-2xl text-white bg-blue-600 rounded-md">
                    Refer Now
                </button>
            </div>
        </div>
    );
};

export default Table;
