import React from "react";

function Product() {
  return (
    <div className="product">
      <div className="position-relative p-5 text-center">
        <h1 className="text-body-emphasis">Technology</h1>
        <p className="col-lg-6 mx-auto mb-4">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p>
          Check out our{" "}
          <a className="investment-link" href="#">
            investment offerings →{" "}
          </a>
        </p>

        <br />
        <br />
        <br />
        <hr className="featurette-divider"></hr>
      </div>
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">Kite</h2>
          <p className="lead">
            Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices.
          </p>
          <a href="#" className="link-product">
            Try demo →
          </a>
          <a href="#" className="link-product" id="product-link">
            Learn more →{" "}
          </a>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="pro-img"
            src="https://zerodha.com/static/images/products-kite.png"
          />
        </div>
      </div>
      <div className="row featurette">
        <div className="col-md-7">
          <h2 classNamw="featurette-heading fw-normal lh-1">Console</h2>
          <p className="lead">
            The central dashboard for your Zerodha account. Gain insights into
            your trades and investments with in-depth reports and
            visualisations.
          </p>
          <a href="#" className="link-product">
            Learn more →
          </a>
        </div>
        <div className="col-md-5">
          <img
            className="pro-img"
            src="	https://zerodha.com/static/images/products-console.png"
          />
        </div>
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Coin</h2>
            <p className="lead">
              Buy direct mutual funds online, commission-free, delivered
              directly to your Demat account
            </p>
            <a href="#" className="link-product">
              Coin →{" "}
            </a>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="pro-img"
              src="https://zerodha.com/static/images/products-coin.png"
            />
          </div>
        </div>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              Kite Connect API
            </h2>
            <p className="lead">
              Build powerful trading platforms and experiences with our super
              simple HTTP/JSON APIs. If you are a startup, build your investment
              app and showcase it to our clientbase.
            </p>
            <a href="#" className="link-product">
              Kite Connect →
            </a>
          </div>
          <div className="col-md-5">
            <img
              className="pro-img"
              src="https://zerodha.com/static/images/products-kiteconnect.png"
            />
          </div>

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Varsity mobile
              </h2>
              <p className="lead">
                An easy to grasp, collection of stock market lessons with
                in-depth coverage and illustrations. Content is broken down into
                bite-size cards to help you learn on the go.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="pro-img"
                src="	https://zerodha.com/static/images/varsity-products.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative p-5 text-center">
        <h5>
          Want to know more about our technology stack? Check out the
          <a className="investment-link" href="#">
            Zerodha.tech
          </a>{" "}
          blog.
        </h5>
        <h1 className="text-body-emphasis">The Zerodha Universe</h1>
        <p className="col-lg-6 mx-auto mb-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <a href="#">
              <img
                className="smallcase-logo"
                src="https://zerodha.com/static/images/products/smallcase-logo.png"
              />
              <br />
              <span className="text-12">
                Thematic investment platform
              </span>
            </a>
          </div>
          <div className="feature col">
            <a href="#">
              <img
                className="streak-logo"
                src="https://zerodha.com/static/images/products/streak-logo.png"
                height="55px"
                width="210px"
              />
              <br />
              <span className="text-12 text-light-grey">
                Algo &amp; strategy platform
              </span>
            </a>
          </div>
          <div className="feature col">
            <a href="#">
              <img
                className="sensibull-logo"
                src="https://zerodha.com/static/images/products/sensibull-logo.svg"
                height="40px"
                width="220px"
              />
              <br />
              <span className="text-12 text-light-grey sensibull-desc">
                Options trading platform
              </span>
            </a>
          </div>
        </div>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <a href="#">
              <img className="zfh-logo" src="https://zerodha.com/static/images/partners/zerodhafundhouse.png" height="55px" width="195px" />
              <br />
              <span className="text-12 text-light-grey">Asset management</span>
            </a>
          </div>
          <div className="feature col">
            <a href="#">
              <img className="goldenpi-logo" src="https://zerodha.com/static/images/partners/tijori.svg" height="55px" width="145px" />
              <br />
              <span className="text-12 text-light-grey">
                Fundamental research platform
              </span>
            </a>
          </div>
          <div className="feature col">
            <a href="#">
              <img className="ditto-logo" src="	https://zerodha.com/static/images/products/ditto-logo.png" height="55px" width="145px" />
              <br />
              <span className="text-12 text-light-grey">Insurance</span>
            </a>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary px-3 mb-5 align-item-center"
        type="button"
        id="button"
      >
        Sign up now
      </button>
    </div>
  );
}

export default Product;
