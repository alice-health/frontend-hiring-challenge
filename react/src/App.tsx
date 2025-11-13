import "./App.css";
import { Routes, Route } from "react-router-dom";
import PatientList from "@/PatientList";
import PatientDetails from "@/PatientDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PatientList />} />
      <Route path="/patient/:id" element={<PatientDetails />} />
    </Routes>
  );
}

export default App;
