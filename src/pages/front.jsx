import React from "react";

function Front() {
  return (
    <div className="front-text">
      <div className="position-relative p-5 text-center">
        <img
          src="https://zerodha.com/static/images/landing.png"
          height="230"
          width="500"
          alt="front-img"
        />
        <h1 className="text-body-emphasis">Invest in everything</h1>
        <p className="col-lg-6 mx-auto mb-4">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button className="btn btn-primary px-5 mb-5" type="button">
          Sign up now
        </button>
      </div>

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            Largest stock broker in India
          </h2>
          <p className="lead">
            1.3+ Crore Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <ul className="featurette-point">
            <li>Futures and Options</li>
            <li>Commodity derivatives</li>
            <li>Currency derivatives</li>
            <li>Stocks & IPOs</li>
            <li>Direct mutual funds</li>
            <li>Bonds and Govt. Securities</li>
          </ul>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src="https://zerodha.com/static/images/largest-broker.svg"
            height="430"
            width="400"
            alt="Largest-Broker"
          />
        </div>
      </div>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://zerodha.com/static/images/ecosystem.png"
            height="600"
            width="600"
            alt="EcoSysytem image"
          />
          <div className="link-container">
            <a href="#" className="link">
              Explore our products →
              <svg>
                <i className="bi bi-arrow-right"></i>
              </svg>
            </a>
            <a href="#" className="link">
              Try Kite demo →
              <svg>
                <i className="bi bi-arrow-right"></i>
              </svg>
            </a>
          </div>
        </div>

        <div className="col-lg-6">
          <h1>Trust with confidence</h1>
          <br />
          <h3>Customer-first always</h3>
          <p className="lead">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <br />
          <h3>No spam or gimmicks</h3>
          <p className="lead">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <br />
          <h3>The Zerodha universe</h3>
          <p className="lead">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <br />
          <h3>Do better with money</h3>
          <p className="lead">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
      </div>

      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-6 text-center px-0">
              <div className="pricing-box">
                <h1>₹0</h1>
                <p className="lead">
                  Free equity delivery and direct mutual funds
                </p>
              </div>
            </div>
            <div className="col-6 text-center px-0">
              <div className="pricing-box">
                <h1>₹20</h1>
                <p className="lead">Intraday and F&amp;O</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Unbeatable pricing
          </h1>
          <p className="lead">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="link">
            See pricing →
            <svg>
              <i className="bi bi-arrow-right"></i>
            </svg>
          </a>
        </div>
      </div>

      <div className="row featurette">
        <div className="col-md-5 order-md-1">
          <img
            src="https://zerodha.com/static/images/index-education.svg"
            height="350"
            width="400"
            alt="varsity image"
          />
        </div>
        <div className="col-md-7 order-md-2">
          <h1 className="market-edu">Free and open market education</h1>
          <p className="lead">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="icon-link">
            Varsity →
            <svg>
              <i class="bi bi-arrow-right"></i>
            </svg>
          </a>
          <br />
          <p className="lead">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" className="icon-link">
            TradingQ&A →
            <svg>
              <i class="bi bi-arrow-right"></i>
            </svg>
          </a>
        </div>
      </div>
      <div className="position-relative p-5 text-center">
        <h1 className="text-body-emphasis">Open a Zerodha account</h1>
        <p className="col-lg-6 mx-auto mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button className="btn btn-primary px-3 mb-5" type="button">
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Front;
