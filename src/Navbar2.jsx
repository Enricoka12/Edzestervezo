import React,{useState} from "react"
import {Navbar ,NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


function Navbar2(props) {

  let bejelentkezve = props.bejelentkezve

  //console.log(bejelentkezve)

  return (
    <div className="bg-gray-500 bg-opacity-50">
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
       <img src="../public/csaklogo.png" className="h-1/4 w-1/4 pb-4 "></img>
        <p className="font-bold text-inherit">Edzésterv</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {bejelentkezve ? (
          <>
            <NavbarItem>
              <Link color="foreground" href="#">
                Új edzésterv
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Edzéstervem
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Profil
              </Link>
            </NavbarItem>
          </>
        ) : null}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex"></NavbarItem>
        <NavbarItem>
          {bejelentkezve ? (
            <Button onClick={props.kijelentkezes}>Kijelentkezés</Button>
          ) : null}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  </div>
)
}

export default Navbar2;