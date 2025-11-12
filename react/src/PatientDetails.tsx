import { Link, useParams } from "react-router-dom";

export default function PatientDetails() {
  const { id: patientId } = useParams();

  return (
    <div>
      <h1>Detalhes do Paciente</h1>
      <p>Rota: /patient/{patientId}</p>
      <p>ID do Paciente: {patientId}</p>
      <Link to="/">← Voltar para Lista</Link>
    </div>
  );
}
