import React from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";



function Lepesek(props) {

    

    return (
        <div>
            <h1>ez az első lepes</h1>
            <Button onClick={() => props.vissza()}>Vissza</Button>
        </div>
    )
}


export default Lepesek;