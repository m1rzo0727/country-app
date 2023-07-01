import React from "react";

const CountryCard = () => {
  return (
    <section className="country-card">
      <div className="country-card__flag"></div>
      <div className="country-card__info">
        <h3 className="country-card__name">Uzbekistan</h3>
        <p className="country-card__population">
          Population: <span>555</span>
        </p>
        <p className="country-card__capital">
          Capital:<span>555</span>{" "}
        </p>
        <p className="country-card__region">
          Region: <span>555</span>
        </p>
      </div>
    </section>
  );
};

export default CountryCard;
