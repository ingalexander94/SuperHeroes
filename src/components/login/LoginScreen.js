import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name: "Alexander Peñaloza",
      },
    });
    const lastPath = localStorage.getItem("lastPath") || "/";
    history.replace(lastPath);
  };

  return (
    <div className="container mt-5">
      <div className="mx-auto text-center">
        <h1 className="text-white">Aplicación de Héroes</h1>
        <hr />
        <button onClick={handleLogin} className="btn btn-outline-info btn-lg">
          Entrar
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
