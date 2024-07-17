import React from "react";
import { GiGraduateCap } from "react-icons/gi";

const Table = () => {
    return (
        <div className=" max-w-[1400px] mx-auto my-24">
            <div className="w-9/12 mx-auto text-2xl font-semibold text-center ">
                <h1>
                    What Are The <span className="text-blue-500 "> Referral Benefits</span>
                </h1>
            </div>
            <div className="flex w-9/12 mx-auto mt-12 gap-x-20">
                <div className=" w-[200px] bg-blue-500 my-2 ">
                    <ul>
                        <li>All Programs</li>
                    </ul>
                </div>
                <div className="flex w-[900px] ">
                    <div className="w-3/5 ">
                        <h1 className="p-2 px-8 my-2 text-xl font-semibold bg-blue-100 rounded-tl-2xl ">
                            Programs
                        </h1>
                        <div className="pr-4 text-lg ">
                            <ul>
                                <li className="flex items-center justify-center text-wrap gap-x-4 ">
                                    <GiGraduateCap />
                                    <span>
                                        Professional Certificate Program in Product Management
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/5 ">
                        <h1 className="p-2 my-2 text-xl font-semibold text-center bg-blue-100 ">
                            Referrer Bonus
                        </h1>
                        <div>
                            <ul className="text-center ">
                                <li>8000</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/5 text-xl ">
                        <h1 className="p-2 my-2 text-xl font-semibold text-center bg-blue-100 rounded-tr-xl ">
                            Referee Bonus
                        </h1>
                        <div>
                            <ul className="text-center ">
                                <li>8000</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
