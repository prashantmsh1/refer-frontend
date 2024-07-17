import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Table from "./Table";
import Form from "./Form";
import Faq from "./Faq";

const Home = () => {
    return (
        <div className="relative ">
            <Navbar />
            <Form />
            <Hero />

            <Table />
            <Faq />
        </div>
    );
};

export default Home;
