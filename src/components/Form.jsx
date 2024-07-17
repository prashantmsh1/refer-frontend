import React, { useState } from "react";
import { useContext } from "react";
import { PageContext } from "../context/Context";
import { IoMdClose } from "react-icons/io";

const Form = () => {
    const { referopen, setReferopen } = useContext(PageContext);
    const [formData, setFormData] = useState({});

    const [error, setError] = useState("");
    // Handle change for the select dropdown

    const handleChange = async (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        console.log(formData);
    };
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (
                !formData.referrerName ||
                !formData.referrerEmail ||
                !formData.refereeName ||
                !formData.refereeEmail
            ) {
                setError("Missing required fields");
                console.log(formData);
            }
            console.log(formData);
            const response = await fetch("/api/referral", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (!response.ok) {
                setError(data.error);
            }
            console.log(data);
        } catch (error) {
            setError("Something went wrong", error);
        }
    };
    return (
        <div
            className={`absolute transition-all duration-300 w-1/2 px-12 py-8 mx-auto translate-x-1/2 translate-y-1/2 border-2 rounded-lg shadow-lg bg-gray-50 ${
                referopen ? "block" : "hidden"
            }`}>
            <IoMdClose
                className="absolute text-xl cursor-pointer right-4 top-4"
                onClick={() => setReferopen(!referopen)}
            />
            <h1 className="mb-4 text-2xl text-center text-blue-900 ">
                Enter the details whom you want to Refer
            </h1>
            <form className={` max-w-[450px] mx-auto `}>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Your Name
                    </label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="referrerName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="name..."
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        type="email"
                        id="referrerEmail"
                        className="block mb-2 text-sm font-medium text-gray-900 ">
                        Your email
                    </label>
                    <input
                        onChange={handleChange}
                        type="email"
                        id="referrerEmail"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="email..."
                        required
                    />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Refer To
                    </label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="refereeName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        required
                        placeholder="name..."
                    />
                </div>
                <div className="">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Referree Email
                    </label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="refereeEmail"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        required
                        placeholder="name..."
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
