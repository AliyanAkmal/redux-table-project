import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import TableComponent from "../../components/tableComponent";
import DataInsertion from "../../components/dataInsert";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [stateOne, setStateOne] = useState(true);
  const [insert, setInsert] = useState(true);
  ////////////////////////////////////
  const students = useSelector((state) => state.student.students);
  console.log(students);

  /////////////////////////////////////
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
      <Button bgColor="#14A800" color="#ffff" onClick={handleClick}>
        View data
      </Button>
      <Box position="absolute" top="30%" left="10%" width="50vw">
        {students.length === 0 && !stateOne ? (
          <Text fontSize={50} fontWeight="bold" fontFamily="monospace">
            No data to show
          </Text>
        ) : (
          <Box>{!stateOne ? <TableComponent /> : null}</Box>
        )}
      </Box>
      <Box>
        <Button bgColor="#A334EE" color="#ffff" onClick={handleInsert}>
          Insert data
        </Button>
        <Box position="absolute" top="30%" left="50%">
          {!insert ? <DataInsertion setInsert={setInsert} /> : null}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
