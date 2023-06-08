import React from "react";
import SideBar from "./components/SideBar";
const App = () => {
  return (
    <section className="h-screen  flex ">
      <SideBar />
      <main className="bg-white"></main>
    </section>
  );
};

export default App;
