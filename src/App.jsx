import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import EduMotive from "./EduMotive/EduMotive";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <EduMotive />
      </ChakraProvider>
    </>
  );
};

export default App;
