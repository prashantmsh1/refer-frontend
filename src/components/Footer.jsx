import React from "react";
import logo from "../assets/logo/accredianLogo.png";
import { IoMdAdd } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    const programs = [
        "Data Science & AI",
        "Product Management",
        "Business Analytics",
        "Digital Transformation",
        "Business Management",
        "Cyber Security",
        "Cloud Computing",
        "Full Stack Development",
        "DevOps",
        "Machine Learning",
        "Artificial Intelligence",
        "Data Analytics    ",
    ];
    return (
        <div className="w-full  mt-12 text-white bg-[#282828] py-8">
            <div className="flex justify-between w-9/12 mx-auto ">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <button className="px-8 py-2 text-white bg-blue-700 border border-white rounded-md ">
                        Schedule 1-on-1 Call Now
                    </button>
                    <span>Speak with our Learning Advisor</span>
                </div>
            </div>
            <div className=" w-9/12 mt-8 mx-auto h-[1px] bg-gray-200"></div>
            <div className="flex w-9/12 mx-auto mt-8">
                <div>
                    <h1 className="mb-2 text-gray-200 ">Programs</h1>
                    <ul className=" w-[300px] gap-y-2 flex flex-col ">
                        <li className="flex items-center justify-between w-full">
                            <span>Data Science & AI</span>{" "}
                            <span>
                                <IoMdAdd />
                            </span>
                        </li>
                        {programs.map((program, index) => (
                            <li key={index} className="flex items-center justify-between w-full">
                                <span>{program}</span>{" "}
                                <span>
                                    <IoMdAdd />
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="px-8 text-gray-200 ">
                    <h1 className="mb-2 text-xl ">Contact Us</h1>
                    <div className="flex flex-col ">
                        <span>Email us (For Data Science Queries): admissions@accredian.com</span>
                        <span>Email us (For Product Management Queries):pm@accredian.com</span>
                        <span>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</span>
                        <span>Product Management Admission Helpline:+91 9625811095</span>
                        <span>Enrolled Student Helpline: +91 7969322507</span>
                        <span>
                            Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
                            Gurugram, Haryana 122015
                        </span>
                        <h1 className="mt-4 text-xl ">Why Accredian</h1>
                        <div>
                            <h1 className="mt-4 text-xl text-gray-200 ">Follow Us</h1>
                            <div className="flex mt-4 gap-x-4 *:text-2xl ">
                                <span>
                                    <FaFacebook />
                                </span>
                                <span>
                                    <FaLinkedin />
                                </span>
                                <span>
                                    <FaTwitter />
                                </span>
                                <span>
                                    <FaInstagram />
                                </span>
                                <span>
                                    <FaYoutube />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/5 text-gray-200 ">
                    <h1 className="mb-2 text-xl ">Accredian</h1>
                    <ul className="flex flex-col gap-y-[2px] ">
                        <li>About Us</li>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Admission Policy</li>
                        <li>Referral Policy</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Master FAQs</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
