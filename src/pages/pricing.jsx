import React from "react";

function Pricing() {
  return (
    <div className="pricing">
      <div className="position-relative p-5 text-center">
        <h1 className="text-body-emphasis">Pricing</h1>
        <p className="col-lg-6 mx-auto mb-4">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
        <br />
        <br />
        <br /> 
        <hr className="featurette-divider "></hr>
      </div>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <img src="https://zerodha.com/static/images/pricing-eq.svg" className="pricing-img-icon" width="10em" height="15em" />
        </div>
        <h3 className="fs-2 text-body-emphasis">Free equity delivery</h3>
        <p>All equity delivery investment (NSE, BSE), are absolutely free  — ₹ 0 brokerage.</p>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <img src="	https://zerodha.com/static/images/other-trades.svg" className="pricing-img-icon" width="10em" height="15em" />
        </div>
        <h3 className="fs-2 text-body-emphasis">Intraday and F&O trades</h3>
        <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <img src="https://zerodha.com/static/images/pricing-eq.svg" className="pricing-img-icon" width="10em" height="15em" />
        </div>
        <h3 className="fs-2 text-body-emphasis">Free direct MF</h3>
        <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
      </div>
      </div>
      <div className="position-relative p-5 text-center">
        <h1 className="text-body-emphasis">Open a Zerodha account</h1>
        <p className="col-lg-6 mx-auto mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button className="btn btn-primary px-5 mb-5" type="button">
          Sign up now
        </button>
      </div>

      <a href="#" className="link-pricing">Brokerage calculator</a>
      <a href="#" className="link-pricing" id="link-price">List of charges</a>

      <ul className="text-para">
        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
        <li>Digital contract notes will be sent via e-mail.</li>
        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
      </ul>
      <br />
    </div>
  );
}

export default Pricing;
