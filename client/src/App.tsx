import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components";

const App = (): React.ReactNode => {
  return (
    <div className="w-full h-screen">
      <div className="mt-2 mx-auto w-fit">
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
};

export default App;
