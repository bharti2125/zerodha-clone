import React from "react";

function Support() {
  return (
    <div className="support">
      <div className="suppot-portal">
        <div className="sup-inline">
          <h4>Support Portal</h4>
          <a href="#" id="track-ticket">
            Track tickets
          </a>
        </div>
        <div className="support-container">
          <div className="support-col-1">
            <h3>
              Search for an answer or browse help topics to create a ticket
            </h3>
            <div class="search-container">
              <input
                type="text"
                className="input-area"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected...."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 14 14"
                color="black"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
            <br />
            <br />
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <br />
            <a href="#">Kite user manual</a>
          </div>
          <div className="support-col-2">
            <h5>Featured</h5>

            <a>1. Current Takeovers and Delisting - June 2024</a>
            <br />
            <a>2. Latest Intraday leverages and Square-off timings</a>
          </div>
        </div>
      </div>
      <div>
        <h3 className="relevant-topic">
          To create a ticket, select a relevant topic
        </h3>
      </div>

      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <h5>
            <a className="support-heading-link mb-0 fs-4 " href="#">
              <i className="category-icon icon-funds">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="23"
                  fill="currentColor"
                  class="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
              </i>
              Account Opening
            </a>
          </h5>
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
        <div className="feature col">
          <h5>
            <a className="support-heading-link mb-0 fs-4 " href="#">
              <i className="category-icon icon-funds">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="23"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 14 14"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>{" "}
              </i>
              Your Zerodha Account
            </a>
          </h5>
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
        <div className="feature col">
          <h5>
            <a className="support-heading-link mb-0 fs-4 " href="#">
              <i className="category-icon icon-funds"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="23"
                fill="currentColor"
                class="bi bi-bar-chart"
                viewBox="0 0 14 14"
              >
                <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
              </svg>
              Trading and Markets
            </a>
          </h5>
          <ul className="support-link">
            <li>
              <a href="#">Trading FAQs</a>
            </li>
            <li>
              <a href="#">Kite</a>
            </li>
            <li>
              <a href="#">Margins</a>
            </li>
            <li>
              <a href="#">Product and order types</a>
            </li>
            <li>
              <a href="#">Corporate actions</a>
            </li>
            <li>
              <a href="#">Kite features</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <h5>
            <a className="support-heading-link mb-0 fs-4 " href="#">
              <i className="category-icon icon-funds">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="23"
                  fill="currentColor"
                  class="bi bi-wallet"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1" />
                </svg>
              </i>
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
        <div className="feature col">
          <h5>
            <a className="support-heading-link mb-0 fs-4 " href="#">
              <i className="category-icon icon-funds">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="23"
                  fill="currentColor"
                  class="bi bi-at"
                  viewBox="0 0 14 14"
                >
                  <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914" />
                </svg>
              </i>
              Console
            </a>
          </h5>
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
        <div className="feature col">
          <h5>
            <a className="support-heading-link mb-0 fs-4 " href="#">
              <i className="category-icon icon-funds">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="23"
                  fill="currentColor"
                  class="bi bi-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                </svg>
              </i>
              Coin
            </a>
          </h5>
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
        </div>
      </div>
    </div>
  );
}
export default Support;
