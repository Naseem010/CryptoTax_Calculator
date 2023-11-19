import React from "react";
import Navbar from "./components/navbar";
import CalculatorForm from "./components/calculatorForm";
import GetStarted from "./components/GetStarted";
import FAQ from "./components/FAQ";
import Subscription from "./components/subscription";
import Footer from "./components/footer";
import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="lg:flex ">
        <div className="lg:mx-14 lg:my-7 lg:w-8/12 sm:mx-[15px] sm:mt-[20px] sm:mb-[48px]">
          <CalculatorForm />
        </div>
        <div className=" lg:w-4/12 lg:my-7"> 
          <GetStarted />
        </div>
      </div>
      <div className="py-5 px-10 lg:w-8/12">
        <FAQ />
      </div>
      <div className="">
        <Subscription />
      </div>
      <div >
        <Footer />
      </div>
    </div>
  );
}
