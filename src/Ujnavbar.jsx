import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

//IKONOK
import { LuLogOut } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { GiNotebook } from "react-icons/gi";
import { GiCardPickup } from "react-icons/gi";
import { IoMdContacts } from "react-icons/io";

function Ujnavbar(props) {
  const menuItems = [
    { icon: <CgProfile />, label: "Profil" },
    { icon: <GiNotebook />, label: "Edzéstervem" },
    { icon: <GiCardPickup />, label: "Edzésterv választás" },
    { icon: <IoMdContacts />, label: "Kontakt" },
  ];

  const bejelentkezveertek = props.bejelentkezve
  return (
    <div className=" bg-black bg-transparent">
      <Navbar   className="bg-black text-white">
        <NavbarContent className="sm:hidden bg-transparent" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent
          className="sm:hidden pr-3 bg-transparent"
          justify="center"
        >
          <NavbarBrand>
            <img
              src="/csaklogo.png"
              className="h-1/4 w-1/4 pb-4"
              alt=" Logo"
            />
            <p className="font-bold text-white">Edzésterv</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-4 bg-transparent"
          justify="center"
        >
          <NavbarBrand>
            <img
              src="/csaklogo.png"
              className="h-1/4 w-1/4 pb-4"
              alt=" Logo"
            />
            <p className="font-bold text-white">Edzésterv</p>
          </NavbarBrand>
          {bejelentkezveertek && (
            <>
              <NavbarItem isActive>
                <Link
                  href="#"
                  className="text-white p-4"
                  aria-current="page"
                  color="warning"
                >
                  <Button className=" rounded-full">
                    <GiNotebook />
                    Edzéstervem
                  </Button>
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link className="text-white p-4" color="foreground" href="#">
                  <Button className=" rounded-full">
                    <CgProfile />
                    Profil
                  </Button>
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link className="text-white p-4" color="foreground" href="#">
                  <Button className=" rounded-full">
                    <GiCardPickup />
                    Edzésterv választás
                  </Button>
                </Link>
              </NavbarItem>
            </>
          )}
        </NavbarContent>

        <NavbarContent className="ms-10">
          <NavbarItem className="hidden lg:flex"></NavbarItem>
          <NavbarItem>
            {bejelentkezveertek && (
              <Button className=" rounded-full ms-10" onClick={props.kijelentkezes}>
                <LuLogOut />
              </Button>
            )}
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <div className="grid ">
                <div className="flex  items-center justify-start align-middle">
                  <div className="justify-end grid pe-6 text-4xl">
                    {item.icon}
                  </div>
                  <Link
                    className="text-4xl "
                    color={
                      index === 2
                        ? "warning"
                        : index === menuItems.length - 1
                        ? "danger"
                        : "foreground"
                    }
                    href="#"
                    size="xxl"
                  >
                    {item.label}
                  </Link>
                 
                </div>
              </div>
            </NavbarMenuItem>
            
          ))}
           <img src="logo.svg"></img>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}

export default Ujnavbar;
