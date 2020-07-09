import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroeById } from "../../selectors/getHeroeById";

const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();

  const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]);

  if (!heroe) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    history.length < 3 ? history.push("/") : history.goBack();
  };

  return (
    <div className="container-fluid">
      <div className="card mb-4">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`../assets/heroes/${heroe.id}.jpg`}
              alt={heroe.superhero}
              className="card-img img-thumbnail animate__animated animate__fadeInLeft"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body animate__animated animate__fadeIn">
              <h3 className="card-title">{heroe.superhero}</h3>
              <br></br>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Alter ego: </b> {heroe.alter_ego}{" "}
                </li>
                <li className="list-group-item">
                  <b>Editorial: </b> {heroe.publisher}{" "}
                </li>
                <li className="list-group-item">
                  <b>Primera aparición: </b> {heroe.alter_ego}{" "}
                </li>
              </ul>
              <br></br>

              <h5>Caracteres</h5>
              <p className="card-text">{heroe.characters}</p>

              <button onClick={handleReturn} className="btn btn-outline-dark">
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;
