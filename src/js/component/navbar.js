import React from "react";

function Navbar(params) {
  return (
    <nav className="navbar navbar-expand-lg p-4 fw-bold font-monospace bg-white">
      <div className="container-fluid">
        <a className="navbar-brand ms-4" href="#">
          ☂️Frontend Mentor
        </a>
        <div className="" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active fst-italic" href="#">
                CHALLENGES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active fst-italic" href="#">
                SOLUTIONS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active fst-italic" href="#">
                ARTICLES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active fst-italic" href="#">
                RESOURCES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active fst-italic" href="#">
                UNLOCK PRO
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active p-2 bg-black text-white rounded-pill fst-italic mx-1"
                href="#"
              >
                LOG IN WITH GITHUB⛵
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
