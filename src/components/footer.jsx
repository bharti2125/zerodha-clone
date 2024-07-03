import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
     <>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <a
            href="/"
            className="f-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          >
            <img
              src="https://zerodha.com/static/images/logo.svg"
              width="150"
              height="20"
              alt="Zerodha Logo"
            />
          </a>

          <p className="text-body-secondary">
            © 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
          </p>
          <div className="social-icon">
            <ul className="social">
              <li>
                <a target="_blank" href="https://twitter.com/zerodhaonline">
                  <img
                    src="https://zerodha.com/static/images/x-twitter.svg"
                    height="18px"
                    width="18px"
                    alt="X Twitter"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://facebook.com/zerodha.social">
                  <i className="icon-facebook-official"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://instagram.com/zerodhaonline/">
                  <i className="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://linkedin.com/company/zerodha">
                  <i className="icon-linkedin"></i>
                </a>
              </li>
            </ul>
            <hr />
            <ul className="social">
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@zerodhaonline"
                >
                  <img
                    className="youtube-logo"
                    src="https://zerodha.com/static/images/youtube.svg"
                    height="26px"
                    width="26px"
                    alt="Youtube"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g"
                >
                  <img
                    className="whatsapp-logo"
                    src="	https://zerodha.com/static/images/whatsapp-logo.svg"
                    alt="Whatsapp"
                    height="18px"
                    width="18px"
                  />
                </a>
              </li>

              <li>
                <a target="_blank" href="https://t.me/zerodhain">
                  <i className="icon-telegram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col mb-3">
          <h5>Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                About
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                Products
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                Referral programme
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                Careers
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                Zerodha.tech
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                Press & media
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                Zerodha Cares (CSR)
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Support</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                Contact us
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                Support portal
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                Z-Connect blog
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                List of charges
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                Downloads & resources
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                Videos
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                Market overview
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                How to file a complaint?
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                Status of your complaints
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Account</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                Open an account
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="navbar-link p-0 text-body-secondary">
                Fund transfer
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="footer-paragraph">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &amp;​ MCX – SEBI
          Registration no.: INZ000031633 CDSL/NSDL: Depository services through
          Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
          Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 –
          SEBI Registration no.: INZ000038238 Registered Address: Zerodha
          Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
          Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
          India. For any complaints pertaining to securities broking please
          write to{" "}
          <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>,
          for DP related to <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>.
          Please ensure you carefully read the Risk Disclosure Document as
          prescribed by SEBI | ICF
        </p>
        <p>
          Procedure to file a complaint on{" "}
          <a href="https://scores.sebi.gov.in/" target="_blank">
            SEBI SCORES
          </a>
          : Register on SCORES portal. Mandatory details for filing complaints
          on SCORES: Name, PAN, Address, Mobile Number,E-mail ID.Benefits:
          Effective Communication, Speedy redressal of the grievances
        </p>
        <p>
          <a href="https://smartodr.in/" target="_blank">
            Smart Online Dispute Resolution
          </a>
        </p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please{" "}
          <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/articles/how-do-i-place-a-complaint-at-zerodha">
            create a ticket here
          </a>
          .
        </p>
        <div className="footer-graveyard-links text-center">
          <a className="footer-link" href="https://nseindia.com">
            NSE
          </a>
          <a className="footer-link" href="https://www.bseindia.com/">
            BSE
          </a>
          <a className="footer-link" href="https://www.mcxindia.com/">
            MCX
          </a>
          <a
            className="footer-link"
            href="https://zerodha.com/terms-and-conditions/"
          >
            Terms &amp; conditions
          </a>
          <a
            className="footer-link"
            href="https://zerodha.com/policies-and-procedures/"
          >
            Policies &amp; procedures
          </a>
          <a className="footer-link" href="https://zerodha.com/privacy-policy/">
            Privacy policy
          </a>
          <a className="footer-link" href="https://zerodha.com/disclosure/">
            Disclosure
          </a>
          <a
            className="footer-link"
            href="https://zerodha.com/investor-attention/"
          >
            For investor's attention
          </a>
          <a
            className="footer-link"
            href="https://zerodha.com/tos/investor-charter/"
          >
            Investor charter
          </a>
        </div>
      </div>
    </> 
  );
}

export default Footer;
