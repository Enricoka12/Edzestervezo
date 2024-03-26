import React, { useState } from "react";
import Navbar2 from "./Navbar2.jsx";
import Edzesnapok from "./Edzesnapok.jsx";
import Footer from "./Footer.jsx";
import Indexoldal from "./IndexOldal.jsx";
import Ujnavbar from "./Ujnavbar.jsx";

export default function App() {
  const [bejelentkezve, Isbejelentkezve] = useState(false);

  function kattintas() {
    Isbejelentkezve(!bejelentkezve);
  }

  return (
    <div className="flex flex-col h-screen">
      {bejelentkezve ? (
        <Ujnavbar kattintas={kattintas} bejelentkezve={bejelentkezve} />
      ) : null}

      <div className="flex flex-grow justify-evenly pb-8 md:h-screen bg-[url('/hatter2.jpg')] bg-cover ">
        {bejelentkezve ? (
          <Edzesnapok className="h-screen" />
        ) : (
          <Indexoldal kattintas={kattintas} />
        )}
      </div>

      <Footer className="mt-auto" />
    </div>
  );
}
