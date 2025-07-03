import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/elos" element={<Home />} />
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}

export default App;
