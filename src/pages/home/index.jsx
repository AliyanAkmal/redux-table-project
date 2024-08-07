import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import TableComponent from "../../components/tableComponent";
import DataInsertion from "../../components/dataInsert";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [stateOne, setStateOne] = useState(true);
  const [insert, setInsert] = useState(true);
  ////////////////////////////////////
  const handleClick = () => {
    setStateOne(!stateOne);
    if (!insert) {
      setInsert(!insert);
    }
  };
  //////////////////
  const handleInsert = () => {
    setInsert(!insert);
    if (!stateOne) {
      setStateOne(stateOne);
    }
  };
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      position="relative"
      height="100vh"
    >
      <Box>
        <Button onClick={handleClick}>View data</Button>
        <Box>{!stateOne ? <TableComponent /> : null}</Box>
      </Box>
      <Box>
        <Button onClick={handleInsert}>Insert data</Button>
        <Box position="absolute" top="30%" left="30%">
          {!insert ? <DataInsertion /> : null}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
