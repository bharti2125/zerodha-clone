import React from "react";

function Support() {
  return (
    <div className="support">
      <div className="suppot-portal">
        <h1>Support Portal</h1>
        <a href="#">Track tickets</a>
        <h1>Search for an answer or browse help topics to create a ticket</h1>
        <input
          type="text"
          placeholder="Eg: how do i activate F&O, why is my order getting rejecte"
        />
        <div>
          <a href="#">Track account opening</a>
          <a href="#">Track segment activation</a>
          <a href="#">Intraday margins</a>
          <a href="#">Kite user manual</a>
        </div>
        <div>
          <h1>Featured</h1>
          <p>
            Since it’s a settlement holiday, your account balance will not
            include the following credits on May 23, 2024:
          </p>
          <ul>
            <li>
              Intraday profits made in the Equity segment on May 22, 2024.
            </li>
            <li>
              Credits from trades made in NFO, Currency, and Commodity
              derivatives on May 22, 2024. This will include options premium
              credits, futures M2M profits, etc.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="relevant-topic">
          To create a ticket, select a relevant topic
        </h3>
        {/* <div class="col d-flex align-items-start">
        <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#bootstrap"></use></svg>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div> */}
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 py-5">
        <div className="col d-flex align-items-start text-body-secondary flex-shrink-0 me-3">
          <a className="account-link mb-0 fs-4 text-body-emphasis" href="#">
            <i class="bi bi-plus-circle"></i>
            Account Opening
          </a>
          <ul className="support-link">
            <li>
              <a href="#">Getting started</a>
            </li>
            <li>
              <a href="#">Online</a>
            </li>
            <li>
              <a href="#">Offline</a>
            </li>
            <li>
              <a href="#">Charges</a>
            </li>
            <li>
              <a href="#">Company,Partnership and HUF</a>
            </li>
            <li>
              <a href="#">Non Resident Indian (NRI)</a>
            </li>
          </ul>
        </div>
        <div className="col d-flex align-items-start">
          <a className="account-link mb-0 fs-4 text-body-emphasis" href="#">
            Your Zerodha Account
          </a>
          <ul className="support-link">
            <li>
              <a href="#">Login credential</a>
            </li>
            <li>
              <a href="#">Your Profile</a>
            </li>
            <li>
              <a href="#">Account modification and segment addition</a>
            </li>
            <li>
              <a href="#">CMR & DP ID</a>
            </li>
            <li>
              <a href="#">Nomination</a>
            </li>
            <li>
              <a href="#">Transfer and conversion of shares</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="col d-flex align-items-start">
          <a className="account-link mb-0 fs-4 text-body-emphasis" href="#">
            Trading and Markets
          </a>
          <ul className="support-link">
            <li>
              <a href="#">Trading FAQs</a>
            </li>
            <li>
              <a href="#">Kite</a>
            </li>
            <li>
              <a href="#">Mrgins</a>
            </li>
            <li>
              <a href="#">Products and order types</a>
            </li>
            <li>
              <a href="#">Corporate actions</a>
            </li>
            <li>
              <a href="#">Kite featurs</a>
            </li>
          </ul>
        </div>
        <div className="col d-flex align-items-start">
          <a className="account-link mb-0 fs-4 text-body-emphasis" href="#">
            Funds
          </a>
          <ul className="support-link">
            <li>
              <a href="#">Fund withdrawal</a>
            </li>
            <li>
              <a href="#">Adding funds</a>
            </li>
            <li>
              <a href="#">Adding bank accounts</a>
            </li>
            <li>
              <a href="#">eMandates</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <a className="account-link mb-0 fs-4 text-body-emphasis" href="#">
          Console
        </a>
        <ul className="support-link">
          <li>
            <a href="#">IPO</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Funds statement</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Reports</a>
          </li>
          <li>
            <a href="#">Referral program</a>
          </li>
        </ul>
      </div>
      <div className="col d-flex align-items-start">
        <a className="account-link mb-0 fs-4 text-body-emphasis" href="#">Coin</a>
        <ul className="support-link">
          <li>
            <a href="#">Understanding mutual funds and Coin</a>
          </li>
          <li>
            <a href="#">Coin app</a>
          </li>
          <li>
            <a href="#">Coin web</a>
          </li>
          <li>
            <a href="#">Transactions and reports</a>
          </li>
          <li>
            <a href="#">National Pension Scheme (NPS)</a>
          </li>
        </ul>
      </div> */}
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
         <h5>
          <a className="account-link mb-0 fs-4 
          text-body-emphasis" 
          href="#"><i className="category-icon icon-funds"></i>
            Funds
          </a>
          </h5>
          <ul className="support-link">
            <li>
              <a href="#">Fund withdrawal</a>
            </li>
            <li>
              <a href="#">Adding funds</a>
            </li>
            <li>
              <a href="#">Adding bank accounts</a>
            </li>
            <li>
              <a href="#">eMandates</a>
            </li>
          </ul>
        </div>
        <div class="feature col">
          <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            {/* <svg class="bi" width="1em" height="1em">
            <use xlink:href="#people-circle"></use></svg> */}
          </div>
          <h3 class="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" class="icon-link">
            Call to action
            {/* <svg class="bi"><use xlink:href="#chevron-right"></use></svg> */}
          </a>
        </div>
        <div class="feature col">
          <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg> */}
          </div>
          <h3 class="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" class="icon-link">
            Call to action
            {/* <svg class="bi"><use xlink:href="#chevron-right"></use></svg> */}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Support;
