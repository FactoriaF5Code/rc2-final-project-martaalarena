import "./Login.css";
import ripCurrent from "../../assets/RIP CURRENT.png";
import ripCurrentLogo from "../../assets/rip_current_logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <main className="containerLogin">
        <div className="imgContainerLogin">
          <img src={ripCurrentLogo} alt="logo" />
          <img src={ripCurrent} alt="logo" />
        </div>
        <div className="loginForm">
          <h1>Login</h1>
          <hr />
          <form action="">
            <label htmlFor="">Email</label>
            <input type="text" autoComplete="off" />
            <label htmlFor="">Contraseña</label>
            <input type="password" autoComplete="off"/>
          </form>
          <Link to="/home">
            <button>Entrar</button>
          </Link>
        </div>
      </main>
    </>
  );
}
