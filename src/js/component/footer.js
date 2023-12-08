import React from "react";

function Footer(params) {
  return (
    <div className="mt-5 bg-white">
      <nav className="navbar navbar-expand-lg p-4 fw-bold font-monospace bg-white">
        <div className="container-fluid">
          <a className="navbar-brand ms-4" href="#">
            ☂️Frontend Mentor
          </a>
          <div className="" id="navbarNav">
            <ul className="navbar-nav mx-5">
              <li className="nav-item">
                <a className="nav-link active fst-italic" href="#">
                  🌲
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fst-italic" href="#">
                  🌵
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fst-italic" href="#">
                  🍀
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fst-italic" href="#">
                  🍂
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mx-5">
        <div className="row text-start mt-4 ms-5 bg-white">
          <div className="col-6">
            <h2 className="fs-3 text-primary">Stay up to date!</h2>
            <p>
              with new challenges, featured solutions,<br></br> selected
              articles and our latest news
            </p>
            <div className="">
              <input
                className="p-1"
                placeholder="Write here your email"
              ></input>
              <button className="text-white fwd-bold fs-5 mx-2 bg-danger rounded ">
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div className="text-center col-2">
            <h5 className="fs-6">FRONTEND MENTOR</h5>
            <ul className="list-unstyled">
              <li>Unlock Pro</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="text-center col-2">
            <h5 className="fs-6">FRONTEND MENTOR</h5>
            <ul className="list-unstyled">
              <li>Unlock Pro</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="text-center col-2">
            <h5 className="fs-6">FRONTEND MENTOR</h5>
            <ul className="list-unstyled">
              <li>Unlock Pro</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-5 card border-primary p-2 mb-5 bg-light">
        <div className="row">
          <p className="col-md-4 text-start fw-bold">
            © Frontend Mentor 2019 - 2023
          </p>
          <ul className="col-md-8 list-unstyled d-flex justify-content-end">
            <li className="mx-3">Terms</li>
            <li className="mx-3">Cookies</li>
            <li className="mx-3">Privacy</li>
            <li className="mx-3">License</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
