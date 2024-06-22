import React from "react";

function About() {
  return (
    <div className="about">
      <h1 className="booking-model" p-5>
        We pioneered the discount broking model in India. <br />
        Now, we are breaking ground with our technology.
      </h1>
      <hr className="featurette-divider"></hr>
      <div>
        <p>
          We kick-started operations on the 15th of August, 2010 with the goal
          of breaking all barriers that traders and investors face in India in
          terms of cost, support, and technology. We named the company Zerodha,
          a combination of Zero and "Rodha", the Sanskrit word for barrier.
        </p>
        <p>
          Today, our disruptive pricing models and in-house technology have made
          us the biggest stock broker in India.
        </p>
        <p>
          Over 1+ Crore clients place millions of orders every day through our
          powerful ecosystem of investment platforms, contributing over 15% of
          all Indian retail trading volumes.
        </p>
        <p>
          In addition, we run a number of popular open online educational and
          community initiatives to empower retail traders and investors.
        </p>
        <p>
          Rainmatter, our fintech fund and incubator, has invested in several
          fintech startups with the goal of growing the Indian capital markets.
        </p>
        <p>
          And yet, we are always up to something new every day. Catch up on the
          latest updates on our blog or see what the media is saying about us.
        </p>
      </div>

      <div className="row featurette">
        <h1 className="people">People</h1>
        <div className="col-md-7 order-md-2">
          {/* <h2 className="featurette-heading fw-normal lh-1">
            Oh yeah, it’s that good.{" "}
            <span className="text-body-secondary">See for yourself.</span>
          </h2>
          <p className="lead">
            Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place.
          </p> */}

          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on
            <a className="connect-link"> Homepage</a> /
            <a className="connect-link"> TradingQnA</a> /
            <a className="connect-link"> Twitter</a>
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img src="https://zerodha.com/static/images/nithin-kamath.jpg" className="Nithin-img"/>
          <div className="image-text">
            <h5>Nithin Kamath</h5>
            <p>Founder, CEO</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <img
            src="https://zerodha.com/static/images/Nikhil.jpg"
            className="profile-img"
          />
          <h5 className="fw-normal">Nikhil Kamath</h5>
          <p>Co-founder & CFO</p>
          <details className="show-bio">
            <summary>
              Bio
              <i className="bi bi-chevron-down"></i>
            </summary>
            <div className="bio-details">
              <p>
                Nikhil is an astute and experienced investor, and he heads
                financial planning at Zerodha. An avid reader, he always
                appreciates a good game of chess.
              </p>
            </div>
          </details>
        </div>
        <div className="col-lg-4">
          <img src="https://zerodha.com/static/images/Kailash.jpg" className="profile-img" />
          <h5 className="fw-normal">Dr. Kailash Nadh</h5>
          <p>CTO</p>
          <details className="show-bio">
            <summary>
              Bio
              <i className="bi bi-chevron-down"></i>
            </summary>
            <div className="bio-details">
              <p>
                Kailash has a PhD in Artificial Intelligence & Computational
                Linguistics, and is the brain behind all our technology and
                products. He has been a developer from his adolescence and
                continues to write code every day.
              </p>
            </div>
          </details>
        </div>

        <div className="col-lg-4">
          <img src="https://zerodha.com/static/images/Venu.jpg" className="profile-img" />
          <h5 className="fw-normal">Venu Madhav</h5>
          <p>COO</p>
          <details className="show-bio">
            <summary>
              Bio
              <i className="bi bi-chevron-down"></i>
            </summary>
            <div className="bio-details">
              <p>
                Venu is the backbone of Zerodha taking care of operations and
                ensuring that we are compliant to rules and regulations. He has
                over a dozen certifications in financial markets and is also
                proficient in technical analysis. Workouts, cycling, and
                adventuring is what he does outside of Zerodha.
              </p>
            </div>
          </details>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img src="	https://zerodha.com/static/images/Hanan.jpg" className="profile-img" />
            <h5 className="fw-normal">Hanan Delvi</h5>
            <p>CCO</p>
            <details className="show-bio">
              <summary>
                Bio
                <i className="bi bi-chevron-down"></i>
              </summary>
              <div className="bio-details">
                <p>
                  We take pride in the way we support our clients, and Hanan is
                  responsible for this with his never ending flow of energy. He
                  is the man behind many of our support initiatives that have
                  helped us stay ahead of the game. A free thinker, Hanan can be
                  seen posing as one in his free time.
                </p>
              </div>
            </details>
          </div>
          <div className="col-lg-4">
            <img src="https://zerodha.com/static/images/Seema.jpg" className="profile-img" />
            <h5 className="fw-normal">Seema Patil</h5>
            <p>Director</p>
            <details className="show-bio">
              <summary>
                Bio
                <i className="bi bi-chevron-down"></i>
              </summary>
              <div className="bio-details">
                <p>
                  Seema who has lead the quality team since the beginning of
                  Zerodha, is now a director. She is an extremely disciplined
                  fitness enthusiast.
                </p>
              </div>
            </details>
          </div>
          <div className="col-lg-4">
            <img src="https://zerodha.com/static/images/karthik.jpg" className="profile-img" />
            <h5 className="fw-normal">Karthik Rangappa</h5>
            <p>Chief of Education</p>
            <details className="show-bio">
              <summary>
                Bio
                <i className="bi bi-chevron-down"></i>
              </summary>
              <div className="bio-details">
                <p>
                  Karthik "Guru" Rangappa single handledly wrote Varsity,
                  Zerodha's massive educational program. He heads investor
                  education initiatives at Zerodha and loves stock markets,
                  classic rock, single malts, and photography.
                </p>
              </div>
            </details>
          </div>
          <div className="col-lg-4">
            <img src="https://zerodha.com/static/images/Austin.jpg" className="profile-img" />
            <h5 className="fw-normal">Austin Prakesh</h5>
            <p>Director Strategy</p>
            <details className="show-bio">
              <summary>
                Bio
                <i className="bi bi-chevron-down"></i>
              </summary>
              <div className="bio-details">
                <p>
                  Austin is a successful self-made entrepreneur from Singapore.
                  His area of specialty revolves around helping organisations
                  including grow by optimizing revenue streams and creating
                  growth strategies. He is a boxing enthusiast and loves
                  collecting exquisite watches.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
