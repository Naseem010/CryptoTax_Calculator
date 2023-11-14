import React, { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";

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
  const [isNetCapitalGains, setIsNetCapitalGains] = useState("");
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
      if (capitalgains >= 0) {
        if (isShortTerm) {
          setIsNetCapitalGains(capitalgains);
          setIstaxPayable(capitalgains * istaxPercentage);
        } else if (isLongTerm) {
          setIsCapitalGains(capitalgains);
          setIsDiscount(0.5 * capitalgains);
          setIsNetCapitalGains(capitalgains - isDiscount);
          setIstaxPayable(capitalgains * istaxPercentage);
        }
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
      <div className="bg-white  rounded-xl md:px-10 lg:px-20 py-5 md:py-10 lg:py-16 px-7">
        <div className=" text-[#0F1629]">
          <div className=" main-heading text-center text-3xl font-black tracking-tighter">
            <h3>Free Crypto Tax Calculator Australia</h3>
          </div>
          <div className="firstrow flex space-x-5 mt-8 justify-between items-center">
            {/* Financial Year */}
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center w-full lg:w-1/2 financial-year">
              <div className="flex items-center text-sm w-1/2 mb-2 lg:mb-0">
                <h4>Financial Year</h4>
              </div>
              <div className=" w-full mx-0 lg:mx-2">
                <TextField
                  select
                  label="FY"
                  // sx={{ backgroundColor: "#EFF2F5", width: "100%" }}
                  className="w-full"
                >
                  <MenuItem key="coutry" value="year">
                    FY 2023-2024
                  </MenuItem>
                </TextField>
              </div>
            </div>

            {/* Country */}
            <div className="country flex flex-col lg:flex-row justify-center lg:items-center w-full lg:w-1/2 lg:ml-5 mt-5 lg:mt-0">
              <div className="flex items-center text-sm lg:w-1/4 mb-2 lg:mb-0">
                <h4 className="justify-center">Country</h4>
              </div>
              <div className="w-full lg:w-full h-14 pb-0 lg:ml-0 lg:pl-5">
                <ReactFlagsSelect
                  className="menu-flags bg-[#EFF2F5] w-full"
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
            <div className="flex flex-col text-sm sm:w-full md:w-1/2 mr-4">
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
            <div className="flex flex-col text-sm sm:w-full md:w-1/2">
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
          <div className="thirdrow w-full md:flex justify-between mt-5">
            <div className="flex flex-col sm:w-full md:w-1/2 text-sm w-1/2 mr-4">
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
              <label>Investment Type</label>
              <Stack spacing={2} direction="row" className="mt-2 ">
                <div className="w-1/2">
                  <Button
                    type="button"
                    onClick={() => handleClickButton(false)}
                    variant="outlined"
                    className={`w-full h-14 text-xs ${
                      isShortTerm
                        ? "text-blue-700 border-blue-600 focus:border-blue-600 font-bold"
                        : "border-gray-700 focus:border-gray-500 text-gray-700 "
                    }`}
                  >
                    Short Term {isShortTerm && <CheckIcon size={22} />}
                  </Button>
                  <p className="text-xs"> &#60;12 Months</p>
                </div>
                <div className="w-1/2">
                  <Button
                    type="button"
                    onClick={() => handleClickButton(true)}
                    variant="outlined"
                    className={`w-full h-14 text-xs ${
                      isShortTerm
                        ? "text-blue-700 border-blue-600 focus:border-blue-600 font-bold"
                        : "border-gray-700 focus:border-gray-500 text-gray-700 "
                    }`}
                  >
                    Long Term {isLongTerm && <CheckIcon size={22} />}
                  </Button>
                  <p className="text-xs"> &#62;12 Months</p>
                </div>
              </Stack>
            </div>
          </div>

          {/*fourthrow*/}
          <div className="fourthrow w-full md:flex mt-5">
            <div className="sm:w-full md:w-1/2 mr-4">
              <div className="text-sm w-full">
                <label>Select Your Annual Income</label>
              </div>
              <div className="sm:w-full md:w-full">
                <select
                  onChange={handleTaxRateChange}
                  className="h-14 w-full rounded-md p-3"
                >
                  {INCOME_RANGES.map((item) => (
                    <option className="sm:w-full md:w-1/2">{item.range}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:w-full md:w-1/2 p-2 ">
              <p className="text-xs mt-5">Tax Rate</p>
              <p className="text-xs mt-1">{taxValue}</p>
            </div>
          </div>

          {/*fifthrow*/}

          {showlongTerm && (
            <div className="fifthrow md:flex justify-between mt-5 w-full">
              <div className="flex flex-col text-sm md:w-1/2 sm:w-full mr-4">
                <label>Capital gains amount</label>
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
              <div className="flex flex-col text-sm md:w-1/2 sm:w-full">
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
            <div className=" bg-[#d4faed] p-8 flex flex-col items-center md:w-1/2 sm:w-full rounded-lg mr-4 sm:mb-6 md:mb-0">
              <p className="text-sm ">Net Capital Gains tax amount</p>

              <h5 className="text-[#0FBA83]">&#36;{isNetCapitalGains}</h5>
            </div>
            <div className=" bg-[#d4faed] p-8 flex flex-col items-center md:w-1/2 sm:w-full rounded-lg md:ml-4 ">
              <p className="text-sm ">The tax you need to pay*</p>

              <h5 className="text-[#0141CF]">&#36;{istaxpayable}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalculatorForm;
