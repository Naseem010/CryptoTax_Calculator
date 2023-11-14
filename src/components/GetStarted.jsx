import React from "react";
import img from "../assets/3D.png";
import { BsArrowRight } from "react-icons/bs";
const GetStarted = () => {
  return (
    <div className="mt-5 mx-10 lg:ml-0">
      <div className="get-started">
        <h3 className="get-started-title">Get Started with KoinX for FREE</h3>
        <h5 className="get-started-subtitle">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </h5>
        <img
          alt="get-started"
          loading="lazy"
          width="180"
          height="167"
          decoding="async"
          data-nimg="1"
          className="get-started-img"
          style={{ color: "transparent" }}
          src={img}
        />

        <button
          className="get-started-btn  block "
          style={{
            background: "white",
            color: "black",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        >
          <p className="flex items-center font-semibold  gap-2">
            Get Started for FREE{" "}
            <span className=" font-bold ">
              <BsArrowRight size={20} className=" font-bold" />
            </span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
