import React, { useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";

//IKONOK
import { IoMdAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


 



function Kartya(props) {

const [edzesadat,setedzesadat] = useState("")


  return (
    <Card className="w-auto max-h-[300px] ">

      <div className="text-center">
          <p className="text-lg">{props.napnev}</p>
        </div>

      
      <Divider/>
      <CardBody>
        <div className="">
      {edzesadat ? "itt az edzés adatod" : "Nincs edzés megadva erre a napra"}
        </div>
      </CardBody>
      <Divider/>
      <CardFooter>
    
      <ButtonGroup>
      <Button color="primary">  <IoMdAdd/></Button>
      <Button color="primary"><MdEdit/></Button>
      <Button color="primary"><MdDelete/></Button>
    </ButtonGroup>
      </CardFooter>
    </Card>
  );
}


export default Kartya;