import React from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";


function IndexOldal(props) {
  const [selected, setSelected] = React.useState("login");

  return (
    <div>

    <div className="flex justify-center">
      <img src="../public/logo.svg" className=" md:h-1/2 md:w-1/2 lg:min-h-52 lg:min-w-52 z-2" ></img>
      </div>
    <div className="flex  lg:w-full  justify-center   ">
      
      
      <Card className=" max-w-full w-[330px] h-[400px] md:w-[360px] md:h-[400px] bg-opacity-35 z-1 ">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Bejelentkezés">
              <form className="flex flex-col gap-4">
                <Input isRequired label="Email" placeholder="Írd be az Email Címed" type="email" />
                <Input
                  isRequired
                  label="Jelszó"
                  placeholder="Írd be a Jelszavad"
                  type="password"
                />
               
                <div className="flex gap-2 justify-end">
                  <Button onClick={props.kattintas} fullWidth color="primary">
                    Bejelentkezés
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Regisztráció">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input isRequired label="Email" placeholder="Írd be az Email Címed" type="email" />
                <Input
                  isRequired
                  label="Jelszó"
                  placeholder="Írd be a Jelszavad"
                  type="password"
                />
               
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                  Regisztráció
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
      </div>

      </div>

  );
}


export default IndexOldal;