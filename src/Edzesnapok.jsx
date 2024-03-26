import React from "react";
import Kartya from "./Kartya";



 function Edzesnapok() {
    return (
        <div className="lg:h-screen">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 mt-[5rem]">
    <Kartya
      napnev="Hétfő"
    />
  
  <Kartya
      napnev="Kedd"
    />

<Kartya
      napnev="Szerda"
    />

     <Kartya
      napnev="Csütörtök"
    />

<Kartya
      napnev="Péntek"
    />

<Kartya
      napnev="Szombat"
    />

<Kartya
      napnev="Vasarnap"
    />
</div>
        </div>
    )
 }


 export default Edzesnapok;