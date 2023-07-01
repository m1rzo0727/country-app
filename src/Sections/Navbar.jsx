import React from "react";

const Navbar = () => {
  return (
    <section id="navbar-section">
      <div className="container navbar-content">
        <h3 className="navbar-title">Where in the world?</h3>
        <label htmlFor="navbar-mode" className="navbar-label">
          <i class="fa-solid fa-moon navbar-icon"></i>
          Dark Mode
          <input
            type="checkbox"
            id="navbar-mode"
            name="navbar-mode"
            className="navbar-input"
          />
        </label>
      </div>
    </section>
  );
};

export default Navbar;
