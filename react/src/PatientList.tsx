import { Link } from "react-router-dom";

export default function PatientList() {
  return (
    <div>
      <h1>Lista de Pacientes</h1>
      <p>Rota: /</p>
      <ul>
        <li>
          <Link to="/patient/1">Paciente 1</Link>
        </li>
        <li>
          <Link to="/patient/2">Paciente 2</Link>
        </li>
        <li>
          <Link to="/patient/3">Paciente 3</Link>
        </li>
      </ul>
    </div>
  );
}
