import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
 
  // useEffect
 const [mobileNumber, setMobileNumber] = useState("+91");

 const handleFocus = (e) => {
  if (e.target.selectionStart < 3) {
    e.target.setSelectionRange(3,13);
  }
 }

 const handleInput = (e) => {
  let value = e.target.value;
  if (value.length > 13) {
    value = value.substring(0, 13);
  } 
  setMobileNumber(value);
  // console.log(value);
 };

//  const handleKeyDown = (e) => {
//   console.log(e.target.selectionStart);
//   if (e.target.selectionStart < 3) {
//     e.preventDefault();
//     e.target.setSelectionRange(3, 3);
//  }
// };
  return (
    <div className="signup">
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <img
              src="https://signup.zerodha.com/img/landing.46a77378.png"
              alt="Landing-mobile"
              height="400"
              width="500"
            />
          </div>
          {/* {
            isSignup?"<></>":
          } */}
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 ">
              <div className="form-floating mb-3">
                <h1 classname="signup">Signup now</h1>
                <p className="lead">Or track your existing application.</p>
                <div className="input-container">
                 <input
                  className="input-num" 
                  placeholder="+919999999999"
                  id="mobile-number"
                  type="text"
                  value={mobileNumber}
                  onFocus={handleFocus}
                  onInput={handleInput}
                  // onKeyDown={handleKeyDown}
                  maxLength={13}
                  style={{ paddingLeft: "35px" }}
                  />
                  <label for="mobile-number">Mobile Number</label>
                </div>
                 
                <p ClassName="footer-paragraph">
                  You will receive an OTP on your number
                </p>
                <button className="btn btn-primary px-5 mb-5" type="button">
                  Continue
                </button>
                <br />

                <a
                  className="NRI-link"
                  href="https://zerodha.com/open-account/nri"
                >
                Want to open an NRI account?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <p className="footer-paragraph text-grey text-center">
          {" "}
          I authorise Zerodha to contact me even if my number is registered on
          DND. I authorise Zerodha to fetch my KYC information from the C-KYC
          registry with my PAN.
          <br /> Please visit{" "}
          <a
            target="_blank"
            aria-label="Kyc information Link"
            href="https://support.zerodha.com/category/console/reports/other-queries/articles/details-collected-when-opening-an-account"
          >
            {" "}
            this article{" "}
          </a>{" "}
          to know more.
          <br />
          <br />
          If you are looking to open a HUF, Corporate, Partnership, or NRI
          account, you have to use the{" "}
          <a
            target="_blank"
            href="https://zerodha.com/resources"
            aria-label="Offline Forms Link"
          >
            offline forms.
          </a>{" "}
          For help,{" "}
          <a
            target="_blank"
            href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening?language=english"
            aria-label="Help Link"
          >
            click here.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
