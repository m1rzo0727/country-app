import React from "react";

const Header = () => {
  return (
    <section id="header-section">
      <div className="container header-content">
        <form action="" className="header-search">
          <input type="search" className="header-input" />
          <button className="header-button">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <select
          id="header-select"
          name="header-select"
          className="header-select"
        >
          {" "}
          <option className="header-option" value="All">
            All
          </option>
          <option className="header-option" value="Africa">
            Africa
          </option>
          <option className="header-option" value="America">
            America
          </option>
          <option className="header-option" value="Asia">
            Asia
          </option>
          <option className="header-option" value="Europe">
            Europe
          </option>
          <option className="header-option" value="Oceania">
            Oceania
          </option>
        </select>
      </div>
    </section>
  );
};

export default Header;
