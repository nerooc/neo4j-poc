import React from "react";

import { Routes, Route } from "react-router-dom";
import { routes } from "./routing";
import { Navbar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {routes.map(({ path, exact, component: Component }, idx: number) => (
          <Route path={path} element={<Component />} key={path}></Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
