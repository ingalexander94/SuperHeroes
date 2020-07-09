import React, { useMemo } from "react";
import queryString from "query-string";
import HeroeCard from "../heroes/HeroeCard";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router-dom";
import { getHeroeByName } from "../../selectors/getHeroeByName";

const SearchScreen = ({ history }) => {
  const { search } = useLocation();
  const { q = "" } = queryString.parse(search);

  const [value, handleInputChange, reset] = useForm({
    filtro: q,
  });

  const { filtro } = value;

  const heroes = useMemo(() => getHeroeByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (filtro.trim() === "") {
      reset();
      return;
    }
    history.push(`?q=${filtro}`);
  };

  const handleFocus = (e) => {
    e.currentTarget.select();
  };

  return (
    <div className="row">
      <div className="col-5">
        <h4 className="text-white"> Filtro </h4>
        <hr className="text-white" />
        <form onSubmit={handleSearch}>
          <input
            className="form-control"
            id="filtro"
            name="filtro"
            value={filtro}
            onChange={handleInputChange}
            onClick={handleFocus}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Nombre"
            required
          />
          <button type="submit" className="btn btn-outline-info btn-block mt-2">
            Buscar
          </button>
        </form>
      </div>
      <div className="col-7">
        <h4 className="text-white"> Resultados </h4>
        <hr className="text-white" />

        {heroes.length < 1 ? (
          <div
            className={`alert alert-${
              q === "" ? "info" : "danger"
            } animate__animated animate__fadeInDown`}
            role="alert"
          >
            {q === ""
              ? "Busque los heroes por su nombre."
              : "No se han encontrado heroes."}
          </div>
        ) : (
          heroes.map((heroe) => (
            <div
              key={heroe.id}
              className="animate__animated animate__backInRight"
            >
              <HeroeCard heroe={heroe} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchScreen;
