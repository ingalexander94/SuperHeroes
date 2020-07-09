import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HeroeCard = ({ heroe }) => {
  return (
    <div className="col">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={`./assets/heroes/${heroe.id}.jpg`}
              className="card-img"
              alt={heroe.superhero}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{heroe.superhero}</h5>
              <p className="card-text">{heroe.alter_ego}</p>
              {heroe.alter_ego !== heroe.characters && (
                <p className="card-text">{heroe.characters}</p>
              )}
              <p className="card-text">
                <small className="text-muted">{heroe.first_appearance}</small>
              </p>
              <Link to={`./heroe/${heroe.id}`}>Ver más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroeCard.propTypes = {
  heroe: PropTypes.object.isRequired,
};

export default HeroeCard;
