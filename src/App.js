import logo from './logo.svg';
import './App.css';
import "./style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Dashboard />}>
        </Route>
    </Routes>
    </BrowserRouter >
  );
}

export default App;
