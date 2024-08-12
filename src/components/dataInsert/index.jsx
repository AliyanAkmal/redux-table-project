import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArts } from "../../store/tableSlice/tableSlice";

const DataInsertion = ({ setInsert }) => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.students);
  const validate = (value) => {
    const errors = {};
    if (!value.name) {
      errors.name = "Input value is invalid";
    } else if (!value.email) {
      errors.email = "Please enter a valid email";
    } else if (value.age < 18) {
      errors.age = "You are under the age limit";
    } else if (value.age === "" || undefined) {
      errors.age = "Required";
    } else if (!value.dateOfBirth) {
      errors.dateOfBirth = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      dateOfBirth: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      dispatch(setArts([...students, values]));
      resetForm();
      setInsert(true);
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
          error={formik.errors.name}
        />
        {formik.errors.name ? (
          <Text color="red" fontSize="small" pl={3}>
            {formik.errors.name}
          </Text>
        ) : null}
        <Input
          bg="#EDF2F7"
          placeholder="Email"
          type="email"
          variant="outlined"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
        {formik.errors.email ? (
          <Text color="red" fontSize="small" pl={3}>
            {formik.errors.email}
          </Text>
        ) : null}
        <Input
          bg="#EDF2F7"
          placeholder="Age"
          type="number"
          variant="outlined"
          name="age"
          onChange={formik.handleChange}
          value={formik.values.age}
          error={formik.errors.age}
        />
        {formik.errors.age ? (
          <Text color="red" fontSize="small" pl={3}>
            {formik.errors.age}
          </Text>
        ) : null}
        <Input
          bg="#EDF2F7"
          placeholder="Date of Birth"
          type="date"
          variant="outlined"
          name="dateOfBirth"
          onChange={formik.handleChange}
          value={formik.values.dateOfBirth}
          error={formik.errors.dateOfBirth}
        />
        {formik.errors.dateOfBirth ? (
          <Text color="red" fontSize="small" pl={3}>
            {formik.errors.dateOfBirth}
          </Text>
        ) : null}
        <Button type="submit">Submit</Button>
      </Box>
    </form>
  );
};

export default DataInsertion;
