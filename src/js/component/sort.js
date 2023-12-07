import React from "react";

function Sort(params) {
  return (
    <nav>
      <div className="navbar navbar-expand-lg p-2 border border-dark-subtle">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold ms-5">CHALLENGES</a>
        </div>
        <div className="dropdown navbar-brand font-monospace me-5 fs-6 fst-italic">
          <span
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            SORT BY
          </span>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown navbar-brand font-monospace me-5 fs-6 fst-italic">
          <span
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            FILTER BY
          </span>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sort;
