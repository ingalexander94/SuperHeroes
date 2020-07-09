import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { getHeroeByPublisher } from "../../selectors/getHeroesByPublisher";
import HeroeCard from "./HeroeCard";

const HeroeList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher]);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
      {heroes.map((heroe) => (
        <HeroeCard key={heroe.id} heroe={heroe} />
      ))}
    </div>
  );
};

HeroeList.propTypes = {
  publisher: PropTypes.string.isRequired,
};

export default HeroeList;
