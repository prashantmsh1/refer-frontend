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
        <div className="w-full relative  mt-12 text-white bg-[#282828] py-8">
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
            <div className="w-full mt-12 text-center text-gray-200 ">
                <span>
                    © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
                </span>
            </div>
            <div className="absolute right-8 bottom-12 ">
                <svg
                    width="52"
                    height="51"
                    viewBox="0 0 52 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.977783 25.3303C0.977967 18.749 3.57093 12.4328 8.19501 7.74966C12.8191 3.06656 19.102 0.393716 25.6827 0.310075L25.6577 0.285069L44.2291 0.137207C44.2291 0.137207 50.8025 0.260607 50.8025 7.41616C50.8025 11.9923 50.8677 18.7363 50.915 23.0048C50.9857 23.7709 51.0219 24.5461 51.0237 25.3303C51.0237 28.6164 50.3765 31.8703 49.119 34.9062C47.8614 37.9421 46.0183 40.7006 43.6947 43.0242C41.3711 45.3478 38.6126 47.191 35.5766 48.4485C32.5407 49.7061 29.2868 50.3533 26.0008 50.3533C22.7147 50.3533 19.4608 49.7061 16.4249 48.4485C13.3889 47.191 10.6304 45.3478 8.30684 43.0242C5.98324 40.7006 4.14006 37.9421 2.88254 34.9062C1.62502 31.8703 0.977783 28.6164 0.977783 25.3303Z"
                        fill="#1D65FF"
                    />
                    <path
                        d="M32.5877 32.3403L26.6961 29.8152C26.3885 29.6829 26.0526 29.6296 25.7191 29.6602C25.3857 29.6909 25.0652 29.8046 24.7869 29.9908L21.6367 32.0919C19.7115 31.1555 18.1533 29.6042 17.2084 27.6832L19.3008 24.4857C19.4827 24.208 19.5931 23.8897 19.6221 23.5591C19.6512 23.2284 19.5979 22.8957 19.4671 22.5906L16.9399 16.6925C16.7678 16.2923 16.4707 15.9586 16.0932 15.7413C15.7156 15.5241 15.2778 15.4349 14.8453 15.4873C13.1457 15.7057 11.5838 16.5355 10.4514 17.8215C9.31891 19.1075 8.69339 20.7618 8.69165 22.4754C8.69712 27.2777 10.6073 31.8818 14.0031 35.2775C17.3989 38.6732 22.003 40.5832 26.8053 40.5885C28.5189 40.5868 30.1732 39.9613 31.4592 38.8288C32.7452 37.6963 33.575 36.1344 33.7934 34.4348C33.8457 34.0023 33.7564 33.5645 33.5391 33.187C33.3217 32.8094 32.9879 32.5124 32.5877 32.3403Z"
                        fill="white"
                    />
                    <path
                        d="M39.6736 25.9344C39.5736 25.9344 39.4992 25.9344 39.4313 25.9344C37.7461 25.904 35.458 25.8888 32.6242 25.8888C27.8285 25.8888 22.9864 25.9339 22.9478 25.9344V13.9277C23.0798 13.1884 23.385 12.4907 23.8383 11.8919C24.2829 11.3001 24.8601 10.8207 25.5235 10.4925C26.4672 10.0487 27.5012 9.831 28.5437 9.8565H39.4334C39.4503 9.8565 39.4941 9.8565 39.5643 9.8565C40.3927 9.8565 44.5302 10.1214 44.6232 15.3531C44.7243 21.129 44.6232 22.5647 44.6232 22.5783C44.6519 22.931 44.6099 23.2859 44.4992 23.622C44.3886 23.9581 44.2116 24.2684 43.979 24.5351C43.1723 25.4597 41.7247 25.9344 39.6736 25.9344ZM27.2369 19.4483C27.0126 19.4486 26.7975 19.5375 26.6389 19.6962C26.4803 19.8549 26.3911 20.0701 26.391 20.2945C26.3911 20.5188 26.4803 20.7341 26.6389 20.8928C26.7975 21.0514 27.0126 21.1404 27.2369 21.1407H35.7396C35.9639 21.1404 36.1788 21.0514 36.3374 20.8928C36.4959 20.7341 36.5851 20.5188 36.5853 20.2945C36.5851 20.0701 36.4959 19.8549 36.3374 19.6962C36.1788 19.5375 35.9639 19.4486 35.7396 19.4483H27.2369ZM27.2369 15.3584C27.0126 15.3587 26.7975 15.4482 26.6389 15.6069C26.4803 15.7656 26.3911 15.9803 26.391 16.2046C26.3911 16.429 26.4803 16.6443 26.6389 16.8029C26.7975 16.9616 27.0126 17.0511 27.2369 17.0514H40.3733C40.5977 17.0512 40.8129 16.9616 40.9716 16.8029C41.1303 16.6442 41.2194 16.4291 41.2195 16.2046C41.2194 15.9802 41.1303 15.7651 40.9716 15.6064C40.8129 15.4477 40.5977 15.3586 40.3733 15.3584H27.2369Z"
                        fill="white"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Footer;
