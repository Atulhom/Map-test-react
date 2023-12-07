import React from "react";

function Header(params) {
  let website = "Visit our Hiring Platform";

  return (
    <div className="container-fluid p-3 bg-primary text-white">
      <span className="navbar-brand mb-0 h1">
        🌌 Looking to hire developers? {website}
      </span>
    </div>
  );
}

export default Header;
