import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqData } from "../Data/faqData";

const FAQ = () => {
  return (
    <div className=" ">
      <div className=" text-left  border-[1px] border-[#DEE1E6]  bg-white rounded-[1rem] p-[1rem] sm:px-[2rem]">
        <h3 className="text-left font-bold py-2 text-xl md:text-2xl  ">
          Frequently Asked Questions
        </h3>

        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => (
            <Accordion key={index} sx={{ borderRadius: "10px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <Typography style={{ fontSize: "18px", fontWeight: "700" }}>
                  {index + 1}. {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#3E424A",
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
