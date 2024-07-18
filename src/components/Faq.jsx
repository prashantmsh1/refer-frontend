import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Faq = () => {
    return (
        <div className="flex justify-center ">
            <div className="w-5/6 ">
                <div className="text-2xl font-medium text-center ">
                    <h1>
                        Frequently Asked <span className="text-blue-800 ">Questions</span>
                    </h1>
                </div>
                <div className="flex mt-16 ml-20 gap-x-24 ">
                    <div className="flex flex-col gap-y-4 *:w-[310px] text-center ">
                        <button
                            className={`shadow-[0px_2px_26.6px_0px_#0000002E] text-blue-800 font-medium rounded-md text-[18px]  py-4 `}>
                            Eligibility
                        </button>
                        <button
                            className={`shadow-[0px_2px_26.6px_0px_#0000002E] text-gray-500 font-medium rounded-md text-[18px]  py-4 `}>
                            How To Use
                        </button>
                        <button
                            className={`shadow-[0px_2px_26.6px_0px_#0000002E] text-gray-500 font-medium rounded-md text-[18px]  py-4 `}>
                            Terms & Conditions
                        </button>
                    </div>
                    <div className="font-medium ">
                        <div className="flex items-center justify-between text-blue-700 gap-x-4">
                            <span className=" text-nowrap">
                                Do I need to have prior Product Management and Project Management
                                experience to enroll in the program?
                            </span>
                            <span>
                                <FaAngleUp />
                            </span>
                        </div>
                        <span className="block w-11/12 mt-6 text-gray-500 ">
                            No, the program is designed to be inclusive of all levels of experience.
                            All topics will be covered from the basics, making it suitable for
                            individuals from any field of work.
                        </span>
                        <div className="flex items-center mt-8 gap-x-24">
                            <span className="">
                                What is the minimum system configuration required?
                            </span>
                            <span>
                                <FaAngleDown />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
