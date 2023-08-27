import ButtonLogin from "../components/ButtonLogin";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="login-principal">
        <img src="..\src\assets\images\girlLogo.jpg" alt="" />
        <div className="content-login">
          <img src="..\src\assets\images\logo.png" alt="" />
          <h1>Turing</h1>
          <p>Los mejores cursos de programacion totalmente gratis</p>
          <input className="inputSubmit" type="email" placeholder="Email" />
          <input
            className="inputSubmit"
            type="password"
            placeholder="Contraseña"
          />
          <input
            type="submit"
            className="css-button-3d--red "
            value="Iniciar Sesion"
          />
          <input
            className="css-button-3d--red "
            type="submit"
            value="continuar con Google"
          />
          <ButtonLogin />
        </div>
      </div>
    </>
  );
};
