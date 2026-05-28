import { Link } from "react-router-dom";

export default function Navbar() {

  return (

    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem 2rem",
        backgroundColor: "#166534"
      }}
    >

      <h2
        style={{
          color: "white",
          margin: 0
        }}
      >
        GreenWatch
      </h2>

      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Inicio
      </Link>

      <Link
        to="/reports"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Reportes
      </Link>

    </nav>
  );
}