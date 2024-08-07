import { Box, Button, Input } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArts } from "../../store/tableSlice/tableSlice";

const DataInsertion = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.students);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      dateOfBirth: "",
    },
    onSubmit: (values, { resetForm }) => {
      // const updatedStudents = [...students, values];
      dispatch(setArts([...students, values]));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display="flex" flexDirection="column" gap={1} p={3} w="40vw">
        <Input
          bg="#EDF2F7"
          placeholder="Name"
          type="text"
          variant="outlined"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <Input
          bg="#EDF2F7"
          placeholder="Email"
          type="email"
          variant="outlined"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          bg="#EDF2F7"
          placeholder="Age"
          type="number"
          variant="outlined"
          name="age"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        <Input
          bg="#EDF2F7"
          placeholder="Date of Birth"
          type="date"
          variant="outlined"
          name="dateOfBirth"
          onChange={formik.handleChange}
          value={formik.values.dateOfBirth}
        />
        <Button type="submit">Submit</Button>
      </Box>
    </form>
  );
};

export default DataInsertion;
