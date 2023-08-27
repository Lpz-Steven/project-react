import React from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const user = location.state?.user; // Usar la comprobación de nulidad

  if (!user) {
    return <div>No se encontraron datos de usuario.</div>;
  }

  console.log(user);

  return (
    <div>
      <img src={user.picture} alt="" />
      <h3>{user.name}</h3>
      {/* Mostrar otros datos del usuario aquí */}
    </div>
  );
}

export default Home;
