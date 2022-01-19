import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Award from "./components/Award";
import Employees from "./components/Employees";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/awards" element={<Award />} />
        <Route exact path="/employees" element={<Employees />} />
        <Route exact path="/dashboard/task1" element={<Task1 />} />
        <Route exact path="/dashboard/task2" element={<Task2 />} />
        <Route exact path="/dashboard/task3" element={<Task3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
