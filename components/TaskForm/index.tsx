"use client"
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as C from "./styles";

interface TaskFormProps {
  onSubmit: (values: TaskValues, actions: any) => void;
}

interface TaskValues {
  task: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const initialValues: TaskValues = { task: "" };

  const validationSchema = Yup.object({
    task: Yup.string().required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
          <C.Main>
        <Form>
            <C.Container>
            <C.Button type="submit">Nova</C.Button>
              <C.StyledField
                name="task"
                type="text"
                placeholder="Escreva aqui..."
                autoComplete="off"
              />

            </C.Container>
        </Form>
          </C.Main>
      )}
    </Formik>
  );
};

export default TaskForm;
