import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const TableComponent = () => {
  const students = useSelector((state) => state.student.students);

  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Age</Th>
            <Th>Date of Birth</Th>
          </Tr>
        </Thead>
        <Tbody>
          {students.map((data, index) => (
            <Tr key={index}>
              <Td>{data.name}</Td>
              <Td>{data.email}</Td>
              <Td>{data.age}</Td>
              <Td>{data.dateOfBirth}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
