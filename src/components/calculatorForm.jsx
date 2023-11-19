import React, { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { AiFillCaretDown, AiFillCheckCircle } from "react-icons/ai";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import { AiFillAlipaySquare } from "react-icons/ai";
import "../App.css";
const INCOME_RANGES = [
  {
    id: 1,
    range: "$0 - $18,200",
    taxRate: "0%",
    TaxPercentage: 0,
  },
  {
    id: 2,
    range: "$18,201 - $45,000",
    taxRate: "Nil + 19% of excess over $18,200",
    TaxPercentage: 0.19,
  },
  {
    id: 3,
    range: "$45,001 - $120,000",
    taxRate: "$5,092 + 32.5% of excess over $45,000",
    TaxPercentage: 0.325,
  },
  {
    id: 4,
    range: "$120,001 - $180,000",
    taxRate: "$29,467 + 37% of excess over $120,000",
    TaxPercentage: 0.37,
  },
  {
    id: 5,
    range: "$180,001+",
    taxRate: "$51,667 + 45% of excess over $180,000",
    TaxPercentage: 0.45,
  },
];

const CalculatorForm = () => {
  // const [selected, setSelected] = useState("");
  const [isLongTerm, setIsLongTerm] = useState(false);
  const [isShortTerm, setIsShortTerm] = useState(true);
  const [taxValue, setTaxValue] = useState("0%");
  const [showlongTerm, setShowlongTerm] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("AU");
  const [isPurchaseValue, setIsPurchaseValue] = useState("");
  const [isSaleprice, setIsSalePrice] = useState("");
  const [isExpensePrice, setIsExpensePrice] = useState("");
  const [isNetCapitalGains, setIsNetCapitalGains] = useState("0");
  const [isCapitalGains, setIsCapitalGains] = useState("");
  const [istaxpayable, setIstaxPayable] = useState(0);
  const [istaxPercentage, setTaxPercentage] = useState(0);
  const [isDiscount, setIsDiscount] = useState("");

  // Function to handle tax rate and tax value change

  const handleTaxRateChange = (e) => {
    const selectedRange = e.target.value;
    const TaxRange = INCOME_RANGES.find(
      (range) => selectedRange === range.range
    );
    setTaxValue(TaxRange.taxRate);
    setTaxPercentage(TaxRange.TaxPercentage);
  };

  // Function to handle short/long-term investment button click

  const handleClickButton = (e) => {
    setIsLongTerm(e);
    setIsShortTerm(!e);
    setShowlongTerm(e);
  };

  //Function to handle purchase value

  const handlePurchaseChange = (e) => {
    setIsPurchaseValue(e.target.value);
  };

  //function to handle sale value

  const handleSalePriceChange = (e) => {
    setIsSalePrice(e.target.value);
  };

  //Function to handle Expense value

  const handleExpensePrice = (e) => {
    setIsExpensePrice(e.target.value);
  };

  useEffect(() => {
    if (isPurchaseValue !== "" && isSaleprice !== "" && isExpensePrice !== "") {
      const capitalgains = isSaleprice - isPurchaseValue - isExpensePrice;
        if (isShortTerm) {
          setIsNetCapitalGains(capitalgains);
          setIstaxPayable(capitalgains * istaxPercentage);
        } else if (isLongTerm) {
          setIsCapitalGains(capitalgains);
          if(capitalgains>=0){
          setIsDiscount(0.5 * capitalgains);
          }
          setIsNetCapitalGains(capitalgains - isDiscount);
          setIstaxPayable(isDiscount * istaxPercentage);
        }
      
    }
  }, [
    isShortTerm,
    isSaleprice,
    isPurchaseValue,
    isExpensePrice,
    istaxPercentage,
    isNetCapitalGains,
    isLongTerm,
    isCapitalGains,
    isDiscount,
  ]);

  useEffect(() => {
    console.log("Selected Country:", selectedCountry);
  }, [selectedCountry]);

  return (
    <div>
      <div className="bg-white  text-[#0e1529] rounded-xl md:px-10 lg:px-20 py-4 md:py-10 lg:py-16 px-4">
        <div className="">
          <div className=" main-heading sm:text-[24px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0e1529] md:text-[36px] text-center">
            <h3 className="">Free Crypto Tax Calculator Australia</h3>
          </div>
          <div className="firstrow flex space-x-5 mt-8 justify-between items-center">
            {/* Financial Year */}
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center w-full lg:w-1/2 financial-year">
              <div className="flex items-center text-sm lg:w-1/2 w-full mb-2 lg:mb-0">
                <h4 className="font-normal text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
                  Financial Year
                </h4>
              </div>
              <div className=" w-full mx-0 lg:mx-2 bg-[#EFF2F5]">
                <TextField select label="FY" className="w-full">
                  <MenuItem key="coutry" value="year">
                    FY 2023-2024
                  </MenuItem>
                </TextField>
              </div>
            </div>

            {/* Country */}
            <div className="country flex flex-col lg:flex-row justify-center lg:items-center w-full lg:w-1/2 lg:ml-5 md:mt-0">
              <div className="flex items-center text-md lg:w-1/4 mb-2 lg:mb-0">
                <h4 className="justify-center font-normal text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
                  Country
                </h4>
              </div>
              <div className=" australia w-full lg:w-full lg:ml-0 lg:pl-5">
                <ReactFlagsSelect
                  className="menu-flags w-full "
                  defaultCountry="AU"
                  selected={selectedCountry}
                  onSelect={(code) => setSelectedCountry(code)}
                  searchable
                  searchPlaceholder="Search countries"
                />
              </div>
            </div>
          </div>

          <div className="h-[2px] bg-[#dee1e6] my-5"></div>

          {/*second Row*/}

          <div className="secondrow w-full md:flex justify-between">
            <div className="flex flex-col text-sm sm:w-full md:w-1/2 mr-4 font-normal text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
              <label>Enter purchase price of Crypto</label>
              <FormControl sx={{ my: 1, backgroundColor: "#EFF2F5" }}>
                <OutlinedInput
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label=""
                  placeholder="30,000"
                  onChange={handlePurchaseChange}
                />
              </FormControl>
            </div>
            <div className="flex flex-col text-sm sm:w-full md:w-1/2 font-normal text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
              <label>Enter sale price of Crypto</label>
              <FormControl sx={{ my: 1, backgroundColor: "#EFF2F5" }}>
                <OutlinedInput
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label=""
                  placeholder="20,000"
                  onChange={handleSalePriceChange}
                />
              </FormControl>
            </div>
          </div>

          {/*thirdrow*/}
          <div className="thirdrow w-full md:flex justify-between mt-5 font-normal  text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
            <div className="flex flex-col sm:w-full md:w-1/2 text-sm w-1/2 mr-4 ">
              <label>Enter your Expenses</label>
              <FormControl sx={{ my: 1, backgroundColor: "#EFF2F5" }}>
                <OutlinedInput
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label=""
                  placeholder="5,000"
                  onChange={handleExpensePrice}
                />
              </FormControl>
            </div>
            <div className="flex  sm:w-full md:w-1/2 flex-col text-sm">
              <label className="font-normal text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
                Investment Type
              </label>

              <div className="flex md:flex w-full gap-2 mt-1">
                <div className="w-1/2">
                  <button
                    type="button"
                    id="shortTerm"
                    onClick={() => {
                      handleClickButton(false);
                    }}
                    className={`flex items-center justify-center gap-2  w-full  text-sm  mr-2 sm:mr-4 py-4 sm:px-4 rounded leading-tight  border-2 ${
                      isShortTerm
                        ? "text-blue-700 border-blue-600 focus:border-blue-600 font-bold py-3 bg-[#0052FE0F]"
                        : "border-gray-700 focus:border-gray-500 text-gray-700 "
                    }`}
                  >
                    Short Term
                    {isShortTerm && <CheckIcon />}
                  </button>
                  <p className={`mx-2 text-xs ${isShortTerm ? "" : ""}`}>
                    &#60;12 Months
                  </p>
                </div>
                <div className="w-1/2">
                  <button
                    type="button"
                    id="longTerm"
                    onClick={() => {
                      handleClickButton(true);
                    }}
                    className={`flex items-center justify-center gap-2 
                                   w-full text-sm  mr-2 sm:mr-4 py-4 sm:px-4 rounded leading-tight border-2 ${
                                     isLongTerm
                                       ? "text-blue-700 font-bold border-blue-600 focus:border-blue-600 py-3 bg-[#0052FE0F]"
                                       : "border-gray-700 focus:border-gray-500 text-gray-700"
                                   }`}
                  >
                    Long Term
                    {isLongTerm && <CheckIcon />}
                  </button>
                  <p className={`mx-2 text-xs ${isLongTerm ? "" : ""}`}>
                    &#62;12 Months
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*fourthrow*/}
          <div className="fourthrow w-full md:flex mt-5 font-normal text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
            <div className="sm:w-full md:w-1/2 mr-4">
              <div className="text-sm w-full font-normal text-[15px] tracking-[0] leading-[24px] whitespace-nowrap ">
                <label>Select Your Annual Income</label>
              </div>
              <div className="sm:w-full md:w-full">
                <select
                  onChange={handleTaxRateChange}
                  className="h-14 w-full rounded-md px-3"
                >
                  {INCOME_RANGES.map((item) => (
                    <option className="sm:w-full md:w-1/2">{item.range}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:w-full md:w-1/2 p-2 ">
              <p className="text-sm font-normal text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
                Tax Rate
              </p>
              <p className="text-sm mt-2">{taxValue}</p>
            </div>
          </div>

          {/*fifthrow*/}

          {showlongTerm && (
            <div className="fifthrow md:flex justify-between mt-5 w-full">
              <div className="flex flex-col text-sm md:w-1/2 sm:w-full mr-4 font-normal text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
                <label className="">Capital gains amount</label>
                <FormControl sx={{ my: 1, backgroundColor: "#EFF2F5" }}>
                  <OutlinedInput
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label=""
                    placeholder="5,000"
                    readOnly
                    value={isCapitalGains}
                  />
                </FormControl>
              </div>
              <div className="flex flex-col text-sm md:w-1/2 sm:w-full font-normal text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
                <label>Discount for long term gains</label>
                <FormControl sx={{ my: 1, backgroundColor: "#EFF2F5" }}>
                  <OutlinedInput
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label=""
                    placeholder="2,500"
                    readOnly
                    value={isDiscount}
                  />
                </FormControl>
              </div>
            </div>
          )}

          {/*sixthrow*/}

          <div className="sixthrow md:flex justify-between mt-7 w-full">
            <div className=" bg-[#EBF9F4] p-8 flex flex-col items-center md:w-1/2 sm:w-full rounded-lg mr-4 sm:mb-6 md:mb-0 font-normal text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
              <p className="text-sm ">Net Capital Gains tax amount</p>

              <h5 className="text-[#0FBA83] font-bold text-[24px] mt-2">
                &#36;{isNetCapitalGains}
              </h5>
            </div>
            <div className=" bg-[#EBF9F4] p-8 flex flex-col items-center md:w-1/2 sm:w-full rounded-lg md:ml-4 font-normal text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
              <p className="text-sm ">The tax you need to pay*</p>

              <h5 className="text-[#0141CF] font-bold text-[24px] mt-2">
                &#36;{istaxpayable}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalculatorForm;
